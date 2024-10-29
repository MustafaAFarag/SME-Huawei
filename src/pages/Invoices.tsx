import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaEllipsisV } from 'react-icons/fa';
import { motion } from 'framer-motion';

const invoiceData = [
  { id: 'INV001', customer: 'John Doe', amount: '$500.00', date: '2024-10-22' },
  {
    id: 'INV002',
    customer: 'Jane Smith',
    amount: '$250.00',
    date: '2024-10-20',
  },
  {
    id: 'INV003',
    customer: 'Acme Corp',
    amount: '$1,200.00',
    date: '2024-10-18',
  },
  {
    id: 'INV004',
    customer: 'Global Supplies',
    amount: '$3,450.00',
    date: '2024-10-25',
  },
];

function Invoices() {
  const [invoices] = useState(invoiceData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.customer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Invoices</h1>
          <p className="mt-1 text-base text-gray-600">
            {filteredInvoices.length} total invoices
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
          <FaPlus /> Add Invoice
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex items-center">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search by invoice ID or customer name..."
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm font-semibold focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Invoices Table */}
      <div className="rounded-lg bg-white shadow-md">
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold text-gray-700">
          <div>Invoice ID</div>
          <div>Customer</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Actions</div>
        </div>

        {filteredInvoices.map((invoice) => (
          <motion.div
            key={invoice.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-[1fr,1fr,1fr,1fr,auto] border-b border-gray-200 p-4 text-gray-700 hover:bg-gray-50"
          >
            <div className="font-medium text-gray-800">{invoice.id}</div>
            <div className="font-medium text-gray-800">{invoice.customer}</div>
            <div className="text-gray-600">{invoice.date}</div>
            <div className="text-green-500">{invoice.amount}</div>
            <div className="flex items-center justify-end">
              <Menu as="div" className="relative">
                <MenuButton className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
                  <FaEllipsisV />
                </MenuButton>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <MenuItems className="absolute right-0 z-[60] mt-2 w-32 rounded-lg bg-white py-1 shadow-lg">
                    <MenuItem>
                      {({ active }) => (
                        <button
                          className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold text-gray-800 ${active ? 'bg-gray-100' : ''}`}
                        >
                          <FaEdit className="text-blue-700" /> Edit
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <button
                          className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold text-gray-800 ${active ? 'bg-gray-100' : ''}`}
                        >
                          <FaTrash className="text-red-700" /> Delete
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </motion.div>
        ))}

        {filteredInvoices.length === 0 && (
          <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              No invoices found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Invoices;
