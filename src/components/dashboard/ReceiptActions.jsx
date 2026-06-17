import ActionCard from "./ActionCard";
import { useRef } from "react";
import { RiUploadCloudLine } from "react-icons/ri";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuPlus } from "react-icons/lu";

const ReceiptActions = ({
  onScanReceipt,
  onUploadReceipt,
  onManualExpense,
}) => {
  const actions = [
    {
      title: "Scan Receipt",
      description: "Use camera to scan",
      icon: <MdOutlineCameraAlt size={30} />,
      bgColor: "bg-[#EDE9FE]",
      iconBg: "text-[#7C3AED]",
      action: onScanReceipt,
    },
    {
      title: "Upload Receipt",
      description: "Upload from gallery",
      icon: <RiUploadCloudLine size={30} />,
      bgColor: "bg-[#DBEAFE]",
      iconBg: "text-[#2563EB]",
      action: onUploadReceipt,
    },
    {
      title: "Add Expense",
      description: "Create expense manually",
      icon: <LuPlus size={30} />,
      bgColor: "bg-[#DCFCE7]",
      iconBg: "text-[#22C55E]",
      action: onManualExpense,
    },
  ];

  console.log("receiptActions component renderd");

  const cameraRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleScanCardClick = () => {
    cameraRef.current?.click();
  };

  const handleImageCapture = (e) => {
    const file = e.target.files[0];

    if (file) {
      onReceiptSelected(file);
    }
  };

  // File upload func
  const handleImageCardClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      onReceiptSelected(file);
    }
  };

  return (
    <>
      {actions.map((item) => (
        <ActionCard
          key={item.title}
          title={item.title}
          description={item.description}
          onClick={item.action}
          icon={item.icon}
          bgColor={item.bgColor}
          iconBg={item.iconBg}
        />
      ))}

      {/* <ActionCard
        icon={<MdOutlineCameraAlt size={30} />}
        title="Scan Receipt"
        description={"Use camera to scan"}
        bgColor={"bg-[#EDE9FE]"}
        iconBg={"text-[#7C3AED]"}
        onClick={handleScanCardClick}
      /> */}
      <input
        type="file"
        accept="image/*"
        ref={cameraRef}
        onChange={handleImageCapture}
        capture="environment"
        hidden
      />

      {/* Upload Receipt */}
      {/* <ActionCard
        icon={<RiUploadCloudLine size={30} color="#2563EB" />}
        title="Upload Receipt"
        description={"Upload from gallery"}
        bgColor={"bg-[#DBEAFE]"}
        iconBg={"text-[#2563EB]"}
        onClick={handleImageCardClick}
      /> */}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        hidden
      />

      {/* Manual Receipt */}
      {/* <ActionCard
        icon={<RiUploadCloudLine size={30} color="#2563EB" />}
        title="Upload Receipt"
        description={"Upload from gallery"}
        bgColor={"bg-[#DBEAFE]"}
        iconBg={"text-[#2563EB]"}
        onClick={handleImageCardClick}
      /> */}
    </>
  );
};
export default ReceiptActions;
