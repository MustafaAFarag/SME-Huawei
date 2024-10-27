import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { FaShoppingCart, FaUsers, FaBoxes, FaChartLine } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

// Sample retail-focused data
const salesData = [
  { name: 'Week 1', value: 15000 },
  { name: 'Week 2', value: 18000 },
  { name: 'Week 3', value: 22000 },
  { name: 'Week 4', value: 19000 },
  { name: 'Week 5', value: 25000 },
  { name: 'Week 6', value: 28000 },
  { name: 'Week 7', value: 30000 },
  { name: 'Week 8', value: 32000 },
  { name: 'Week 9', value: 35000 },
  { name: 'Week 10', value: 38000 },
];

const categoryBreakdown = [
  { type: 'Electronics', percentage: 35, value: 158000 },
  { type: 'Fashion', percentage: 28, value: 126000 },
  { type: 'Home & Living', percentage: 22, value: 99000 },
  { type: 'Beauty', percentage: 15, value: 67000 },
];

const orderStatus = [
  { status: 'Completed', percentage: 65, color: '#4CAF50' },
  { status: 'Processing', percentage: 25, color: '#FFC107' },
  { status: 'Cancelled', percentage: 10, color: '#F44336' },
];

type DashboardStatProps = {
  title: string;
  value: string;
  change: number;
  icon: IconType;
};

const DashboardStat = ({
  title,
  value,
  change,
  icon: Icon,
}: DashboardStatProps) => {
  const isPositive = change >= 0;
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="translate-y-5 rounded-full bg-blue-100 p-3">
          <Icon className="text-2xl text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <p className="mt-2 text-2xl font-bold">{value}</p>
          <p
            className={`mt-1 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}
          >
            {isPositive ? '↑' : '↓'} {Math.abs(change)}% than last week
          </p>
        </div>
      </div>
    </div>
  );
};

function Dashboard() {
  const [timeframe, setTimeframe] = useState('7');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              E-Commerce Dashboard
            </h1>
            <p className="mt-1 text-gray-600">Track your store's performance</p>
          </div>
          <div className="inline-flex rounded-lg bg-white shadow-sm">
            {['7', '30', '90'].map((days) => (
              <button
                key={days}
                onClick={() => setTimeframe(days)}
                className={`px-4 py-2 text-sm font-medium ${
                  timeframe === days
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                } ${days === '7' ? 'rounded-l-lg' : ''} ${days === '90' ? 'rounded-r-lg' : ''} `}
              >
                {days} Days
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardStat
            title="TOTAL ORDERS"
            value="1,284"
            change={12.5}
            icon={FaShoppingCart}
          />
          <DashboardStat
            title="ACTIVE CUSTOMERS"
            value="892"
            change={8.2}
            icon={FaUsers}
          />
          <DashboardStat
            title="INVENTORY ITEMS"
            value="1,567"
            change={-2.4}
            icon={FaBoxes}
          />
          <DashboardStat
            title="CONVERSION RATE"
            value="3.2%"
            change={0.8}
            icon={FaChartLine}
          />
        </div>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Revenue Overview
              </h2>
              <p className="text-gray-600">Total revenue: $285,000</p>
            </div>
            <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm">
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last Quarter</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-6 text-xl font-bold text-gray-900">
              Sales by Category
            </h3>
            <div className="grid grid-cols-3 gap-4 font-medium text-gray-600">
              <div className="border-b">Category</div>
              <div className="border-b">Share</div>
              <div className="border-b text-right">Revenue</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {categoryBreakdown.map((item) => (
                <>
                  <div className="py-3">{item.type}</div>
                  <div className="flex items-center py-3">
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="ml-2 text-sm">{item.percentage}%</span>
                  </div>
                  <div className="py-3 text-right">
                    ${item.value.toLocaleString()}
                  </div>
                </>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-lg bg-white p-6 shadow-lg"
          >
            <h3 className="mb-4 text-xl font-semibold">Order Status</h3>
            <div className="flex items-center">
              <div className="h-48 w-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={orderStatus}
                      dataKey="percentage"
                      nameKey="status"
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      fill="#8884d8"
                      label
                    >
                      {orderStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="ml-6 w-full">
                {orderStatus.map((item, index) => (
                  <div key={index} className="mb-2 flex items-center gap-4">
                    <p className="w-24 truncate text-base font-semibold">
                      {item.status}
                    </p>
                    <div className="h-2 w-full max-w-[14rem] rounded-full bg-gray-200">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></motion.div>
                    </div>
                    <p className="text-base font-medium">{item.percentage}%</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
