import { FaSearch, FaBell } from 'react-icons/fa';

function AppHeader() {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-600" />
          <div className="flex items-center space-x-2">
            <img
              src="/api/placeholder/32/32"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-semibold">Test</span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <h1 className="text-2xl font-bold">Hello Test</h1>
        <div className="flex space-x-4">
          <DashboardStat
            title="REQUEST FOR QUOTATION"
            value="21"
            change={1.2}
          />
          <DashboardStat title="SHIPMENTS" value="42" change={7.8} />
          <DashboardStat title="INVOICES TO PAY" value="8" change={-1.23} />
        </div>
      </div>
    </header>
  );
}

type DashboardStatProps = {
  title: string;
  value: string;
  change: number;
};

const DashboardStat = ({ title, value, change }: DashboardStatProps) => {
  const isPositive = change >= 0;
  return (
    <div className="text-center">
      <h3 className="text-xs font-semibold text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p
        className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}
      >
        {isPositive ? '+' : ''}
        {change}%
      </p>
    </div>
  );
};

export default AppHeader;
