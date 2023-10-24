from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
import jwt
import datetime
from functools import wraps

app = Flask(__name__)

app.config['SECRET_KEY'] = 'S1O2B3I4R5'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

app.app_context().push()


class Roles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    roles = db.relationship('Users', backref='roles', cascade='all, delete-orphan', lazy='dynamic')


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.Integer)
    username = db.Column(db.String(50))
    password = db.Column(db.String(50))
    admin = db.Column(db.Boolean)
    role = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable=False)


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

    new_user = Users(public_id=str(uuid.uuid4()), username=data['username'], password=hashed_password, admin=False, role = 1)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'registered successfully'})


@app.route('/login', methods=['GET', 'POST'])
def login_user():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('could not verify', 401, {'WWW.Authentication': 'Basic realm: "login required"'})

    user = Users.query.filter_by(username=auth.username).first()

    if check_password_hash(user.password, auth.password):
        token = jwt.encode(
            {'public_id': user.public_id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)},
            app.config['SECRET_KEY'], algorithm='HS256')
        return jsonify({'token': token})

    return make_response('could not verify', 401, {'WWW.Authentication': 'Basic realm: "login required"'})


@app.route('/users', methods=['GET'])
@token_required
def get_all_users(current_user):
    users = Users.query.all()

    result = []

    for user in users:
        user_data = {}
        user_data['public_id'] = user.public_id
        user_data['name'] = user.username
        user_data['password'] = user.password
        user_data['admin'] = user.admin

        result.append(user_data)

    return jsonify({'users': result})


@app.route('/roles', methods=['POST'])
def role_create():
    data = request.get_json()
    print(data)
    role = Roles(name=data['name'])
    db.session.add(role)
    db.session.commit()

    return jsonify({'message': 'new role created'})



if  __name__ == '__main__':
     app.run(debug=True)