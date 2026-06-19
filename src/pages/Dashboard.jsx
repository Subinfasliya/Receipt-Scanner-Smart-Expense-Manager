import ExpenseCard from "../components/dashboard/ExpenseCard";
import { LuCalendarDays, LuPlus, LuWallet } from "react-icons/lu";
import { RiPieChart2Line, RiUploadCloudLine } from "react-icons/ri";
import { TfiReceipt } from "react-icons/tfi";
import AIInsights from "../components/dashboard/AIInsights";
import { useReceiptScanner } from "../hooks/useReceiptScanner";
import { useNavigate } from "react-router";
import { lazy, Suspense } from "react";
import ActionCard from "../components/dashboard/ActionCard";
import { MdOutlineCameraAlt } from "react-icons/md";

const ExpenseTrendChart = lazy(() => 
  import("../components/dashboard/ExpenseTrendChart")
)

// Summary Cards
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
    title: "This Month Expense",
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

// 
  const actionCards = [
    {
      title: "Scan Receipt",
      description: "Use camera to scan",
      icon: <MdOutlineCameraAlt size={30} />,
      bgColor: "bg-[#EDE9FE]",
      iconBg: "text-[#7C3AED]",
      link: "/app/scan-receipt",
    },
    {
      title: "Upload Receipt",
      description: "Upload from gallery",
      icon: <RiUploadCloudLine size={30} />,
      bgColor: "bg-[#DBEAFE]",
      iconBg: "text-[#2563EB]",
      link: "/app/upload-receipt",
    },
    {
      title: "Add Expense",
      description: "Create expense manually",
      icon: <LuPlus size={30} />,
      bgColor: "bg-[#DCFCE7]",
      iconBg: "text-[#22C55E]",
      action: "/app/review-receipt",
    },
  ];

const Dashboard = () => {

  const navigate = useNavigate();
  const { loading, ocrText, processReceipt } = useReceiptScanner();

  console.log(ocrText);


  return (
    <>
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
              <p className="mb-5">Extract and save your expenses in seconds</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {actionCards.map((card)=> (
                  <ActionCard key={card.title} {...card}/>
                ))}
              </div>
            </div>
          </section>

          {/* Chart Section*/}
          <section>
            <div className="bg-white rounded-2xl p-6 shadow-sm ">
              {/* Expense Trend Chart */}
              <Suspense fallback={<p>Loading chart...</p>}>
                <ExpenseTrendChart />
              </Suspense>
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
    </>
  );
};
export default Dashboard;
