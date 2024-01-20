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

jwt = JWTManager(app)
users = [{"email": "test@test.com", "password": "password"}]


@app.route("/")
@jwt_required()
def home():
    email = get_jwt_identity()
    return jsonify(email=email), 200


@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    time.sleep(2)
    if {"email": email, "password": password} in users:
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token), 200

    print(email, password)
    return jsonify({"msg": "invalid credentials"}), 401
