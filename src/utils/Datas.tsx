export type Status = 'In Stock' | 'Low Stock' | 'Out of Stock';
type Category = 'Electronics' | 'Fashion' | 'Home & Living' | 'Beauty';

export type InventoryItem = {
  id: string;
  name: string;
  sku: string;
  category: Category;
  quantity: number;
  price: number;
  status: Status;
  reorderPoint: number;
  lastUpdated: string;
  logisticsDetail: string;
};

export const inventoryData: InventoryItem[] = [
  {
    id: 'P001',
    name: 'iPhone 14 Pro',
    sku: 'IP14P-256-GRP',
    category: 'Electronics',
    quantity: 50,
    price: 999.99,
    status: 'In Stock',
    reorderPoint: 20,
    lastUpdated: '2024-03-15',
    logisticsDetail: 'Inbound from China · Expected on 2024-03-20',
  },
  {
    id: 'P002',
    name: 'Nike Air Max 2024',
    sku: 'NK-AM24-42-BLK',
    category: 'Fashion',
    quantity: 8,
    price: 179.99,
    status: 'Low Stock',
    reorderPoint: 10,
    lastUpdated: '2024-03-14',
    logisticsDetail: 'Shipped from US warehouse · 2-day shipping available',
  },
  {
    id: 'P003',
    name: 'Samsung 4K Smart TV',
    sku: 'SAM-TV55-4K',
    category: 'Electronics',
    quantity: 0,
    price: 699.99,
    status: 'Out of Stock',
    reorderPoint: 5,
    lastUpdated: '2024-03-13',
    logisticsDetail: 'Pending restock · Estimated delivery: 2024-04-01',
  },
  {
    id: 'P004',
    name: 'Leather Sofa Set',
    sku: 'FRN-SOF-LTH-BRW',
    category: 'Home & Living',
    quantity: 12,
    price: 1299.99,
    status: 'In Stock',
    reorderPoint: 4,
    lastUpdated: '2024-03-15',
    logisticsDetail: 'In local warehouse · Ready for dispatch',
  },
  {
    id: 'P005',
    name: 'Dyson Airwrap Styler',
    sku: 'DSN-AIR-STY',
    category: 'Beauty',
    quantity: 25,
    price: 549.99,
    status: 'In Stock',
    reorderPoint: 10,
    lastUpdated: '2024-02-28',
    logisticsDetail: 'Inbound from EU warehouse · Delivery within 7 days',
  },
  {
    id: 'P006',
    name: 'Adidas Ultraboost Shoes',
    sku: 'ADD-UB20-BLK',
    category: 'Fashion',
    quantity: 5,
    price: 199.99,
    status: 'Low Stock',
    reorderPoint: 5,
    lastUpdated: '2024-03-10',
    logisticsDetail: 'Shipped from central distribution · Next-day shipping',
  },
  {
    id: 'P007',
    name: 'Sony WH-1000XM5 Headphones',
    sku: 'SON-WHXM5-BLK',
    category: 'Electronics',
    quantity: 15,
    price: 299.99,
    status: 'In Stock',
    reorderPoint: 5,
    lastUpdated: '2024-03-11',
    logisticsDetail: 'Inbound from Japan · Expected on 2024-03-21',
  },
  {
    id: 'P008',
    name: 'Instant Pot Duo 7-in-1',
    sku: 'INS-POT-DUO',
    category: 'Home & Living',
    quantity: 18,
    price: 89.99,
    status: 'In Stock',
    reorderPoint: 5,
    lastUpdated: '2024-03-12',
    logisticsDetail: 'Available at regional hub · 3-day delivery',
  },
  {
    id: 'P009',
    name: 'Apple Watch Series 8',
    sku: 'APL-WATCH8-45',
    category: 'Electronics',
    quantity: 30,
    price: 399.99,
    status: 'In Stock',
    reorderPoint: 10,
    lastUpdated: '2024-03-15',
    logisticsDetail: 'Shipped from US warehouse · Express shipping available',
  },
  {
    id: 'P010',
    name: 'Organic Face Cream',
    sku: 'BEAU-FACE-ORG',
    category: 'Beauty',
    quantity: 2,
    price: 29.99,
    status: 'Low Stock',
    reorderPoint: 3,
    lastUpdated: '2024-03-08',
    logisticsDetail: 'Inbound from EU · Estimated delivery: 2024-03-30',
  },
];

// Shipment Data

export type ShipmentStatus =
  | 'In Transit'
  | 'Delivered'
  | 'Pending'
  | 'Cancelled';
type Carrier = 'DHL' | 'FedEx' | 'UPS';

export type Shipment = {
  id: string;
  status: ShipmentStatus;
  date: string;
  carrier: Carrier;
  origin: string;
  destination: string;
  tracking: string;
};

export const shipmentData: Shipment[] = [
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

// Members

export const memberData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    phone: '+1234567890',
    department: 'Management',
    hireDate: '2022-01-15',
    status: 'Active',
    location: 'Head Office',
    salary: 75000,
    performanceRating: 4.5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Member',
    phone: '+1234567891',
    department: 'Sales',
    hireDate: '2021-05-10',
    status: 'Active',
    location: 'Branch Office A',
    salary: 55000,
    performanceRating: 4.0,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: 'Member',
    phone: '+1234567892',
    department: 'Marketing',
    hireDate: '2020-03-22',
    status: 'Active',
    location: 'Branch Office B',
    salary: 60000,
    performanceRating: 3.8,
  },
  {
    id: 4,
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    role: 'Moderator',
    phone: '+1234567893',
    department: 'Customer Support',
    hireDate: '2019-11-05',
    status: 'Active',
    location: 'Head Office',
    salary: 50000,
    performanceRating: 4.2,
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    role: 'Warehouse Manager',
    phone: '+1234567894',
    department: 'Operations',
    hireDate: '2020-08-30',
    status: 'Active',
    location: 'Warehouse',
    salary: 65000,
    performanceRating: 4.1,
  },
  {
    id: 6,
    name: 'Eve Adams',
    email: 'eve.adams@example.com',
    role: 'Product Manager',
    phone: '+1234567895',
    department: 'Product Development',
    hireDate: '2021-04-01',
    status: 'Active',
    location: 'Head Office',
    salary: 70000,
    performanceRating: 4.7,
  },
  {
    id: 7,
    name: 'George Miller',
    email: 'george.miller@example.com',
    role: 'IT Support',
    phone: '+1234567896',
    department: 'IT',
    hireDate: '2022-02-20',
    status: 'Active',
    location: 'Head Office',
    salary: 60000,
    performanceRating: 4.0,
  },
  {
    id: 8,
    name: 'Hannah Green',
    email: 'hannah.green@example.com',
    role: 'Quality Assurance',
    phone: '+1234567897',
    department: 'Quality Control',
    hireDate: '2020-06-15',
    status: 'Active',
    location: 'Warehouse',
    salary: 57000,
    performanceRating: 4.3,
  },
];
