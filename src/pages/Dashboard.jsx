import { CiCamera } from "react-icons/ci";
import ExpenseCard from "../components/ExpenseCard";
import ReceiptActions from "../components/ReceiptActions";
import ExpenseTrendChart from "../components/ExpenseTrendChart";
import { LuCalendarDays, LuWallet } from "react-icons/lu";
import { RiPieChart2Line } from "react-icons/ri";
import { TfiReceipt } from "react-icons/tfi";
import Sidebar from "../components/Sidebar";
import AIInsights from "../components/AIInsights";
import { Link } from "react-router";

const summaryCards = [
  {
    icon: <LuWallet size={30} />,
    title: "Total Expense",
    total: "₹1,25,000",
    description: "↑ 18.5% vs last month",
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: <LuCalendarDays size={30} />,
    title: "Current Month Expenses",
    total: "₹15,520",
    description: "↑ 12.8% vs last month",
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#22C55E]",
  },
  {
    icon: <TfiReceipt size={30} />,
    title: "Total Scanned Receipts",
    total: 25,
    description: "This month",
    iconBg: "bg-[#FFEDD5]",
    iconColor: "text-[#F97316]",
  },
  {
    icon: <RiPieChart2Line size={30} />,
    title: "Top Category",
    total: "Food",
    description: "₹6,400 (41%)",
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="h-20 bg-white rounded-xl shadow-sm mb-6 flex items-center justify-between px-6">
          <div>
            <h1 className="text-2xl mb-1 font-bold">Dashboard</h1>
            <span>Welcome back, Subin</span>
          </div>

          <Link to={"/profile"}>
            <div className="flex gap-4 items-center">
              <div className="rounded-full w-12 h-12 flex justify-center items-center text-center bg-[#EDE9FE] text-[#7C3AED] font-bold">
                <p>SU</p>
              </div>
              <p>Subin</p>
            </div>
          </Link>
        </div>

        {/* Dashboard Content */}

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 space-y-6">
          {summaryCards.map((card) => (
            <ExpenseCard key={card.title} {...card} />
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Section */}
          <div className="col-span-12 xl:col-span-7 space-y-6">
            {/* Scan and Upload  */}
            <section>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold">Scan or Upload Receipt</h2>
                <p className="mb-5">
                  Extract and save your expenses in seconds
                </p>

                <div className="flex justify-between">
                  <ReceiptActions />
                </div>
              </div>
            </section>

            {/* Chart Section*/}
            <section>
              <div className="bg-white rounded-2xl p-6 shadow-sm ">
                {/* Expense Trend Chart */}
                <ExpenseTrendChart />
              </div>
            </section>

            {/* Recent Expenses */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              Recent Expenses Table
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-12 xl:col-span-5 space-y-6">
            {/* AI Insights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <AIInsights />
            </div>

            {/* AI Assistant */}
            <div className="bg-white rounded-2xl p-6 shadow-sm h-[500px]">
              AI Assistant
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
