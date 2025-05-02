from flask import Blueprint, request, jsonify, session
from .models import db, User

auth = Blueprint('auth', __name__)

@auth.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data['email']
    password = data['password']

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Usuario ya existe"}), 400

    user = User(email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "Usuario creado"}), 201

@auth.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        session['user_id'] = user.id
        return jsonify({"msg": "Inicio de sesión exitoso"}), 200

    return jsonify({"msg": "Credenciales inválidas"}), 401

@auth.route('/api/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({"msg": "Sesión cerrada"}), 200

@auth.route('/api/check', methods=['GET'])
def check_auth():
    if 'user_id' in session:
        return jsonify({"logged_in": True}), 200
    return jsonify({"logged_in": False}), 401
