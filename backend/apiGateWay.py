import json

from flask import Flask, request
from flask_cors import CORS

from login.forgotPassword import forgot_password, reset_password
from login.signup import signup
from login.verifier import authenticate_user

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")


@app.route("/api/health", methods=["GET"])
def healthCheck():
    return "Ok"


@app.route("/api/forgotPassword", methods=["GET"])
def forgot_password_handler():
    username = request.args.get('username', '')
    response_message = forgot_password(username)
    response = response_message['message']
    status = response_message['status']
    return response, status


@app.route("/api/resetPassword", methods=["POST"])
def reset_password_handler():
    token = request.args.get('token', '')
    new_password = request.json.get('password', '')
    if new_password != '':
        response_message = reset_password(token, new_password)
        response = response_message['message']
        status = response_message['status']
    else:
        response = "Not all required properties provided"
        status = 400
    return response, status


@app.route("/api/logIn", methods=["POST"])
def login_handler():
    print(request)
    print(request.is_json)
    payload = request.json
    print("login", type(payload))
    username = payload.get('username')
    password = payload.get('password')
    if username != '' and password != '':
        response_message = authenticate_user(username, password)
        response = response_message['message']
        status = response_message['status']
    else:
        response = "Not all required properties provided"
        status = 400
    return response, status


@app.route("/api/signUp", methods=["POST"])
def signUp_handler():
    payload = request.json
    print("signup", payload)
    username = payload.get('username', '')
    password = payload.get('password', '')
    email = payload.get('email', '')
    if username != '' and password != '' and email != '':
        response_message = signup(username, email, password)
        response = response_message['message']
        status = response_message['status']
    else:
        response = "Not all required properties provided"
        status = 400
    return response, status


if __name__ == "__main__":
    app.run(debug=True, port=8081)
