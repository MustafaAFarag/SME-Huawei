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
              className="rounded-full border border-gray-300 py-2 pl-10 pr-4"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-600" />
          <div className="flex items-center space-x-2">
            <img
              src="./default-user.jpg"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-semibold">Mustafa Ashraf</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
