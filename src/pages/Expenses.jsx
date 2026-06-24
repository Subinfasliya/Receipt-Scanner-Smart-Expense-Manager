import { useState } from "react";
import Dropdown from "../components/common/Dropdown";
import SearchInput from "../components/common/SearchInput";

const Expenses = () => {
  const [category, setCategory] = useState("");

  console.log("Selected Category is = ot : ", category);

  const categories = [
    { value: "food", label: "Food" },
    { value: "travel", label: "Travel" },
    { value: "shopping", label: "Shopping" },
    { value: "health", label: "Health" },
    { value: "personalCare", label: "Personal Care" },
    { value: "others", label: "Others" },
  ];

  const dateRanges = [

  ]

  return (
    <>
      <section>
        <h2>Total Expense</h2>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {/*Search Box  */}
          <section>
            <SearchInput placeholder={"Search Expenses, merchants..."} />
          </section>

          {/* Dropdown for Category */}
          <section>
            <Dropdown
              options={categories}
              value={category}
              onChange={setCategory}
              placeholder="Date Range"
            />
          </section>
          {/* Dropdown for Category */}
          <section>
            <Dropdown
              options={categories}
              value={category}
              onChange={setCategory}
              placeholder="Category"
            />
          </section>
        </div>
      </section>
    </>
  );
};
export default Expenses;
