import { Link } from "react-router";

const ActionCard = ({ icon, title, description, onClick, bgColor, iconBg }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`${bgColor} p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer `}
      >
        <div className="flex items-center gap-4 ">
          <div className={`${iconBg} border p-2 rounded-2xl`}>{icon}</div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm opacity-80">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ActionCard;
