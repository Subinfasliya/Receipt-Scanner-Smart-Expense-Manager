const ReviewReceipt = () => {
  return (
    <>
      <div className="bg-white rounded-2xl p-6">
        <h2 className="text-center text-xl mb-6">Receipt Preview</h2>

        <div className="space-y-4 max-w-[450px] border p-6 mx-auto">
          <div >
            <label className="mb-5" htmlFor="storeName" >Store Name</label>
            <input
              className="py-2 px-4 rounded-lg bg-gray-100 w-full"
              placeholder="Store Name"
              id="storeName"
            />
        
          </div>
          <div>
            <input
              className="py-2 px-4 rounded-lg bg-gray-100 w-full"
              placeholder="Date"
            />
          </div>
          <div>
            <input
              className="py-2 px-4 rounded-lg bg-gray-100 w-full"
              placeholder="Category"
            />
          </div>
          <div>
            <input
              className="py-2 px-4 rounded-lg bg-gray-100 w-full"
              placeholder="Total Amount"
            />
          </div>

          <div className="flex justify-between px-4">
            <button className="">Cancel</button>
            <button className="">Save Expense</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReviewReceipt;
