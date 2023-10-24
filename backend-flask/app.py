from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
import jwt
import datetime
import random
import os
from functools import wraps
from eskiz_sms import EskizSMS
from werkzeug.utils import secure_filename


UPLOAD_FOLDER = 'files'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)

app.config["UPLOAD_EXTENSIONS"] = ALLOWED_EXTENSIONS
app.config["UPLOAD_PATH"] = "image_uploads"
app.config['SECRET_KEY'] = 'S1O2B3I4R5'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

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
    image = db.Column(db.String(1000), unique=True, nullable=False)
    text = db.Column(db.String(500), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


class SmsCodeSave(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    sms = db.Column(db.Integer)
    is_verify = db.Column(db.Boolean)
    date = db.Column(db.DateTime, nullable=False)


def allowed_image(filename):
    if not "." in filename:
        return False
    ext = filename.rsplit(".", 1)[1]
    if ext.upper() in app.config["UPLOAD_EXTENSIONS"]:
        return True
    else:
        return False


def send_sms(username, code_s):
    """Send SMS Function"""
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
          # decoding the payload to fetch the stored details
          data = jwt.decode(token, app.config['SECRET_KEY'],algorithms=['HS256'])
          current_user = Users.query.filter_by(public_id=data['public_id']).first()
      except Exception as e:
          return jsonify({'message': f'Token is invalid !! {e}'}), 401

      return f(current_user, *args, **kwargs)

   return decorator


@app.route('/register', methods=['GET', 'POST'])
def signup_user():
    data = request.get_json()

    hashed_password = generate_password_hash(data['password'])

    new_user = Users(
        public_id=str(uuid.uuid4()),
        username=data['username'],
        first_name=data['first_name'],
        last_name=data['last_name'],
        password=hashed_password, role=1,
        date=datetime.datetime.today())
    db.session.add(new_user)
    db.session.commit()
    print(new_user)
    return jsonify({'message': 'registered successfully'})


@app.route('/login', methods=['GET', 'POST'])
def login_user():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('could not verify', 401,
                             {'WWW.Authentication': 'Basic realm: "login required"'})

    user = Users.query.filter_by(username=auth.username).first()

    # sms_random = str(random.randint(10000, 99999))
    # send_sms(user.username, sms_random)
    # code_save = SmsCodeSave(
    #     user_id=user.id,
    #     sms=sms_random,
    #     date=datetime.datetime.today(),
    #     is_verify=False)
    # db.session.add(code_save)
    # db.session.commit()

    if check_password_hash(user.password, auth.password):
        token = jwt.encode(
            {'public_id': user.public_id,
             'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)},
            app.config['SECRET_KEY'], algorithm='HS256')
        return jsonify({'token': token})

    return make_response('could not verify', 401,
                         {'WWW.Authentication': 'Basic realm: "login required"'})


@app.route('/check-sms', methods=['POST'])
@token_required
def check_sms_code(current_user):
    data = request.get_json()

    if data['sms'] == "":
        return jsonify({'msg': 'Invalid SMS code'})

    get_last_sms_history = SmsCodeSave.query.filter_by(user_id=current_user.id).order_by(SmsCodeSave.id.desc()).first()

    if int(data['sms']) == int(get_last_sms_history.sms):
        get_last_sms_history.is_verify=True
        db.session.commit()
        return jsonify({'msg': 'Welcome to system'})
    return jsonify({'msg': "Sms code error"})


@app.route('/users', methods=['GET'])
@token_required
def get_all_users(current_user):
    users = Users.query.all()

    result = []

    for user in users:
        user_data = {}
        user_data['public_id'] = user.public_id
        user_data['username'] = user.username
        user_data['first_name'] = user.first_name
        user_data['last_name'] = user.last_name

        result.append(user_data)

    return jsonify({'users': result})


@app.route('/user/<public_id>', methods=['PUT'])
@token_required
def update_user(current_user,public_id):
    user = Users.query.filter_by(public_id=public_id).first()
    if user:
        data = request.get_json()
        user.username = data['username']
        user.first_name = data['first_name']
        user.last_name = data['last_name']
        db.session.commit()
        return jsonify({'msg': 'user updated'})
    return jsonify({'msg': 'user not found'})


@app.route('/user/<public_id>', methods=['GET'])
@token_required
def get_user(current_user,public_id):
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


@app.route('/file-upload', methods=['POST'])
@token_required
def upload_file(current_user):
    if 'file' not in request.files:
        return jsonify({'message': 'No file part in the request'})
    files = request.files['file']
    text = 'sdsdsdsd'
    # print(files)
    if files.filename == "":
        return jsonify({'message': 'No file selected for uploading'})
    if files and allowed_image(files.filename):
        print(files)
        filename = secure_filename(files.filename)
        create_post = Posts(image=filename, text=text, user_id=current_user.id)
        db.session.add(create_post)
        db.session.commit()
        files.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({'message': 'File successfully uploaded'})
    else:
        return jsonify({'message': 'Allowed file types are txt, pdf, png, jpg, jpeg, gif'})


@app.route('/roles', methods=['POST'])
def role_create():
    data = request.get_json()
    role = Roles(name=data['name'])
    db.session.add(role)
    db.session.commit()

    return jsonify({'message': 'new role created'})



if  __name__ == '__main__':
     app.run(debug=True)