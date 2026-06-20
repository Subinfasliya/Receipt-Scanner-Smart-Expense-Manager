import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { scanReceipt } from "../services/ocrService";
import { parseReceipt } from "../services/parserService";

const UploadReceipt = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;

    setFile(f);

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(f);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.warning("Please select a file");
    }

    const text = await scanReceipt(file);

    const parsedData = parseReceipt(text);
    console.log(parsedData);


    navigate("/app/review-receipt", {
      state: {
        mode: "upload",
        image: preview,
        scannedData: parsedData,
      },
    });
  };

  return (
    <div className="p-6 bg-white rounded-xl max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Upload Receipt</h2>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {preview && <img src={preview} className="w-full border rounded" />}

      <button
        onClick={handleUpload}
        // disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {/* {loading ? "Processing..." : "Upload & Scan"} */} Upload & Scan
      </button>
    </div>
  );
};

export default UploadReceipt;
