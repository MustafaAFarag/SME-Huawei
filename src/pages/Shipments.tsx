import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import {
  FaSearch,
  FaCalendar,
  FaEdit,
  FaTrash,
  FaBox,
  FaMapMarkerAlt,
  FaChevronDown,
  FaPlus,
} from 'react-icons/fa';

type ShipmentStatus = 'In Transit' | 'Delivered' | 'Pending' | 'Cancelled';
type Carrier = 'DHL' | 'FedEx' | 'UPS';

interface Shipment {
  id: string;
  status: ShipmentStatus;
  date: string;
  carrier: Carrier;
  origin: string;
  destination: string;
  tracking: string;
}

const shipmentData: Shipment[] = [
  {
    id: 'SH001',
    status: 'In Transit',
    date: '2024-10-22',
    carrier: 'DHL',
    origin: 'New York, NY',
    destination: 'Los Angeles, CA',
    tracking: 'DHL7364528',
  },
  {
    id: 'SH002',
    status: 'Delivered',
    date: '2024-10-20',
    carrier: 'FedEx',
    origin: 'Chicago, IL',
    destination: 'Miami, FL',
    tracking: 'FDX8472947',
  },
  {
    id: 'SH003',
    status: 'Pending',
    date: '2024-10-25',
    carrier: 'UPS',
    origin: 'Seattle, WA',
    destination: 'Boston, MA',
    tracking: 'UPS9384756',
  },
  {
    id: 'SH004',
    status: 'Cancelled',
    date: '2024-10-18',
    carrier: 'DHL',
    origin: 'Austin, TX',
    destination: 'Denver, CO',
    tracking: 'DHL2938475',
  },
];

const carriers = ['All', 'DHL', 'FedEx', 'UPS'] as const;
const statuses = [
  'All',
  'In Transit',
  'Delivered',
  'Pending',
  'Cancelled',
] as const;

function Shipments() {
  const [shipments] = useState<Shipment[]>(shipmentData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCarrier, setSelectedCarrier] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const getStatusColor = (status: ShipmentStatus): string => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-200 text-green-900';
      case 'In Transit':
        return 'bg-blue-200 text-blue-900';
      case 'Pending':
        return 'bg-yellow-200 text-yellow-900';
      case 'Cancelled':
        return 'bg-red-200 text-red-900';
      default:
        return 'bg-gray-200 text-gray-900';
    }
  };

  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.tracking.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCarrier =
      selectedCarrier === 'All' || shipment.carrier === selectedCarrier;
    const matchesStatus =
      selectedStatus === 'All' || shipment.status === selectedStatus;
    return matchesSearch && matchesCarrier && matchesStatus;
  });

  const notDelivered = shipments.filter(
    (shipment) =>
      shipment.status === 'In Transit' ||
      shipment.status === 'Pending' ||
      shipment.status === 'Cancelled',
  ).length;

  const FilterDropdown = ({
    options,
    value,
    onChange,
    label,
  }: {
    options: readonly string[];
    value: string;
    onChange: (value: string) => void;
    label: string;
  }) => (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">
        {label}: {value}
        <FaChevronDown className="text-gray-500" />
      </MenuButton>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <MenuItems className="absolute right-0 mt-2 w-40 rounded-lg bg-white py-1 shadow-lg">
          {options.map((option) => (
            <MenuItem key={option}>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } w-full px-4 py-2 text-left text-sm font-semibold text-gray-800`}
                  onClick={() => onChange(option)}
                >
                  {option}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Shipments</h1>
            <p className="mt-1 text-base text-gray-600">
              {shipments.length} total shipments · {notDelivered} still in
              progress
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
            <FaPlus /> Add Shipment
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by shipment ID or tracking number..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm font-semibold focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <FilterDropdown
            options={carriers}
            value={selectedCarrier}
            onChange={setSelectedCarrier}
            label="Carrier"
          />
          <FilterDropdown
            options={statuses}
            value={selectedStatus}
            onChange={setSelectedStatus}
            label="Status"
          />
        </div>

        {/* Shipments Table */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="grid grid-cols-[1fr,1fr,2fr,1fr,1fr,auto] gap-4 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold text-gray-700">
            <div>Shipment ID</div>
            <div>Status</div>
            <div>Route</div>
            <div>Expected Delivery</div>
            <div>Carrier</div>
            <div>Actions</div>
          </div>

          {filteredShipments.map((shipment) => (
            <div
              key={shipment.id}
              className="grid grid-cols-[1fr,1fr,2fr,1fr,1fr,auto] gap-4 border-b border-gray-200 p-4 text-gray-700 hover:bg-gray-50"
            >
              <div>
                <div className="text-lg font-bold text-gray-900">
                  {shipment.id}
                </div>
                <div className="text-xs text-gray-500">{shipment.tracking}</div>
              </div>
              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(shipment.status)}`}
                >
                  {shipment.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaMapMarkerAlt className="text-gray-500" />
                {shipment.origin} → {shipment.destination}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaCalendar className="text-gray-500" />
                {shipment.date}
              </div>
              <div className="text-sm text-gray-600">{shipment.carrier}</div>
              <div className="flex items-center gap-2">
                <button className="rounded p-1 text-blue-700 hover:bg-blue-50">
                  <FaEdit />
                </button>
                <button className="rounded p-1 text-red-700 hover:bg-red-50">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredShipments.length === 0 && (
          <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
            <FaBox className="mb-4 text-4xl text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">
              No shipments found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shipments;
