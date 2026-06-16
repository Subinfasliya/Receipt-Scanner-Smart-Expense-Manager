import ActionCard from "./ActionCard";
import { useRef } from "react";
import { RiUploadCloudLine } from "react-icons/ri";
import { MdOutlineCameraAlt } from "react-icons/md";

const ReceiptActions = () => {
  console.log("receiptActions component renderd");

  const cameraRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleScanCardClick = () => {
    cameraRef.current?.click();
  };

  const handleImageCapture = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log(`Captured Image : ${file.name}`);
    }
  };

  // File upload func
  const handleImageCardClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log(file);
      alert(`Selected File : ${file.name}`);
    }
  };

  return (
    <>
      <ActionCard
        icon={<MdOutlineCameraAlt size={30}  />}
        title="Scan Receipt"
        description={"Use camera to scan"}
        bgColor={"bg-[#EDE9FE]"}
        iconBg={"text-[#7C3AED]"}
        onClick={handleScanCardClick}
      />
      <input
        type="file"
        accept="image/*"
        ref={cameraRef}
        onChange={handleImageCapture}
        capture="environment"
        hidden
      />

      {/* Upload Receipt */}
      <ActionCard
        icon={<RiUploadCloudLine size={30} color="#2563EB" />}
        title="Upload Receipt"
        description={"Upload from gallery"}
        bgColor={"bg-[#DBEAFE]"}
        iconBg={"text-[#2563EB]"}
        onClick={handleImageCardClick}
      />

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        hidden
      />
    </>
  );
};
export default ReceiptActions;
