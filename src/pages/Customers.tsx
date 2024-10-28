import { useState } from 'react';
import {
  FaUserPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaEllipsisV,
} from 'react-icons/fa';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';

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

type CustomerStatus = 'Active' | 'Inactive' | 'Pending';
type FilterStatus = CustomerStatus | 'All';

const statuses: FilterStatus[] = ['All', 'Active', 'Inactive', 'Pending'];

function Customers() {
  const [customers] = useState(customerData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>('All');

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === 'All' || customer.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: FilterStatus): string => {
    switch (status) {
      case 'Active':
        return 'bg-green-200 text-green-900';
      case 'Inactive':
        return 'bg-red-200 text-red-900';
      case 'Pending':
        return 'bg-yellow-200 text-yellow-900';
      default:
        return 'bg-gray-200 text-gray-900';
    }
  };

  const FilterDropdown = ({
    options,
    value,
    onChange,
    label,
  }: {
    options: readonly FilterStatus[];
    value: FilterStatus;
    onChange: (value: FilterStatus) => void;
    label: string;
  }) => (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">
        {label}: {value}
      </MenuButton>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <MenuItems className="absolute right-0 z-50 mt-2 w-40 rounded-lg bg-white py-1 shadow-lg">
          {options.map((option) => (
            <MenuItem key={option}>
              {() => (
                <button
                  className="w-full px-4 py-2 text-left text-sm font-semibold text-gray-800"
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
            <h1 className="text-4xl font-bold text-gray-900">Customers</h1>
            <p className="mt-1 text-base text-gray-600">
              {customers.length} total customers
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
            <FaUserPlus /> Add Customer
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by customer ID, name, or email..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm font-semibold focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <FilterDropdown
            options={statuses}
            value={selectedStatus}
            onChange={setSelectedStatus}
            label="Status"
          />
        </div>

        {/* Customers Table */}
        <div className="rounded-lg bg-white shadow-md">
          <div className="grid grid-cols-[1fr,2fr,2fr,1fr,auto] gap-4 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold text-gray-700">
            <div>Customer ID</div>
            <div>Name</div>
            <div>Email</div>
            <div>Status</div>
            <div>Actions</div>
          </div>

          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className="grid grid-cols-[1fr,2fr,2fr,1fr,auto] gap-4 border-b border-gray-200 p-4 text-gray-700 hover:bg-gray-50"
            >
              <div className="font-medium text-gray-800">{customer.id}</div>
              <div className="font-medium text-gray-800">{customer.name}</div>
              <div className="text-gray-600">{customer.email}</div>
              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(customer.status as CustomerStatus)}`}
                >
                  {customer.status}
                </span>
              </div>
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
                    <MenuItems className="absolute right-0 z-50 mt-2 w-40 rounded-lg bg-white py-1 shadow-lg">
                      <MenuItem>
                        {() => (
                          <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold text-gray-800">
                            <FaEdit className="text-blue-700" /> Edit
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {() => (
                          <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold text-gray-800">
                            <FaTrash className="text-red-700" /> Delete
                          </button>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          ))}
        </div>

        {filteredCustomers.length === 0 && (
          <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              No customers found
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

export default Customers;
