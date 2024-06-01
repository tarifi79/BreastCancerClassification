import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

// Feature names and corresponding labels
const features = [
  { name: "radius_mean", label: "Radius Mean" },
  { name: "texture_mean", label: "Texture Mean" },
  { name: "perimeter_mean", label: "Perimeter Mean" },
  { name: "area_mean", label: "Area Mean" },
  { name: "smoothness_mean", label: "Smoothness Mean" },
  { name: "compactness_mean", label: "Compactness Mean" },
  { name: "concavity_mean", label: "Concavity Mean" },
  { name: "concave points_mean", label: "Concave Points Mean" },
  { name: "symmetry_mean", label: "Symmetry Mean" },
  { name: "fractal_dimension_mean", label: "Fractal Dimension Mean" },
  { name: "radius_se", label: "Radius SE" },
  { name: "texture_se", label: "Texture SE" },
  { name: "perimeter_se", label: "Perimeter SE" },
  { name: "area_se", label: "Area SE" },
  { name: "smoothness_se", label: "Smoothness SE" },
  { name: "compactness_se", label: "Compactness SE" },
  { name: "concavity_se", label: "Concavity SE" },
  { name: "concave points_se", label: "Concave Points SE" },
  { name: "symmetry_se", label: "Symmetry SE" },
  { name: "fractal_dimension_se", label: "Fractal Dimension SE" },
  { name: "radius_worst", label: "Radius Worst" },
  { name: "texture_worst", label: "Texture Worst" },
  { name: "perimeter_worst", label: "Perimeter Worst" },
  { name: "area_worst", label: "Area Worst" },
  { name: "smoothness_worst", label: "Smoothness Worst" },
  { name: "compactness_worst", label: "Compactness Worst" },
  { name: "concavity_worst", label: "Concavity Worst" },
  { name: "concave points_worst", label: "Concave Points Worst" },
  { name: "symmetry_worst", label: "Symmetry Worst" },
  { name: "fractal_dimension_worst", label: "Fractal Dimension Worst" },
];

const PredictionForm = () => {
  const [formData, setFormData] = useState(
    features.reduce((acc, feature) => ({ ...acc, [feature.name]: 0 }), {})
  );

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputValues = Object.values(formData).map((value) =>
      parseFloat(value)
    );
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        input: inputValues,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("There was an error making the prediction!", error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Breast Cancer Prediction</h2>
      <form onSubmit={handleSubmit} className="form">
        {features.map((feature) => (
          <div key={feature.name} className="inputGroup">
            <label className="label">{feature.label}</label>
            <input
              type="number"
              name={feature.name}
              value={formData[feature.name]}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
        ))}
        <button type="submit" className="button">
          Predict
        </button>
      </form>
      {prediction !== null && (
        <div className="result">
          <h3>Prediction: {prediction === 1 ? "Malignant" : "Benign"}</h3>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
