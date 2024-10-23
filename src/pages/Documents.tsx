import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const documentData = [
  {
    id: 'DOC001',
    name: 'Invoice October',
    type: 'Invoice',
    date: '2024-10-20',
  },
  {
    id: 'DOC002',
    name: 'Shipment Receipt',
    type: 'Shipment',
    date: '2024-10-22',
  },
  {
    id: 'DOC003',
    name: 'Order Confirmation',
    type: 'Order',
    date: '2024-10-18',
  },
  {
    id: 'DOC004',
    name: 'Product Catalogue',
    type: 'Catalog',
    date: '2024-10-25',
  },
];

function Documents() {
  const [documents] = useState(documentData);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold">Documents</h1>
        <button className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white shadow transition duration-200 hover:bg-blue-600">
          <FaPlus className="mr-2" /> Add Document
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="rounded-lg bg-white p-6 shadow-lg"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between rounded-lg border border-gray-300 p-4 shadow-md"
            >
              <div className="flex items-center gap-4">
                <FaFileAlt className="text-2xl text-blue-500" />
                <div>
                  <h3 className="font-semibold">{doc.name}</h3>
                  <p className="text-sm text-gray-500">{doc.type}</p>
                  <p className="text-sm text-gray-400">{doc.date}</p>
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

export default Documents;
