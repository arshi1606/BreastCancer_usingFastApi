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
      // Check file name for "screenshot" (case-insensitive)
      if (file.name.toLowerCase().includes("screenshot")) {
        setErrorMessage("Screenshots are not accepted. Please upload a valid image.");
        return;
      }
      
      // Limit file types to JPEG and PNG.
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setErrorMessage("Invalid file type. Only PNG and JPEG are allowed.");
        return;
      }
      // Limit file size to 5 MB.
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        setErrorMessage("File size exceeds the 5 MB limit.");
        return;
      }

      setSelectedFile(file);
      setErrorMessage("");
      setPredictionResult(null);

      // Create a preview URL for the selected file.
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Convert image to Base64 string using the provided helper function.
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
      setErrorMessage("Please upload a valid image first.");
      return;
    }
    setLoading(true);
    setErrorMessage("");
    setPredictionResult(null);

    try {
      const response = await fetch("https://arshi1606-breast-cancer-detection-model.hf.space/breast_cancer/predict", {
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
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 flex flex-col items-center p-8">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-purple-900">
        Model Prediction
      </h1>
      <p className="text-lg text-center mb-8 text-gray-700">
        Upload an image to get a prediction. (Only PNG/JPEG under 5 MB are allowed. Screenshots are not accepted.)
      </p>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4 w-full text-gray-700"
          />

          {previewUrl && (
            <div className="mb-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full max-h-72 rounded-lg border-2 border-gray-300 shadow-md"
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
            className={`w-full px-6 py-3 rounded-full bg-purple-600 text-white font-bold transition duration-300 ${
              loading || !selectedFile
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-purple-700"
            }`}
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </div>
      </div>

      {predictionResult && (
        <div className="mt-8 w-full max-w-3xl bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Prediction Result
          </h2>
          <pre className="bg-white p-4 rounded shadow overflow-auto text-gray-800">
            {JSON.stringify(predictionResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ModelPage;
