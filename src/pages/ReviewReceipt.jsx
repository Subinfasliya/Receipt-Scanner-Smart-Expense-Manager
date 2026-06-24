// import { BiPlus, BiTrash } from "react-icons/bi";
// import { SlCalender } from "react-icons/sl";
// import { CiClock2 } from "react-icons/ci";
// import { Link, useLocation, useNavigate } from "react-router";
// import { useReceiptStore } from "../store/receiptStore";
// import Table from "../components/common/Table";
// import { toast } from "react-toastify";

// const ReviewReceipt = () => {

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* CONTENT */}
//       <div
//            className="p-6">
//         <div className="bg-white rounded-xl border p-5">
//           <div
//             className={`grid  gap-6 ${hasImage ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1"} `}
//           >
//             {/* Receipt Preview */}
//             {hasImage && (
//               <div className="border rounded-xl p-4">
//                 <h3 className="font-semibold mb-4">Receipt Preview</h3>

//                 <div className="flex justify-center">
//                   <img
//                     src={image}
//                     alt="Receipt"
//                     className="max-h-[600px] object-contain"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* form */}

//             <div
//               className={`border rounded-xl p-4 ${
//                 !hasImage ? "max-w-5xl mx-auto w-full" : ""
//               }`}
//             >
//               <h3 className="font-semibold mb-4">
//                 {hasImage ? "Extracted Details" : "Add Expense"}
//               </h3>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-sm font-medium block mb-1">Date</label>

//                   <div className="relative">
//                     <input
//                       type="text"
//                       className="w-full border rounded-lg p-3"
//                       value={formData.date}
//                       onChange={(e) =>
//                         setFormData({ ...formData, date: e.target.value })
//                       }
//                     />

//                     <SlCalender
//                       size={18}
//                       className="absolute right-3 top-3.5 text-gray-400"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium block mb-1">Time</label>

//                   <div className="relative">
//                     <input
//                       type="text"
//                       className="w-full border rounded-lg p-3"
//                       value={formData.time}
//                       onChange={(e) => setFormData({...formData, time:e.target.value})}
//                     />

//                     <CiClock2
//                       size={18}
//                       className="absolute right-3 top-3.5 text-gray-400"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="text-sm font-medium block mb-1">
//                   Merchant / Store
//                 </label>

//                 <input
//                   type="text"
//                   className="w-full border rounded-lg p-3"
//                   value={formData.storeName}
//                   onChange={(e) =>
//                     setFormData({ ...formData, storeName: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="mt-4">
//                 <label className="text-sm font-medium block mb-1">
//                   Total Amount
//                 </label>

//                 <input
//                   type="text"
//                   className="w-full border rounded-lg p-3"
//                   value={formData.totalAmount}
//                   onChange={(e) =>
//                     setFormData({ ...formData, totalAmount: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="mt-4">
//                 <label className="text-sm font-medium block mb-1">Notes</label>

//                 <textarea
//                   name="notes"
//                   rows={3}
//                   className="w-full border rounded-lg p-3"
//                   placeholder="Add a note..."
//                   value={formData.note}
//                   onChange={(e) =>
//                     setFormData({ ...formData, note: e.target.value })
//                   }
//                 />
//               </div>

//               {/* ITEMS TABLE */}
//               <div className="mt-6">
//                 <div className="flex justify-between items-center mb-3">
//                   <h3 className="font-semibold">Items</h3>

//                   <button
//                     onClick={addItem}
//                     className="flex items-center gap-2 border rounded-lg px-3 py-2"
//                   >
//                     <BiPlus size={16} />
//                     Add Item
//                   </button>
//                 </div>

//                 <Table items={formData.items} categories={categories} />
//               </div>

//               {/* FOOTER BUTTONS */}
//               <div className="flex justify-end gap-3 mt-6">
//                 <button
//                   className="border px-5 py-2 rounded-lg"
//                   onClick={handleCancel}
//                 >
//                   Cancel
//                 </button>

//                 <button className="bg-black text-white px-5 py-2 rounded-lg">
//                   Save Expense
//                 </button>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewReceipt;

import { useState } from "react";
import { useExpenseStore, useFormStore } from "../store/demoStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import InputField from "../components/common/InputField";

const ReviewReceipt = () => {
  const formData = useFormStore((state) => state.formData);
  const setField = useFormStore((state) => state.setField);
  const resetForm = useFormStore((state) => state.resetForm);
  const addExpense = useExpenseStore((state) => state.addExpense);
  const image = useFormStore((state) => state.image);

  const navigate = useNavigate();

  const hasImage = Boolean(image);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addExpense(formData);
    toast.success("Successfully Added new Expenses");
    resetForm();
    navigate("/app/expenses")
  };

  const handleCancel = () => {
    resetForm();
    navigate("/app/upload-receipt");
  };

  return (
    <>
      <div className="p-6 ">
        <div className="bg-white rounded-xl p-5">
          <div className={` grid gap-6 ${hasImage ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1"} `}>
            {hasImage && (
              <div className="border rounded-xl overflow-hidden p-4">
                <h3 className="font-semibold mb-4 text-md">Receipt Preview</h3>

                <div className="flex justify-center ">
                  <img
                    src={image}
                    alt="Receipt Image"
                    className="max-h-[400px] object-contain"
                  />
                </div>
              </div>
            )}

            <div
              className={`p-4 ${!hasImage ? "max-w-5xl mx-auto w-[650px] border rounded-xl p-6" : ""}`}
            >
              <h3 className={`${hasImage ? "font-semibold mb-4 text-lg" : "text-xl my-4 text-center font-semibold"}`}>
                {hasImage ? "Extracted Details" : "Add Expense"}
              </h3>
              <div className="gap-4">
                <form onSubmit={handleFormSubmit}>
                  <InputField
                    type={"date"}
                    label={"Date"}
                    name={"date"}
                    value={formData.date}
                    onChange={(e) => setField("date", e.target.value)}
                  />

                  <InputField
                    label={"Time"}
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={(e) => setField("time", e.target.value)}
                  />

                  <InputField
                    label="Store Name"
                    id="storeName"
                    name="storeName"
                    value={formData.storeName}
                    onChange={(e) => setField("storeName", e.target.value)}
                  />

                  <div className=" mb-5">
                    <label
                      htmlFor="category"
                      className="text-sm font-medium block mb-2"
                    >
                      Category
                    </label>
                    <div className="relative">
                      <select
                        type="category"
                        id="categories"
                        name="category"
                        // className="w-full px-4 py-3 border rounded-lg p-3"
                        className="w-full px-4 py-3 rounded-lg border  text-gray-800 shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        value={formData.category}
                        onChange={(e) => setField("category", e.target.value)}
                      >
                        <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
                          <option value={""}>Select Categories</option>
                          <option value="medicines">Medicines</option>
                          <option value="grocery">Grocery</option>
                          <option value="food">Food</option>
                          <option value="personalCare">Personal Care</option>
                          <option value="others">Others</option>
                        </div>
                      </select>
                    </div>
                  </div>

                  <InputField
                    label="Total Amount"
                    type="amount"
                    id="amount"
                    name="amount"
                    className="border"
                    value={formData.amount}
                    onChange={(e) => setField("amount", Number(e.target.value))}
                  />

                  <div className="mt-4">
                    <label className="text-sm font-medium block mb-1">
                      Notes
                    </label>

                    <textarea
                      name="notes"
                      rows={3}
                      className="w-full border rounded-lg p-3"
                      placeholder="Add a note..."
                      value={formData.note}
                      onChange={(e) => setField("note", e.target.value)}
                    />
                  </div>

                  <div className="flex justify-between gap-3 mt-6">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="border px-5 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#7C3AED] text-white px-5 py-2 rounded-lg cursor-pointer"
                    >
                      Save Expense
                    </button>
                  </div>
                </form>
              </div>
            </div>

        
          </div>
        </div>
      </div>
    </>
  );
};
export default ReviewReceipt;
