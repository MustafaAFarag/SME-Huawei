import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { FaEdit, FaTrash, FaPlus, FaEllipsisV, FaSearch } from 'react-icons/fa';

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

const documentTypes = [
  'All',
  'Invoice',
  'Shipment',
  'Order',
  'Catalog',
] as const;

function Documents() {
  const [documents] = useState(documentData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === 'All' || doc.type === selectedType;

    return matchesSearch && matchesType;
  });

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
              {({ active }) => (
                <button
                  className={`${active ? 'bg-gray-100' : ''} w-full px-4 py-2 text-left text-sm font-semibold text-gray-800`}
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
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Documents</h1>
          <p className="mt-1 text-base text-gray-600">
            {filteredDocuments.length} total documents
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
          <FaPlus /> Add Document
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex items-center gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search by document ID or name..."
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm font-semibold focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <FilterDropdown
          options={documentTypes}
          value={selectedType}
          onChange={setSelectedType}
          label="Type"
        />
      </div>

      {/* Documents Table */}
      <div className="rounded-lg bg-white shadow-md">
        <div className="grid grid-cols-[1fr,2fr,1fr,auto] gap-4 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold text-gray-700">
          <div>Document ID</div>
          <div>Name</div>
          <div>Type</div>
          <div>Actions</div>
        </div>

        {filteredDocuments.map((doc) => (
          <div
            key={doc.id}
            className="grid grid-cols-[1fr,2fr,1fr,auto] gap-4 border-b border-gray-200 p-4 text-gray-700 hover:bg-gray-50"
          >
            <div className="font-medium text-gray-800">{doc.id}</div>
            <div className="font-medium text-gray-800">{doc.name}</div>
            <div className="text-gray-600">{doc.type}</div>
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
          </div>
        ))}

        {filteredDocuments.length === 0 && (
          <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              No documents found
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

export default Documents;
