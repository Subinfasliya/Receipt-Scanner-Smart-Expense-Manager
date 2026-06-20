// const ReviewReceipt = () => {
//   return (
//     <>
//       <div className="bg-white rounded-2xl p-6">
//         <h2 className="text-center text-xl mb-6">Receipt Preview</h2>

//         <div className="space-y-4 max-w-[450px] border p-6 mx-auto">
//           <div >
//             <label className="mb-5" htmlFor="storeName" >Store Name</label>
//             <input
//               className="py-2 px-4 rounded-lg bg-gray-100 w-full"
//               placeholder="Store Name"
//               id="storeName"
//             />

//           </div>
//           <div>
//             <input
//               className="py-2 px-4 rounded-lg bg-gray-100 w-full"
//               placeholder="Date"
//             />
//           </div>
//           <div>
//             <input
//               className="py-2 px-4 rounded-lg bg-gray-100 w-full"
//               placeholder="Category"
//             />
//           </div>
//           <div>
//             <input
//               className="py-2 px-4 rounded-lg bg-gray-100 w-full"
//               placeholder="Total Amount"
//             />
//           </div>

//           <div className="flex justify-between px-4">
//             <button className="">Cancel</button>
//             <button className="">Save Expense</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ReviewReceipt;

// Second one Working correctly

// import { useLocation } from "react-router";
// import { useEffect, useState } from "react";

// const ReviewReceipt = () => {
//   const location = useLocation();

//   const [formData, setFormData] = useState({
//     store: "",
//     amount: "",
//     category: "",
//     date: "",
//     note: "",
//   });

//   const [image, setImage] = useState(null);
//   const mode = location.state?.mode;

//   useEffect(() => {
//     const data = location.state?.scannedData;

//     if (mode === "scan" || mode === "upload") {
//       if (data) {
//         setFormData({
//           amount: data.amount || "",
//           category: data.category || "",
//           date: data.date || "",
//           note: data.note || "",
//           store: data.store || "",
//         });
//       }

//       setImage(location.state?.image || null);
//     }

//     if (mode === "manual") {
//       setFormData({
//         store: "",
//         amount: "",
//         category: "",
//         date: "",
//         note: "",
//       });

//       setImage(null);
//     }
//   }, [location.state]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     console.log("FINAL DATA:", formData);
//   };

//   if (!location.state) {
//     return <div>No data found. Go back.</div>;
//   }

//   return (
//     <div className="p-6 bg-white rounded-xl space-y-4">
//       <h2 className="text-xl font-bold">Review Expense ({mode})</h2>

//       {image && <img src={image} className="w-40 border rounded" />}

//       <input
//         name="store"
//         value={formData.store}
//         onChange={handleChange}
//         placeholder="Store Name"
//         className="border p-2 w-full"
//       />

//       <select
//         value={formData.category}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             category: e.target.value,
//           })
//         }
//       >
//         <option>Food</option>
//         <option>Grocery</option>
//         <option>Medical</option>
//         <option>Electronics</option>
//         <option>Transport</option>
//         <option>Other</option>
//       </select>

//       <input
//         name="amount"
//         value={formData.amount}
//         onChange={handleChange}
//         placeholder="Amount"
//         className="border p-2 w-full"
//       />

//       <input
//         name="date"
//         value={formData.date}
//         onChange={handleChange}
//         className="border p-2 w-full"
//       />

//       <input
//         name="note"
//         value={formData.note}
//         onChange={handleChange}
//         className="border p-2 w-full"
//       />

//       <button
//         onClick={handleSave}
//         className="bg-green-600 text-white px-4 py-2 rounded"
//       >
//         Save Expense
//       </button>
//     </div>
//   );
// };

// export default ReviewReceipt;

import { useState } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";

const ReviewReceipt = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "Tea",
      qty: 1,
      category: "Food",
      amount: 10,
    },
    {
      id: 2,
      item: "Burger",
      qty: 1,
      category: "Food",
      amount: 50,
    },
    {
      id: 3,
      item: "Bathing Soap",
      qty: 1,
      category: "Personal Care",
      amount: 25,
    },
  ]);

  const categories = [
    "Food",
    "Grocery",
    "Electronics",
    "Personal Care",
    "Healthcare",
    "Transport",
    "Entertainment",
    "Others",
  ];

  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        item: "",
        qty: 1,
        category: "Others",
        amount: "",
      },
    ]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalAmount = items.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* CONTENT */}
      <div className="p-6">
        <div className="bg-white rounded-xl border p-5">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* RECEIPT PREVIEW */}
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-4">Receipt Preview</h3>

              <div className="flex justify-center">
                <div className="bg-gray-50 border shadow-sm w-72 p-6 text-sm">
                  <h2 className="text-center font-bold">LULU HYPERMARKET</h2>

                  <p className="text-center text-xs mt-2">Kochi, Kerala</p>

                  <p className="text-center text-xs">Ph: 0484 1234567</p>

                  <hr className="my-4" />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Tea</span>
                      <span>₹10</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Burger</span>
                      <span>₹50</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Bathing Soap</span>
                      <span>₹25</span>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹85</span>
                  </div>
                </div>
              </div>

              <button className="mt-4 border rounded-lg px-4 py-2">
                Retake / Upload Another
              </button>
            </div>

            {/* EXTRACTED DETAILS */}
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-4">Extracted Details</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Date</label>

                  <div className="relative">
                    <input
                      type="date"
                      className="w-full border rounded-lg p-3"
                    />

                    <SlCalender
                      size={18}
                      className="absolute right-3 top-3.5 text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-1">Time</label>

                  <div className="relative">
                    <input
                      type="time"
                      className="w-full border rounded-lg p-3"
                    />

                    <CiClock2
                      size={18}
                      className="absolute right-3 top-3.5 text-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium block mb-1">
                  Merchant / Store
                </label>

                <input
                  className="w-full border rounded-lg p-3"
                  defaultValue="Lulu Hypermarket"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Payment Method
                  </label>

                  <select className="w-full border rounded-lg p-3">
                    <option>Cash</option>
                    <option>Card</option>
                    <option>UPI</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-1">
                    Tax Amount
                  </label>

                  <input
                    className="w-full border rounded-lg p-3"
                    defaultValue="0"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium block mb-1">
                  Total Amount
                </label>

                <input
                  className="w-full border rounded-lg p-3"
                  value={totalAmount}
                  readOnly
                />
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium block mb-1">Notes</label>

                <textarea
                  rows={3}
                  className="w-full border rounded-lg p-3"
                  placeholder="Add a note..."
                />
              </div>

              {/* ITEMS TABLE */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Items</h3>

                  <button
                    onClick={addItem}
                    className="flex items-center gap-2 border rounded-lg px-3 py-2"
                  >
                    <BiPlus size={16} />
                    Add Item
                  </button>
                </div>

                <div className="overflow-x-auto border rounded-lg">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left">Item</th>
                        <th className="p-3 text-left">Qty</th>
                        <th className="p-3 text-left">Category</th>
                        <th className="p-3 text-left">Amount</th>
                        <th className="p-3 text-center">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {items.map((row) => (
                        <tr key={row.id} className="border-t">
                          <td className="p-2">
                            <input
                              className="w-full border rounded p-2"
                              value={row.item}
                              onChange={(e) =>
                                handleItemChange(row.id, "item", e.target.value)
                              }
                            />
                          </td>

                          <td className="p-2">
                            <input
                              type="number"
                              className="w-full border rounded p-2"
                              value={row.qty}
                              onChange={(e) =>
                                handleItemChange(row.id, "qty", e.target.value)
                              }
                            />
                          </td>

                          <td className="p-2">
                            <select
                              className="w-full border rounded p-2"
                              value={row.category}
                              onChange={(e) =>
                                handleItemChange(
                                  row.id,
                                  "category",
                                  e.target.value,
                                )
                              }
                            >
                              {categories.map((cat) => (
                                <option key={cat}>{cat}</option>
                              ))}
                            </select>
                          </td>

                          <td className="p-2">
                            <input
                              type="number"
                              className="w-full border rounded p-2"
                              value={row.amount}
                              onChange={(e) =>
                                handleItemChange(
                                  row.id,
                                  "amount",
                                  e.target.value,
                                )
                              }
                            />
                          </td>

                          <td className="p-2 text-center">
                            <button
                              onClick={() => deleteItem(row.id)}
                              className="text-red-500"
                            >
                              <BiTrash size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FOOTER BUTTONS */}
              <div className="flex justify-end gap-3 mt-6">
                <button className="border px-5 py-2 rounded-lg">Cancel</button>

                <button className="bg-black text-white px-5 py-2 rounded-lg">
                  Save Expense
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewReceipt;
