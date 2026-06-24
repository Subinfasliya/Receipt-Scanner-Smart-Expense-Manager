import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { scanReceipt } from "../services/ocrService";
import { parseReceipt } from "../services/parserService";
import { useReceiptStore } from "../store/receiptStore";
import { useFormStore } from "../store/demoStore";

const UploadReceipt = () => {
  // const setReceiptData = useReceiptStore((state) => state.setReceiptData);

  const setFormData = useFormStore((state) => state.setFormData)
  const setImage = useFormStore((state) => state.setImage)

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

    setImage(preview);
    const result = await scanReceipt(file);

    const parsedData = parseReceipt(result);
    
    setFormData(parsedData)

    navigate("/app/review-receipt");

  };

  return (
    <div className="p-6 bg-white rounded-xl max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Scan or Upload Receipt</h2>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="border w-full p-2 rounded-xl"
      />

      {preview && <img src={preview} className="w-100 border rounded h-100 object-contain mx-auto" />}

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
