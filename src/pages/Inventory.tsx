import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const inventoryData = [
  { id: 1, name: 'Product 1', quantity: 50, status: 'In Stock' },
  { id: 2, name: 'Product 2', quantity: 20, status: 'Low Stock' },
  { id: 3, name: 'Product 3', quantity: 0, status: 'Out of Stock' },
  { id: 4, name: 'Product 4', quantity: 75, status: 'In Stock' },
];

function Inventory() {
  const [inventory] = useState(inventoryData);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold text-gray-800">Inventory</h1>
        <button className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-blue-700">
          <FaPlus className="mr-2" /> Add Product
        </button>
      </motion.div>

      <div className="grid gap-4">
        {/* Header Row */}
        <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 rounded-lg bg-gray-200 p-4 font-semibold text-gray-600">
          <div>Product Name</div>
          <div>Quantity</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {/* Inventory Rows */}
        {inventory.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 rounded-lg bg-white p-4 shadow transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="font-medium text-gray-800">{item.name}</div>
            <div className="text-gray-600">{item.quantity}</div>
            <div
              className={`font-medium ${
                item.status === 'Out of Stock'
                  ? 'text-red-500'
                  : item.status === 'Low Stock'
                    ? 'text-yellow-500'
                    : 'text-green-600'
              }`}
            >
              {item.status}
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

export default Inventory;
