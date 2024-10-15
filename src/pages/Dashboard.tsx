import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'JAN', value: 4000 },
  { name: 'FEB', value: 3000 },
  { name: 'MAR', value: 5000 },
  { name: 'APR', value: 4000 },
  { name: 'MAY', value: 6000 },
  { name: 'JUN', value: 5500 },
  { name: 'JUL', value: 7000 },
];

const businessTypes = [
  { type: 'Oil & Gas', percentage: 45, value: 38053.15 },
  { type: 'Crude Oil', percentage: 32, value: 26240.2 },
  { type: 'Cars', percentage: 22, value: 12640.2 },
];

const deliveries = [
  { status: 'On time', percentage: 60 },
  { status: 'In progress', percentage: 20 },
  { status: 'Delayed', percentage: 16 },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-600">You spent</h2>
          <p className="text-4xl font-bold">$14,560</p>
          <p className="text-sm text-green-500">+1.2% than last week</p>
        </div>
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Open billings
        </button>
      </div>

      <div className="mb-8 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-semibold">Spent by Business Type</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Type</th>
                <th className="text-left">Percentage</th>
                <th className="text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              {businessTypes.map((item, index) => (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>
                    <div className="h-2 w-full bg-gray-200">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="text-right">${item.value.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold">Deliveries</h3>
          <div className="flex justify-center">
            <div className="relative h-48 w-48">
              {deliveries.map((item, index) => (
                <div
                  key={index}
                  className="absolute inset-0"
                  style={{
                    clipPath: `conic-gradient(from 0deg, transparent ${
                      index * 100
                    }deg, currentColor 0deg ${(index + 1) * 100}deg, transparent 0)`,
                    color: ['#4CAF50', '#2196F3', '#FFC107'][index],
                  }}
                ></div>
              ))}
              <div className="absolute inset-4 rounded-full bg-white"></div>
            </div>
          </div>
          <div className="mt-4">
            {deliveries.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{item.status}</span>
                <span>{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
