
import { Outlet } from "react-router";
import receiptIllustration from "../../../assets/images/receipt-illustration.png"

const AuthLayout = () => {

 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:w-1/2 bg-white  flex items-center justify-center p-10">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Smart Expense Management <span className="text-[#7C3AED]">Made Simple</span>
            </h1>

            <p className="text-gray-600 text-lg mb-10">
              Scan receipts, track expenses, and get AI insights to save more.
            </p>

            <div className="  hidden sm:flex sm:justify-center">
              <img
                src={receiptIllustration}
                alt="Expense Tracking"
                className="w-full max-w-xl"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm p-10">

             <Outlet/>
             
          </div>
        </div>
      </div>


    </div>
  );
};

export default AuthLayout;