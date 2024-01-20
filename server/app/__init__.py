from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS

import os
load_dotenv()

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET")
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = False
CORS(app)  # Enable CORS for all routes



from app import routes