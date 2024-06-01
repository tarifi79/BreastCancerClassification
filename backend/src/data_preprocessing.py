import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder
import joblib

def preprocess_breast_cancer_data(input_path, output_path):
    """
    Preprocess the breast cancer dataset by performing the following steps:
    1. Drop irrelevant columns
    2. Encode the target variable
    3. Scale the features
    4. Split the data into training and testing sets
    5. Save the processed data to a CSV file

    Parameters:
    input_path (str): Path to the input CSV file
    output_path (str): Path to save the processed CSV file
    """
    # Load the dataset
    data = pd.read_csv(input_path)

    # Drop irrelevant columns
    data.drop(['id', 'Unnamed: 32'], axis=1, inplace=True)

    # Encode the target variable
    label_encoder = LabelEncoder()
    data['diagnosis'] = label_encoder.fit_transform(data['diagnosis'])

    # Check for any other missing values
    if data.isnull().sum().any():
        print("There are missing values in the dataset.")
    else:
        print("No missing values in the dataset.")

    # Feature Scaling
    scaler = StandardScaler()
    features = data.drop('diagnosis', axis=1)
    scaled_features = scaler.fit_transform(features)

    # Convert scaled features back to dataframe
    scaled_data = pd.DataFrame(scaled_features, columns=features.columns)
    scaled_data['diagnosis'] = data['diagnosis']

    # Save the processed data
    scaled_data.to_csv(output_path, index=False)
    
    #Save the scaler 
    joblib.dump(scaler,"../app/scaler.pkl")

    return scaled_data



    
if __name__ == "__main__":
    preprocess_breast_cancer_data('../data/raw/data.csv', '../data/processed/processed_data.csv')
