import { BiPencil, BiTrash } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

const ExpenseRow = ({ expense, onView, onEdit, onDelete }) => {
  return (
    <>
      <tr className="border-b hover:bg-gray-80 transition-colors">
        <td className="px-4 py-4">{expense.date}</td>
        <td className="px-4 py-4">{expense.merchant}</td>
        <td className="px-4 py-4">{expense.category}</td>
        <td className="px-4 py-4">₹ {expense.amount}</td>
        <td className="px-4 py-4">
          <div className="flex justify-center gap-3">
            <button onClick={() => onView(expense)}>
              <FaEye
                className="cursor-pointer text-blue-600 hover:text-blue-800"
                size={18}
              />
            </button>

            <button onClick={() => onEdit(expense)}>
              <BiPencil
                className="cursor-pointer text-yellow-500 hover:text-yellow-700"
                size={20}
              />
            </button>

            <button onClick={() => onDelete(expense.id)}>
              <BiTrash
                className="cursor-pointer text-red-500 hover:text-red-700"
                size={20}
              />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
export default ExpenseRow;
