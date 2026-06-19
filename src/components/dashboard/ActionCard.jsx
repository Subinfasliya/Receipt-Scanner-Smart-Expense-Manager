import { Link } from "react-router";

const ActionCard = ({ icon, title, description, link, bgColor, iconBg }) => {
  return (
    <>
      <Link
        to={link}
        className={`${bgColor} p-5 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer `}
      >
        <div className="flex items-center  gap-3 ">
          <div className={`${iconBg} border p-2 rounded-2xl`}>{icon}</div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm opacity-80">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default ActionCard;
