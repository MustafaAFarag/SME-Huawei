import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaEdit, FaTrash } from 'react-icons/fa';

const shipmentData = [
  { id: 'SH001', status: 'In Transit', date: '2024-10-22', carrier: 'DHL' },
  { id: 'SH002', status: 'Delivered', date: '2024-10-20', carrier: 'FedEx' },
  { id: 'SH003', status: 'Pending', date: '2024-10-25', carrier: 'UPS' },
  { id: 'SH004', status: 'Cancelled', date: '2024-10-18', carrier: 'DHL' },
];

function Shipments() {
  const [shipments, setShipments] = useState(shipmentData);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold text-gray-800">Shipments</h1>
        <button className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md transition duration-200 hover:bg-blue-700">
          <FaTruck className="mr-2" /> Add Shipment
        </button>
      </motion.div>

      <div className="grid gap-4">
        <div className="grid grid-cols-[1fr,2fr,1fr,1fr,1fr] gap-4 rounded-lg bg-gray-200 p-4 font-semibold text-gray-600">
          <div>Shipment ID</div>
          <div>Status</div>
          <div>Expected Delivery</div>
          <div>Carrier</div>
          <div>Actions</div>
        </div>

        {shipments.map((shipment) => (
          <motion.div
            key={shipment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-[1fr,2fr,1fr,1fr,1fr] gap-4 rounded-lg bg-white p-4 shadow transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="font-medium text-gray-800">{shipment.id}</div>
            <div
              className={`font-medium ${
                shipment.status === 'Cancelled'
                  ? 'text-red-600'
                  : shipment.status === 'In Transit'
                    ? 'text-yellow-500'
                    : shipment.status === 'Delivered'
                      ? 'text-green-600'
                      : 'text-gray-500'
              }`}
            >
              {shipment.status}
            </div>
            <div className="text-gray-600">{shipment.date}</div>
            <div className="text-gray-600">{shipment.carrier}</div>
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

export default Shipments;
