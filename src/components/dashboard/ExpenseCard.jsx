import { LuWallet } from "react-icons/lu";

const ExpenseCard = ({title,total,description,icon,iconBg,iconColor}) => {

  console.log(total);
  
  return (
    <>
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-5">
        <div className="flex flex-row items-center gap-4">
          <div className={`p-4 border rounded-2xl ${iconBg} ${iconColor}`}>
           {icon}
          </div>
          <div>
            <h2 className="text-md font-semibold">{title}</h2>
            <p className="text-lg font-bold">{total}</p>
            <p>
              <span>{description}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExpenseCard;
