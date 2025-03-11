"use client";

import { useState } from "react";
import imageToBase64Browser from "@/components/imgToBase64"; // adjust the path as needed

interface PredictionResult {
  [key: string]: any;
}

const ModelPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [base64Image, setBase64Image] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setErrorMessage("");
      setPredictionResult(null);

      // Create a preview URL for the selected file
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Convert image to Base64 string using the provided helper function
      try {
        const base64Str = await imageToBase64Browser(file);
        setBase64Image(base64Str);
      } catch (err) {
        console.error("Error converting image to Base64:", err);
        setErrorMessage("Failed to process image. Please try a different file.");
      }
    }
  };

  const handlePredict = async () => {
    if (!base64Image) {
      setErrorMessage("Please upload an image first.");
      return;
    }
    setLoading(true);
    setErrorMessage("");
    setPredictionResult(null);

    try {
      // Update the URL path if your FastAPI route is different.
      const response = await fetch("https://3d82-34-169-186-124.ngrok-free.app/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ base64_image: base64Image }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Prediction failed.");
      }
      const data: PredictionResult = await response.json();
      setPredictionResult(data);
    } catch (error: any) {
      console.error("Prediction error:", error);
      setErrorMessage(error.message || "Prediction failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Model Prediction</h1>
      <p className="text-center mb-4">Upload an image to get a prediction.</p>
      
      <div className="flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />

        {previewUrl && (
          <div className="mb-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="max-w-full max-h-96 rounded shadow-md"
            />
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 text-red-600 font-semibold">
            {errorMessage}
          </div>
        )}

        <button
          onClick={handlePredict}
          disabled={loading || !selectedFile}
          className={`px-8 py-3 rounded bg-purple-600 text-white font-bold ${
            loading || !selectedFile ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
          }`}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </div>

      {predictionResult && (
        <div className="mt-8 bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Prediction Result</h2>
          <pre className="bg-white p-4 rounded shadow overflow-auto">
            {JSON.stringify(predictionResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ModelPage;
