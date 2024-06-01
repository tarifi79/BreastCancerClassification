from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS

def load_model_and_scaler():
    model = joblib.load('model.pkl')
    scaler = joblib.load('scaler.pkl')
    return model, scaler

model, scaler = load_model_and_scaler()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    input_data = np.array(data['input']).reshape(1, -1)
    scaled_data = scaler.transform(input_data)  # Scale the input data
    prediction = model.predict(scaled_data)
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
