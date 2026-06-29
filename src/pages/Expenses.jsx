import { useEffect, useMemo, useState } from "react";
import Dropdown from "../components/common/Dropdown";
import SearchInput from "../components/common/SearchInput";
import { filterExpenses } from "../utils/expensesUtils/filterExpenses";
import { useExpenseStore } from "../store/demoStore";
import { FaEye } from "react-icons/fa";
import { BiPencil, BiTrash } from "react-icons/bi";
import ExpenseRow from "../components/common/ExpenseRow";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import EditExpenseModal from "../components/expense/EditExpenseModal";
import Modal from "../components/common/Modal";

// const expenses = [
//   {
//     id: 1,
//     date: "27-06-2026",
//     merchant: "Lulu hypermarket",
//     category: "Food",
//     amount: 2680,
//   },
//   {
//     id: 2,
//     date: "20-06-2026",
//     merchant: "Ozra Fashions",
//     category: "Dress",
//     amount: 7680,
//   },
//   {
//     id: 3,
//     date: "22-06-2026",
//     merchant: "Relief Medicals",
//     category: "Medicines",
//     amount: 280,
//   },
// ];

const Expenses = () => {
  const { user } = useAuth();

  const allExpenses = useExpenseStore((state) => state.expenses);
  const deleteExpense = useExpenseStore((state) => state.deleteExpense);
  const updateExpense = useExpenseStore((state) => state.updateExpense);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    dateRange: "",
  });

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const filteredExpenses = useMemo(() => {
    return filterExpenses({
      expenses: allExpenses,
      userId: user.id,
      search: filters.search,
      dateRange: filters.dateRange,
      category: filters.category,
    });
  }, [
    allExpenses,
    user.id,
    filters.search,
    filters.category,
    filters.dateRange,
  ]);

  const PRESETS = [
    { value: "", label: "All Dates" },
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
    { value: "last7days", label: "Last 7 Days" },
    { value: "last30days", label: "Last 30 Days" },
    { value: "thisMonth", label: "This Month" },
    { value: "lastMonth", label: "Last Month" },
  ];

  const categories = [
    { value: "", label: "All Category" },
    { value: "food", label: "Food" },
    { value: "travel", label: "Travel" },
    { value: "shopping", label: "Shopping" },
    { value: "health", label: "Health" },
    { value: "personalCare", label: "Personal Care" },
    { value: "others", label: "Others" },
  ];

  const handleView = (expense) => {
    console.log("View :", expense);
  };

  const editExpense = (expense) => {
    setSelectedExpense(expense);
    setIsEditOpen(true);
    console.log("Edite Expense : ", expense);
  };

  const handleDelete = (id) => {
    deleteExpense(id);
    toast.success("Expense Deleted Successfully");
  };

  // Modal Close function
  const closeEditModal = () => {
    setIsEditOpen(false);
  };

  return (
    <>
      <section>
        <h2>Total Expense</h2>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {/*Search Box  */}
          <section>
            <SearchInput
              placeholder={"Search Expenses, merchants..."}
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, search: e.target.value }))
              }
            />
          </section>

          {/* Dropdown for Category */}
          <section>
            <Dropdown
              options={PRESETS}
              value={filters.dateRange}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, dateRange: value }))
              }
              placeholder="Date Range"
            />
          </section>
          {/* Dropdown for Category */}
          <section>
            <Dropdown
              options={categories}
              value={filters.category}
              onChange={(value) => setFilters({ ...filters, category: value })}
              placeholder="Category"
            />
          </section>
        </div>
      </section>

      {/* Expense Table */}
      <section>
        <div className="py-6 px-3 border rounded-xl">
          <div>
            <h2 className="font-semibold mb-4">All Expenses</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Merchant</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Amount (₹)</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map((expense) => (
                  <ExpenseRow
                    key={expense.id}
                    expense={expense}
                    onView={handleView}
                    onEdit={editExpense}
                    onDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isEditOpen}
        onClose={closeEditModal}
        title={"Edit Expense"}
      >
        {selectedExpense && (
          <EditExpenseModal
            expense={selectedExpense}
            onClose={closeEditModal}
          />
        )}
      </Modal>
    </>
  );
};
export default Expenses;
