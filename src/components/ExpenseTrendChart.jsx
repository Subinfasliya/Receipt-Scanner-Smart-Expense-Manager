import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
} from "recharts";

const expenseData = {
  "3months": [
    { month: "Apr", expense: 9000 },
    { month: "May", expense: 12000 },
    { month: "Jun", expense: 15250 },
  ],

  "6months": [
    { month: "Jan", expense: 5000 },
    { month: "Feb", expense: 7000 },
    { month: "Mar", expense: 6000 },
    { month: "Apr", expense: 9000 },
    { month: "May", expense: 12000 },
    { month: "Jun", expense: 55250 },
  ],

  "1year": [
    { month: "Jul", expense: 3000 },
    { month: "Aug", expense: 4500 },
    { month: "Sep", expense: 6000 },
    { month: "Oct", expense: 7000 },
    { month: "Nov", expense: 8500 },
    { month: "Dec", expense: 9000 },
    { month: "Jan", expense: 5000 },
    { month: "Feb", expense: 7000 },
    { month: "Mar", expense: 6000 },
    { month: "Apr", expense: 9000 },
    { month: "May", expense: 12000 },
    { month: "Jun", expense: 55250 },
  ],
};

const ExpenseTrendChart = () => {

  console.log("ExpenseTrendChart Component Rendered");
  

  const [period,setPeriod] = useState("6months");

  const chartData = expenseData[period]

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Monthly Expense Trend
        </h2>

        <select className="border rounded-lg px-3 py-2 text-sm" value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value={"3months"}>Last 3 Months</option>
          <option value={"6months"}>Last 6 Months</option>
          <option value={"1year"}>Last Year</option>
        </select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="month" />

            <YAxis
              tickFormatter={(value) => `₹${value / 1000}K`}
            />  

            <Tooltip
              formatter={(value) => [`₹${value}`, "Expense"]}
            />

            <Area
              type="monotone"
              dataKey="expense"
              fill="#8b5cf6"
              fillOpacity={0.08}
              stroke="none"
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#7c3aed"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
        <p className="text-center font-semibold"><span></span> Expenses (₹)</p>

    </>
  );
};

export default ExpenseTrendChart;