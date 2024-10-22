import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaEdit, FaTrash } from 'react-icons/fa';

const customerData = [
  {
    id: 'C001',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    status: 'Active',
  },
  {
    id: 'C002',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '098-765-4321',
    status: 'Inactive',
  },
  {
    id: 'C003',
    name: 'Michael Brown',
    email: 'michael@example.com',
    phone: '555-123-4567',
    status: 'Active',
  },
  {
    id: 'C004',
    name: 'Emily Davis',
    email: 'emily@example.com',
    phone: '444-555-6666',
    status: 'Pending',
  },
];

function Customers() {
  const [customers] = useState(customerData);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
        <button className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-white shadow-md transition duration-200 hover:bg-green-700">
          <FaUserPlus className="mr-2" /> Add Customer
        </button>
      </motion.div>

      <div className="grid gap-4">
        {/* Header Row */}
        <div className="grid grid-cols-[1fr,2fr,2fr,1fr,1fr] gap-4 rounded-lg bg-gray-200 p-4 font-semibold text-gray-600">
          <div>Customer ID</div>
          <div>Name</div>
          <div>Email</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {/* Customer Rows */}
        {customers.map((customer) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-[1fr,2fr,2fr,1fr,1fr] gap-4 rounded-lg bg-white p-4 shadow transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="font-medium text-gray-800">{customer.id}</div>
            <div className="font-medium text-gray-800">{customer.name}</div>
            <div className="text-gray-600">{customer.email}</div>
            <div
              className={`font-medium ${
                customer.status === 'Inactive'
                  ? 'text-red-600'
                  : customer.status === 'Active'
                    ? 'text-green-600'
                    : 'text-yellow-500'
              }`}
            >
              {customer.status}
            </div>
            <div className="flex gap-4">
              <button className="text-blue-500 hover:text-blue-700">
                <FaEdit />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Customers;
