const ActionCard = ({ icon, title, description, onClick, bgColor, iconBg }) => {
  console.log("Action Card Renderd");

  return (
    <>
      <div
        onClick={onClick}
        className={`${bgColor} rounded-2xl py-4 px-8  cursor-pointer`}
      >
        <div className="flex flex-row gap-6 items-center">
          <div className={`${iconBg} border p-4 rounded-2xl`}>{icon}</div>
          <div>
            <h3 className="text-lg  font-bold">{title}</h3>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ActionCard;
