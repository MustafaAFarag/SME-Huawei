import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaChartLine,
  FaBoxes,
  FaTruck,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const menuItems = [
  { icon: FaChartLine, text: 'Dashboard', link: '/dashboard' },
  { icon: FaBoxes, text: 'Inventory', link: '/inventory' },
  { icon: FaTruck, text: 'Logistics', link: '/logistics' },
  { icon: FaUsers, text: 'Customers', link: '/customers' },
  { icon: FaCog, text: 'Settings', link: '/settings' },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="fixed left-4 top-4 z-20 rounded-md bg-primary p-2 text-white md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <aside
        className={`fixed inset-y-0 left-0 z-10 flex w-64 flex-col bg-primary text-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:static md:translate-x-0`}
      >
        <div className="flex h-20 items-center justify-center border-b border-gray-700">
          <h1 className="text-2xl font-bold">LogiSmart</h1>
        </div>
        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`flex items-center rounded-md p-3 transition-colors duration-200 hover:bg-gray-700 ${
                location.pathname === item.link ? 'bg-gray-700' : ''
              }`}
            >
              <item.icon className="mr-4 text-xl" />
              <span>{item.text}</span>
            </Link>
          ))}
        </nav>
        <div className="border-t border-gray-700 p-4">
          <button
            className="flex w-full items-center rounded-md p-3 text-left transition-colors duration-200 hover:bg-gray-700"
            onClick={() => {
              // Add logout functionality here
              console.log('Logout clicked');
            }}
          >
            <FaSignOutAlt className="mr-4 text-xl" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
