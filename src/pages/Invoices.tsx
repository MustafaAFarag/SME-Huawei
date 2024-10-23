import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileInvoiceDollar, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold">Invoices</h1>
        <button className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white shadow transition duration-200 hover:bg-blue-600">
          <FaPlus className="mr-2" /> Add Invoice
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="rounded-lg bg-white p-6 shadow-lg"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between rounded-lg border border-gray-300 p-4 shadow-md"
            >
              <div className="flex items-center gap-4">
                <FaFileInvoiceDollar className="text-2xl text-blue-500" />
                <div>
                  <h3 className="font-semibold">Invoice: {invoice.id}</h3>
                  <p className="text-sm text-gray-500">
                    Customer: {invoice.customer}
                  </p>
                  <p className="text-sm text-gray-400">Date: {invoice.date}</p>
                  <p className="text-sm text-green-500">
                    Amount: {invoice.amount}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Invoices;
