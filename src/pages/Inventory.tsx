import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaChevronDown,
  FaExclamationTriangle,
  FaEllipsisV,
} from 'react-icons/fa';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';

type Status = 'In Stock' | 'Low Stock' | 'Out of Stock';
type Category = 'Electronics' | 'Fashion' | 'Home & Living' | 'Beauty';

interface InventoryItem {
  id: number;
  name: string;
  sku: string;
  category: Category;
  quantity: number;
  price: number;
  status: Status;
  reorderPoint: number;
  lastUpdated: string;
  image: string;
}

const inventoryData: InventoryItem[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    sku: 'IP14P-256-GRP',
    category: 'Electronics',
    quantity: 50,
    price: 999.99,
    status: 'In Stock',
    reorderPoint: 20,
    lastUpdated: '2024-03-15',
    image: './default-user.jpg',
  },
  {
    id: 2,
    name: 'Nike Air Max 2024',
    sku: 'NK-AM24-42-BLK',
    category: 'Fashion',
    quantity: 8,
    price: 179.99,
    status: 'Low Stock',
    reorderPoint: 10,
    lastUpdated: '2024-03-14',
    image: './default-user.jpg',
  },
  {
    id: 3,
    name: 'Samsung 4K Smart TV',
    sku: 'SAM-TV55-4K',
    category: 'Electronics',
    quantity: 0,
    price: 699.99,
    status: 'Out of Stock',
    reorderPoint: 5,
    lastUpdated: '2024-03-13',
    image: './default-user.jpg',
  },
  {
    id: 4,
    name: 'Leather Sofa Set',
    sku: 'FRN-SOF-LTH-BRW',
    category: 'Home & Living',
    quantity: 12,
    price: 1299.99,
    status: 'In Stock',
    reorderPoint: 4,
    lastUpdated: '2024-03-15',
    image: './default-user.jpg',
  },
];

const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Living',
  'Beauty',
] as const;

const statuses = ['All', 'In Stock', 'Low Stock', 'Out of Stock'] as const;

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
  <Menu as="div" className="relative isolate">
    <MenuButton className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">
      {label}: {value}
      <FaChevronDown className="text-gray-500" />
    </MenuButton>
    <Transition
      enter="transition duration-75 ease-in-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-50 ease-in-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <MenuItems className="absolute right-0 z-[100] mt-2 w-40 rounded-lg bg-white py-1 shadow-lg">
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

function Inventory() {
  const [inventory] = useState<InventoryItem[]>(inventoryData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const getStatusColor = (status: Status): string => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-200 text-green-900';
      case 'Low Stock':
        return 'bg-yellow-200 text-yellow-900';
      case 'Out of Stock':
        return 'bg-red-200 text-red-900';
      default:
        return 'bg-gray-200 text-gray-900';
    }
  };

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesStatus =
      selectedStatus === 'All' || item.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const lowStockItems = inventory.filter(
    (item) => item.status === 'Low Stock' || item.status === 'Out of Stock',
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Inventory</h1>
            <p className="mt-1 text-base text-gray-600">
              {inventory.length} total items · {lowStockItems} items need
              attention
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
            <FaPlus /> Add Product
          </button>
        </div>

        {/* Filters */}
        <div className="relative z-10 mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by product name or SKU..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm font-semibold focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <FilterDropdown
            options={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            label="Category"
          />
          <FilterDropdown
            options={statuses}
            value={selectedStatus}
            onChange={setSelectedStatus}
            label="Status"
          />
        </div>

        {/* Inventory Table */}
        <div className="relative z-0 rounded-lg bg-white shadow-md">
          <div className="grid grid-cols-[1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold text-gray-700">
            <div>Image</div>
            <div>Product Info</div>
            <div>Quantity</div>
            <div>Status</div>
            <div>Actions</div>
          </div>

          {filteredInventory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="relative grid grid-cols-[1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-200 p-4 text-gray-700 hover:bg-gray-50"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-lg object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">SKU: {item.sku}</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-base text-primary">{item.quantity}</p>
                {item.quantity <= item.reorderPoint && (
                  <p className="flex items-center text-sm text-yellow-600">
                    <FaExclamationTriangle className="mr-1" /> Reorder needed
                  </p>
                )}
              </div>
              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(item.status)}`}
                >
                  {item.status}
                </span>
              </div>
              <div className="flex items-center justify-end">
                <Menu as="div" className="relative">
                  <MenuButton className="static z-0 rounded-full p-2 text-gray-600 hover:bg-gray-100">
                    <FaEllipsisV />
                  </MenuButton>
                  <Transition
                    enter="transition duration-75 ease-in-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-50 ease-in-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <MenuItems className="absolute right-7 z-[999] mt-2 inline-block w-32 rounded-lg bg-white py-1 shadow-lg">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Inventory;
