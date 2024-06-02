# Breast Cancer Prediction App

## Project Description

This project is a web application that predicts whether a breast cancer tumor is malignant or benign based on various features extracted from cell images. The application uses a machine learning model trained on the Breast Cancer Wisconsin dataset and is built with a React frontend and a Flask backend.

## Project Structure

```plaintext
breast_cancer_classification/
├── data/
│ ├── raw/
│ │ └── data.csv
│ ├── processed/
│ │ └── processed_data.csv
├── notebooks/
│ ├── exploratory_data_analysis.ipynb
│ └── model_training.ipynb
├── src/
│ ├── data_preprocessing.py
│ ├── train_model.py
├── app/
│ ├── init.py
│ ├── app.py
│ ├── model.pkl
│ └── scaler.pkl
├──requirements.txt
├── frontend/
│ ├── src/
│ │ ├── PredictionForm.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── styles.css
│ ├── public/
│ │ └── index.html
│ ├── package.json
│ └── vite.config.js
└── README.md
```

## Setup

### Backend

1. **Navigate to the `backend/src` directory**:
   ```bash
   cd backend/src
   ```
2. **Install the required dependencies**:
   ```python
   pip install -r ../requirements.txt
   ```
3. **Ensure your dataset (data.csv) is placed in the backend/data/raw directory**:

4. **Preprocess the raw data and save the processed data:**:

   ```python
   python data_preprocessing.py
   ```

5. **Train the machine learning model and save the model and scaler**:

   ```python
   python train_model.py
   ```

6. **Run the Flask API**:
   ```python
   python app.py
   ```

### Frontend

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

### Dependencies

#### Frontend

- Flask
- Flask-CORS
- Pandas
- Scikit-learn
- Matplotlib
- Seaborn

#### Backend

- React
- Vite
- Axios
