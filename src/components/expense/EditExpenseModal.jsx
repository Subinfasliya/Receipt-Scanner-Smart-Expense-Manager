import { useState } from "react";
import InputField from "../common/InputField";
import Dropdown from "../common/Dropdown";

const categoryOptions = [
  { value: "medicines", label: "Medicines" },
  { value: "food", label: "Food" },
  { value: "grocery", label: "Grocery" },
  { value: "personalCare", label: "Personal Care" },
  { value: "travel", label: "Travel" },
  { value: "others", label: "Others" },
];

const EditExpenseModal = ({ expense, onClose }) => {
  const [formData, setFormData] = useState({
    merchant: "",
    date: "",
    time: "",
    amount: "",
    category: "",
  });

  return (
    <>
      <div>
        <div>
          <InputField
            label={"Merchant Name"}
            name={"merchant"}
            id="merchant"
            value={expense.merchant}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <InputField
              label={"Time"}
              type="time"
              id="time"
              name="time"
              value={expense.time}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div>
            <InputField
              type={"date"}
              label={"Date"}
              name={"date"}
              value={expense.date}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>

        <div className=" mb-5">
          <label className="text-sm font-medium block mb-2">Category</label>
          <Dropdown
            options={categoryOptions}
            value={expense.category}
            onChange={(value) => console.log(value)}
          />
        </div>

        <div>
          <InputField
            label="Total Amount"
            type="amount"
            id="amount"
            name="amount"
            className="border"
            value={expense.amount}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <button
            className="border px-3 py-2 rounded-lg cursor-pointer font-semibold hover:bg-gray-500 hover:border-white hover:text-white "
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="border px-3 py-2 rounded-lg cursor-pointer font-semibold hover:bg-[#7C3AED] hover:border-white hover:text-white">
            Save
          </button>
        </div>
      </div>
    </>
  );
};
export default EditExpenseModal;
