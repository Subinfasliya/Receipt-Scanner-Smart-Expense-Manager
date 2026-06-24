import { BiTrash } from "react-icons/bi";

const Table = ({items,categories}) => {
  return (
    <>
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
                      handleItemChange(row.id, "category", e.target.value)
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
                      handleItemChange(row.id, "amount", e.target.value)
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
    </>
  );
};
export default Table;
