from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import uuid
import jwt
import datetime
import random
import os
from functools import wraps
from eskiz_sms import EskizSMS
from flask_cors import CORS


path = os.getcwd()
UPLOAD_FOLDER = os.path.join(path, 'uploads')

if not os.path.isdir(UPLOAD_FOLDER):
    os.mkdir(UPLOAD_FOLDER)

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'] )

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config["UPLOAD_EXTENSIONS"] = ALLOWED_EXTENSIONS
app.config['SECRET_KEY'] = 'S1O2B3I4R5'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

CORS(app, origins=['http://localhost:8000','http://192.168.1.163:8000/','https://localhost:8000','http://192.168.1.174:8000'])

db = SQLAlchemy(app)
app.app_context().push()


class Roles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    roles = db.relationship('Users', backref='roles', cascade='all, delete-orphan', lazy='dynamic')


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.Integer)
    username = db.Column(db.String(255))
    first_name = db.Column(db.String(255))
    last_name = db.Column(db.String(255))
    password = db.Column(db.String(20))
    role = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable=False)
    user = db.relationship('SmsCodeSave', backref='users', cascade='all, delete-orphan', lazy='dynamic')
    author = db.relationship('Posts', backref='users', cascade='all, delete-orphan', lazy='dynamic')
    date = db.Column(db.DateTime, nullable=False)


class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(1000), nullable=False)
    title = db.Column(db.String(500), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


class SmsCodeSave(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sms = db.Column(db.Integer, nullable=False)
    is_verify = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    date = db.Column(db.DateTime, nullable=False)


def allowed_image(filename):
    if not "." in filename:
        return False
    ext = filename.rsplit(".", 1)[1]
    if ext in app.config["UPLOAD_EXTENSIONS"]:
        return True
    else:
        return False


def send_sms(username, code_s):

    email = "Ibroxim.2001@mail.ru"
    password = "MQVib4PtVRhLOpjYcfRZRbEesmuxDWInZaEtSlaX"
    eskiz = EskizSMS(email=email, password=password)
    eskiz.send_sms(
                    username,
                    f"Verify your code using :-->> {code_s}",
                    from_whom="4546",
                    callback_url=None
                    )


def token_required(f):
   @wraps(f)
   def decorator(*args, **kwargs):
      token = None

      if 'x-access-tokens' in request.headers:
          token = request.headers['x-access-tokens']

      if not token:
          return jsonify({'message': 'a valid token is missing'}), 403

      try:
          data = jwt.decode(token, app.config['SECRET_KEY'],algorithms=['HS256'])
          current_user = Users.query.filter_by(public_id=data['public_id']).first()
      except Exception as e:
          return jsonify({'message': f'Token is invalid !! {e}'}), 401

      return f(current_user, *args, **kwargs)

   return decorator


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    if len(data['password']) == 1:
       return jsonify({'msg': 'Pour a better password'})

    hashed_password = generate_password_hash(data['password'])
    indentify = random.randint(10000, 99999)
    new_user = Users(
        public_id=indentify,
        username=data['username'],
        first_name=data['first_name'],
        last_name=data['last_name'],
        password=hashed_password, role=1,
        date=datetime.datetime.today())

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'registered successfully'})


@app.route('/login', methods=['POST'])
def login_user():

    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('Not Found', 401,
                             {'WWW.Authentication': 'Basic realm: "login required"'})

    user = Users.query.filter_by(username=auth.username).first()

    if user:
        sms_random = str(random.randint(10000, 99999))
        send_sms(str(auth.username), sms_random)
        code_save = SmsCodeSave(
            user_id=user.id,
            sms=sms_random,
            date=datetime.datetime.today(),
            is_verify=False)
        db.session.add(code_save)
        db.session.commit()

        if check_password_hash(user.password, auth.password):
            token = jwt.encode(
                {'public_id': user.public_id,
                 'exp': datetime.datetime.utcnow() + datetime.timedelta(days=2)},
                app.config['SECRET_KEY'], algorithm='HS256')
            return jsonify({'token': token})

    return make_response('No Found', 401,
                            {'WWW.Authentication': 'Basic realm: "login required"'})


@app.route('/check-sms', methods=['POST'])
@token_required
def check_sms_code(current_user):

    data = request.get_json()
    print(data['sms'])
    if data['sms'] == "":
        return jsonify({'msg': 'Invalid SMS code'})

    get_last_sms_history = SmsCodeSave.query.filter_by(user_id=current_user.id).order_by(SmsCodeSave.id.desc()).first()

    if int(data['sms']) == int(get_last_sms_history.sms):
        get_last_sms_history.is_verify=True
        db.session.commit()

        return jsonify({'msg': 'Welcome to system'})

    return jsonify({'msg': "Sms code error"}),404


@app.route('/user', methods=['GET'])
@token_required
def get_object(current_user):
    user = Users.query.filter_by(id = current_user.id).first()

    user_info = []
    data = {}
    if user:
        data['public_id'] = user.public_id
        data['username'] = user.username
        data['first_name'] = user.first_name
        data['last_name'] = user.last_name
        user_info.append(data)

        return jsonify({'msg': user_info})

    return jsonify({'msg': "User Not Found"})


@app.route('/users', methods=['GET'])
@token_required
def find_all_objects(current_user):

    users = Users.query.all()
    result = []
    for user in users:
        user_data = {}

        user_data['public_id'] = user.public_id
        user_data['username'] = user.username
        user_data['first_name'] = user.first_name
        user_data['last_name'] = user.last_name

        result.append({'msg':user_data})

    return jsonify({'users': result})


@app.route('/user/<public_id>', methods=['PUT'])
@token_required
def update_object(current_user,public_id):

    user = Users.query.filter_by(public_id=public_id).first()

    if user:
        data = request.get_json()
        user.username = data['username']
        user.first_name = data['first_name']
        user.last_name = data['last_name']

        db.session.commit()

        return jsonify({'msg': 'user updated'})

    return jsonify({'msg': 'user not found'})


@app.route('/user-password-change/<public_id>', methods=['PUT'])
@token_required
def update_password_object(current_user,public_id):

    user = Users.query.filter_by(public_id=public_id).first()

    if user:
        data = request.get_json()
        hashed_password = generate_password_hash(data['password'])
        user.password = hashed_password

        db.session.commit()

        return jsonify({'msg': 'user password updated'})

    return jsonify({'msg': 'user not found'})



@app.route('/user/<public_id>', methods=['GET'])
@token_required
def find_first_object(current_user,public_id):

    user = Users.query.filter_by(public_id=public_id).first()

    user_info = []

    if user:
        user_data = {}
        user_data['public_id'] = user.public_id
        user_data['username'] = user.username
        user_data['first_name'] = user.first_name
        user_data['last_name'] = user.last_name
        user_info.append(user_data)

        return jsonify({'msg': user_info})

    return jsonify({'msg': "User Not Found"})


@app.route('/user/<public_id>', methods=['DELETE'])
@token_required
def delete_object(current_user, public_id):

    user = Users.query.filter_by(public_id=public_id).first()

    if user:
        db.session.delete(user)
        db.session.commit()

        return jsonify({'msg': 'User deleted successfully!'})
    return  jsonify({'msg': 'Not Found'})


@app.route('/file-upload', methods=['POST'])
@token_required
def page_list(current_user):

    if 'file' not in request.files:
        return jsonify({'message': 'No file part in the request'})

    files = request.files['file']
    title = request.form['title']
    description = request.form['description']

    if title == "" or description == "":
        return jsonify({'msg':'Enter the info'})

    if files.filename == "":
        return jsonify({'message': 'No file selected for uploading'})

    if files and allowed_image(files.filename):
        filename = secure_filename(files.filename)
        create_post = Posts(image=filename, title=title, description=description, user_id=current_user.id)

        db.session.add(create_post)
        db.session.commit()

        files.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        return jsonify({'message': 'File successfully uploaded'})
    else:
        return jsonify({'message': 'Allowed file types are txt, pdf, png, jpg, jpeg, gif'})


@app.route('/file-upload', methods=['GET'])
@token_required
def pages(current_user):
    page_lists = Posts.query.all()

    result = []

    for page in page_lists:
        page_data = {}

        page_data['id'] = page.id
        page_data['image'] = page.image
        page_data['title'] = page.title
        page_data['description'] = page.description
        # page_data['user_id'] =

        result.append({'msg': page_data})

    return jsonify({'users': result})


@app.route('/file-upload/<identify>', methods=['GET'])
@token_required
def pages_get(current_user, identify):

    pages_list = Posts.query.filter_by(id=identify).first()

    if pages_list:
        result = []
        pages_data = {}
        pages_data['id'] = pages_list.id
        pages_data['image'] = pages_list.image
        pages_data['title'] = pages_list.title
        pages_data['description'] = pages_list.description

        result.append({'msg': pages_data})
        return jsonify({'users': result})
    return jsonify({'msg': 'Not Found'})


@app.route('/file-upload/<identify>', methods=['PUT'])
@token_required
def pages_update(current_user, identify):

    pages_list = Posts.query.filter_by(id=identify).first()
    print(pages_list)
    if pages_list:
        if 'file' not in request.files:
            return jsonify({'message': 'No file part in the request'})
        data = request.form
        files = request.files['file']
        title = data['title']
        description = data['description']

        if title == "" or description == "":
            return jsonify({'msg': 'Enter the info'})

        if files.filename == "":
            return jsonify({'message': 'No file selected for uploading'})

        if files and allowed_image(files.filename):
            print(files)
            print(title)
            print(description)
            filename = secure_filename(files.filename)
            page_list.image = filename
            page_list.title = title
            page_list.description = description

            db.session.commit()

            files.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        return jsonify({'message': 'Page successfully uploaded'})
    else:
        return jsonify({'message': 'Allowed file types are txt, pdf, png, jpg, jpeg, gif'})


@app.route('/file-upload/<identify>', methods=['DELETE'])
@token_required
def pages_delete(current_user, identify):

    pages_list = Posts.query.filter_by(id=identify).first()

    if pages_list:
        db.session.delete(pages_list)
        db.session.commit()

        return jsonify({'msg': 'Page deleted successfully!'})
    return jsonify({'msg': 'Not Found'})


@app.route('/roles', methods=['POST'])
def role_create():
    data = request.get_json()
    role = Roles(name=data['name'])
    db.session.add(role)
    db.session.commit()

    return jsonify({'message': 'new role created'})



if  __name__ == '__main__':
     app.run(
         debug=True,
         host='192.168.1.174',
         port=8000)