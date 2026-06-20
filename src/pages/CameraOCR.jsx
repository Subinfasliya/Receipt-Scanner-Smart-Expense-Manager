import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { scanReceipt } from "../services/ocrService";
import { parseReceipt } from "../services/parserService";


const CameraOCR = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const navigate = useNavigate();
 

  const [image, setImage] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const captureImage = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0);

    const imageData = canvas.toDataURL("image/png");
    setImage(imageData);

    // stop camera
    streamRef.current?.getTracks().forEach((t) => t.stop());

    // convert base64 → file
    const res = await fetch(imageData);
    const blob = await res.blob();
    const file = new File([blob], "receipt.png", { type: "image/png" });

    // OCR
    const extractedText = await scanReceipt(file);

    // convert raw text → structured data
    const parsedData = parseReceipt(extractedText);

    navigate("/app/review-receipt", {
      state: {
        mode: "scan",
        image: imageData,
        scannedData: parsedData,
      },
    });
  };

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">Scan Receipt</h2>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full max-w-md rounded border"
      />

      <canvas ref={canvasRef} className="hidden" />

      <div className="flex gap-3">
        <button
          onClick={startCamera}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Open Camera
        </button>

        <button
          onClick={captureImage}
          // disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {/* {loading ? "Processing..." : "Capture & Scan"} */}
          Capture & Scan
        </button>
      </div>

      {image && <img src={image} className="w-40 border rounded mt-3" />}
    </div>
  );
};

export default CameraOCR;
