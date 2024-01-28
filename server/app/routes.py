from flask import request, jsonify
from app import app
from flask_jwt_extended import (
    JWTManager,
    jwt_required,
    create_access_token,
    get_jwt_identity,
)
from dotenv import load_dotenv
import time
from .Users import User


@app.route("/")
@jwt_required()
def home():
    email = get_jwt_identity()
    return jsonify({"email":email}), 200


@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    

    if email is None:
        return jsonify({"message": "Please provide a valid name"}), 400
    if password is None:
        return jsonify({"message": "Please provide a valid name"}), 400

    temp_user = User(email= email,password= password)
    return temp_user.login()



@app.route("/signup", methods=["POST"])
def signup():
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if name is None:
        return jsonify({"message": "Please provide a valid name"})
    if email is None:
        return jsonify({"message": "Please provide a valid name"})
    if password is None:
        return jsonify({"message": "Please provide a valid name"})

    tempUser = User(name, email, password)
    return tempUser.signup()
