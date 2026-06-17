import {
  FaArrowDownLong,
  FaArrowTrendUp,
  FaArrowUpLong,
  FaChartLine,
} from "react-icons/fa6";
import { RiInformationLine } from "react-icons/ri";
import { Link } from "react-router";

const AIInsights = () => {

  console.log("AI insights component rendered...");
  
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-lg">AI Insights</h2>
          <p className="text-gray-500">
            AI comparison of this month with last month
          </p>
        </div>
        <button className="py-1 px-2 text-sm border bg-[#EDE9FE] text-[#7C3AED] cursor-pointer rounded-xl font-semibold">
          New ✨
        </button>
      </div>

      {/* Increases Card */}
      <div className=" py-6 px-3 flex gap-4 mt-8 rounded-xl bg-[#f7f2f2] items-center">
        <div className="p-3 text-[#EF4444] bg-[#FEE2E2] rounded-lg">
          <FaArrowUpLong size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-md text-[#782323]">
            Food expenses increased by ₹1,200 (25%)
          </h3>
          <p className="">You spent more on restaurants and groceries.</p>
        </div>
      </div>

      {/* Decreses card */}
      <div className=" py-6 px-3 flex gap-4 mt-4 rounded-xl bg-[#f0fcf5] items-center">
        <div className="p-3 text-[#22C55E] bg-[#DCFCE7] rounded-lg">
          <FaArrowDownLong size={20} />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-md text-[#0e4d25]">
            Travel expenses decreased by ₹800 (15%)
          </h3>
          <p className="text-gray-500">Great! You spent less on travel.</p>
        </div>
      </div>

      {/*  card 3 */}
      <div className=" py-6 px-3 flex gap-4 mt-4 rounded-xl bg-[#fcf9eb] items-center">
        <div className="p-3 text-[#F59E0B] bg-[#FEF3C7] rounded-lg">
          <FaArrowTrendUp size={20} />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-md text-[#945f06]">
            Food is your highest spending category
          </h3>
          <p className="text-gray-500">You spent ₹6,250 on Food this month.</p>
        </div>
      </div>

      {/*  card  4*/}
      <div className=" py-6 px-3 flex gap-4 mt-4 rounded-xl bg-[#F3F0FF] items-center">
        <div className="p-3 text-[#6D5DFC] bg-[#e8e6ff] rounded-lg">
          <RiInformationLine size={20} />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-md text-[#2b2473]">
            Overall you spent ₹2,000 more than last month
          </h3>
          <p className="text-gray-500">Total expenses increased by 14.5%.</p>
        </div>
      </div>

      <Link to={"/analytics"}>
        <p className="flex gap-4 items-center cursor-pointer py-3 px-6 my-5 border justify-center rounded-lg text-[#4d2394] font-semibold hover:bg-[#EDE9FE] hover:border-white">
          <FaChartLine />
          View Full Analysis
        </p>
      </Link>
    </>
  );
};
export default AIInsights;
