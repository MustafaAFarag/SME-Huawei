import { IconType } from 'react-icons';
import {
  FaFileAlt,
  FaShip,
  FaFileInvoiceDollar,
  FaArrowUp,
} from 'react-icons/fa';
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
import { FaArrowDown } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useState } from 'react';

const data = [
  { name: 'Week 1', value: 4000 },
  { name: 'Week 2', value: 3000 },
  { name: 'Week 3', value: 5000 },
  { name: 'Week 4', value: 4000 },
  { name: 'Week 5', value: 6000 },
  { name: 'Week 6', value: 5500 },
  { name: 'Week 7', value: 7000 },
  { name: 'Week 8', value: 6500 },
  { name: 'Week 9', value: 7500 },
  { name: 'Week 10', value: 8000 },
];

const businessTypes = [
  { type: 'Oil & Gas', percentage: 45, value: 38053.15 },
  { type: 'Crude Oil', percentage: 32, value: 26240.2 },
  { type: 'Cars', percentage: 22, value: 12640.2 },
];

const deliveries = [
  { status: 'On time', percentage: 60, color: '#4CAF50' },
  { status: 'In progress', percentage: 20, color: '#FFC107' },
  { status: 'Delayed', percentage: 16, color: '#F44336' },
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-5 rounded-lg bg-white px-6 py-4 shadow-md"
    >
      <div className="relative top-3 flex items-center justify-center">
        <div className="absolute inset-0 flex h-14 w-14 items-center justify-center rounded-full bg-gray-200"></div>
        <div className="relative bottom-[0.35rem] left-1 flex items-center justify-center rounded-full bg-secondary p-3">
          <Icon className="text-2xl text-white" />
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold text-gray-500">{title}</h3>
        <div className="flex items-center justify-center gap-2">
          <p className="mb-1 text-4xl font-bold">{value}</p>
          <p
            className={`text-sm ${
              isPositive ? 'text-green-500' : 'text-red-500'
            } flex translate-y-1 items-center justify-center`}
          >
            {isPositive ? <FaArrowUp /> : <FaArrowDown />}
            {Math.abs(change)}%{' '}
            <span className="ml-1 text-gray-500">than last week</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

function Dashboard() {
  const [activeTimeframe, setActiveTimeframe] = useState('7');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center"
        >
          <h1 className="mb-4 text-3xl font-bold sm:mb-0">
            Welcome back, <span className="text-blue-600">Mustafa Ashraf</span>
          </h1>
          <div className="inline-flex rounded-md shadow-sm">
            {['7', '10', '30'].map((days) => (
              <button
                key={days}
                onClick={() => setActiveTimeframe(days)}
                className={`${
                  activeTimeframe === days
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } ${
                  days === '7'
                    ? 'rounded-l-lg'
                    : days === '30'
                      ? 'rounded-r-lg'
                      : ''
                } border border-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                Last {days} Days
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DashboardStat
            title="REQUEST FOR QUOTATION"
            value="21"
            change={1.2}
            icon={FaFileAlt}
          />
          <DashboardStat
            title="SHIPMENTS"
            value="42"
            change={7.8}
            icon={FaShip}
          />
          <DashboardStat
            title="INVOICES TO PAY"
            value="8"
            change={-1.23}
            icon={FaFileInvoiceDollar}
          />
        </div>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-600">You spent</h2>
              <p className="text-4xl font-bold">$14,560</p>
              <p className="text-sm text-green-500">+1.2% than last week</p>
            </div>
            <button className="rounded-lg border border-gray-300 bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Open Billings
            </button>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#72d8f7" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#72d8f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#72d8f7"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-lg bg-white p-6 shadow-lg"
          >
            <h3 className="mb-4 text-xl font-semibold">
              Spent by Business Type
            </h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="pb-2 text-left font-semibold text-gray-600">
                    Type
                  </th>
                  <th className="pb-2 text-left font-semibold text-gray-600">
                    Percentage
                  </th>
                  <th className="pb-2 text-right font-semibold text-gray-600">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {businessTypes.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-3">{item.type}</td>
                    <td className="py-3">
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{
                            delay: 0.6 + index * 0.2,
                            duration: 0.8,
                          }}
                          className="h-full rounded-full bg-primary"
                        ></motion.div>
                      </div>
                    </td>
                    <td className="py-3 text-right">
                      ${item.value.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-lg bg-white p-6 shadow-lg"
          >
            <h3 className="mb-4 text-xl font-semibold">Deliveries</h3>
            <div className="flex items-center">
              <div className="h-48 w-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deliveries}
                      dataKey="percentage"
                      nameKey="status"
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      fill="#8884d8"
                      label
                    >
                      {deliveries.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="ml-6 w-full">
                {deliveries.map((item, index) => (
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
