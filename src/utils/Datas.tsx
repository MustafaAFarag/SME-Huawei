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
    sku: 'IP14P/256/GRP',
    category: 'Electronics',
    quantity: 50,
    price: 999.99,
    status: 'In Stock',
    reorderPoint: 20,
    lastUpdated: '2024/03/15',
    logisticsDetail: 'Inbound from China · Expected on 2024/03/20',
  },
  {
    id: 'P002',
    name: 'Nike Air Max 2024',
    sku: 'NK/AM24/42/BLK',
    category: 'Fashion',
    quantity: 8,
    price: 179.99,
    status: 'Low Stock',
    reorderPoint: 10,
    lastUpdated: '2024/03/14',
    logisticsDetail: 'Shipped from US warehouse · 2/day shipping available',
  },
  {
    id: 'P003',
    name: 'Samsung 4K Smart TV',
    sku: 'SAM/TV55/4K',
    category: 'Electronics',
    quantity: 0,
    price: 699.99,
    status: 'Out of Stock',
    reorderPoint: 5,
    lastUpdated: '2024/03/13',
    logisticsDetail: 'Pending restock · Estimated delivery: 2024/04/01',
  },
  {
    id: 'P004',
    name: 'Leather Sofa Set',
    sku: 'FRN/SOF/LTH/BRW',
    category: 'Home & Living',
    quantity: 12,
    price: 1299.99,
    status: 'In Stock',
    reorderPoint: 4,
    lastUpdated: '2024/03/15',
    logisticsDetail: 'In local warehouse · Ready for dispatch',
  },
  {
    id: 'P005',
    name: 'Dyson Airwrap Styler',
    sku: 'DSN/AIR/STY',
    category: 'Beauty',
    quantity: 25,
    price: 549.99,
    status: 'In Stock',
    reorderPoint: 10,
    lastUpdated: '2024/02/28',
    logisticsDetail: 'Inbound from EU warehouse · Delivery within 7 days',
  },
  {
    id: 'P006',
    name: 'Adidas Ultraboost Shoes',
    sku: 'ADD/UB20/BLK',
    category: 'Fashion',
    quantity: 5,
    price: 199.99,
    status: 'Low Stock',
    reorderPoint: 5,
    lastUpdated: '2024/03/10',
    logisticsDetail: 'Shipped from central distribution · Next/day shipping',
  },
  {
    id: 'P007',
    name: 'Sony WH/1000XM5 Headphones',
    sku: 'SON/WHXM5/BLK',
    category: 'Electronics',
    quantity: 15,
    price: 299.99,
    status: 'In Stock',
    reorderPoint: 5,
    lastUpdated: '2024/03/11',
    logisticsDetail: 'Inbound from Japan · Expected on 2024/03/21',
  },
  {
    id: 'P008',
    name: 'Instant Pot Duo 7/in/1',
    sku: 'INS/POT/DUO',
    category: 'Home & Living',
    quantity: 18,
    price: 89.99,
    status: 'In Stock',
    reorderPoint: 5,
    lastUpdated: '2024/03/12',
    logisticsDetail: 'Available at regional hub · 3/day delivery',
  },
  {
    id: 'P009',
    name: 'Apple Watch Series 8',
    sku: 'APL/WATCH8/45',
    category: 'Electronics',
    quantity: 30,
    price: 399.99,
    status: 'In Stock',
    reorderPoint: 10,
    lastUpdated: '2024/03/15',
    logisticsDetail: 'Shipped from US warehouse · Express shipping available',
  },
  {
    id: 'P010',
    name: 'Organic Face Cream',
    sku: 'BEAU/FACE/ORG',
    category: 'Beauty',
    quantity: 2,
    price: 29.99,
    status: 'Low Stock',
    reorderPoint: 3,
    lastUpdated: '2024/03/08',
    logisticsDetail: 'Inbound from EU · Estimated delivery: 2024/03/30',
  },
];

// Shipment Data

export type ShipmentStatus =
  | 'In Transit'
  | 'Delivered'
  | 'Pending'
  | 'Cancelled';
export type Carrier = 'DHL' | 'FedEx' | 'UPS';

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
    date: '2024/10/22',
    carrier: 'DHL',
    origin: 'New York, NY',
    destination: 'Los Angeles, CA',
    tracking: 'DHL7364528',
  },
  {
    id: 'SH002',
    status: 'Delivered',
    date: '2024/10/20',
    carrier: 'FedEx',
    origin: 'Chicago, IL',
    destination: 'Miami, FL',
    tracking: 'FDX8472947',
  },
  {
    id: 'SH003',
    status: 'Pending',
    date: '2024/10/25',
    carrier: 'UPS',
    origin: 'Seattle, WA',
    destination: 'Boston, MA',
    tracking: 'UPS9384756',
  },
  {
    id: 'SH004',
    status: 'Cancelled',
    date: '2024/10/18',
    carrier: 'DHL',
    origin: 'Austin, TX',
    destination: 'Denver, CO',
    tracking: 'DHL2938475',
  },
  {
    id: 'SH005',
    status: 'Delivered',
    date: '2024/10/26',
    carrier: 'UPS',
    origin: 'Las Vegas, NV',
    destination: 'Phoenix, AZ',
    tracking: 'USPS1029384',
  },
  {
    id: 'SH006',
    status: 'In Transit',
    date: '2024/10/23',
    carrier: 'DHL',
    origin: 'Houston, TX',
    destination: 'San Francisco, CA',
    tracking: 'DHL5482930',
  },
  {
    id: 'SH007',
    status: 'Delivered',
    date: '2024/10/28',
    carrier: 'FedEx',
    origin: 'Portland, OR',
    destination: 'Salt Lake City, UT',
    tracking: 'FDX3829475',
  },
  {
    id: 'SH008',
    status: 'Delivered',
    date: '2024/10/21',
    carrier: 'UPS',
    origin: 'Atlanta, GA',
    destination: 'Orlando, FL',
    tracking: 'UPS8472930',
  },
  {
    id: 'SH009',
    status: 'Pending',
    date: '2024/10/29',
    carrier: 'DHL',
    origin: 'Dallas, TX',
    destination: 'Charlotte, NC',
    tracking: 'DHL7492038',
  },
  {
    id: 'SH010',
    status: 'In Transit',
    date: '2024/10/24',
    carrier: 'UPS',
    origin: 'San Diego, CA',
    destination: 'Las Vegas, NV',
    tracking: 'USPS3847201',
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
    hireDate: '2022/01/15',
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
    hireDate: '2021/05/10',
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
    hireDate: '2020/03/22',
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
    hireDate: '2019/11/05',
    status: 'Active',
    location: 'Head Office',
    salary: 50000,
    performanceRating: 4.2,
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    role: 'Admin',
    phone: '+1234567894',
    department: 'Operations',
    hireDate: '2020/08/30',
    status: 'Active',
    location: 'Warehouse',
    salary: 65000,
    performanceRating: 4.1,
  },
  {
    id: 6,
    name: 'Eve Adams',
    email: 'eve.adams@example.com',
    role: 'Moderator',
    phone: '+1234567895',
    department: 'Product Development',
    hireDate: '2021/04/01',
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
    hireDate: '2022/02/20',
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
    hireDate: '2020/06/15',
    status: 'Active',
    location: 'Warehouse',
    salary: 57000,
    performanceRating: 4.3,
  },
  // New members
  {
    id: 9,
    name: 'Michael Scott',
    email: 'michael.scott@example.com',
    role: 'Admin',
    phone: '+1234567898',
    department: 'Management',
    hireDate: '2018/09/10',
    status: 'Active',
    location: 'Head Office',
    salary: 80000,
    performanceRating: 4.6,
  },
  {
    id: 10,
    name: 'Pam Beesly',
    email: 'pam.beesly@example.com',
    role: 'Member',
    phone: '+1234567899',
    department: 'Reception',
    hireDate: '2019/06/18',
    status: 'Active',
    location: 'Head Office',
    salary: 45000,
    performanceRating: 4.4,
  },
];

// Customer Data

export const customerData = [
  {
    id: 'C001',
    companyName: 'Nova Solutions',
    email: 'contact@novasolutions.com',
    phone: '123/456/7890',
    status: 'Active',
    address: '123 Elm St, Springfield, IL',
    customerType: 'Retail',
    totalOrders: 25,
    lastOrderDate: '2024/10/15',
    creditLimit: 5000,
  },
  {
    id: 'C002',
    companyName: 'Velocity Ventures',
    email: 'info@velocityventures.com',
    phone: '098/765/4321',
    status: 'Inactive',
    address: '456 Oak St, Metropolis, IL',
    customerType: 'Wholesale',
    totalOrders: 10,
    lastOrderDate: '2024/09/20',
    creditLimit: 10000,
  },
  {
    id: 'C003',
    companyName: 'Blue Horizon Logistics',
    email: 'support@bluehorizonlogistics.com',
    phone: '555/123/4567',
    status: 'Active',
    address: '789 Pine St, Gotham, NY',
    customerType: 'Distributor',
    totalOrders: 15,
    lastOrderDate: '2024/11/01',
    creditLimit: 3000,
  },
  {
    id: 'C004',
    companyName: 'Apex Distributors',
    email: 'contact@apexdistributors.com',
    phone: '444/555/6666',
    status: 'Pending',
    address: '321 Maple St, Star City, CA',
    customerType: 'Retail',
    totalOrders: 5,
    lastOrderDate: '2024/10/30',
    creditLimit: 1500,
  },
  {
    id: 'C005',
    companyName: 'Prime Pathway Inc.',
    email: 'sales@primepathway.com',
    phone: '222/333/4444',
    status: 'Active',
    address: '654 Birch St, Metropolis, IL',
    customerType: 'Retail',
    totalOrders: 12,
    lastOrderDate: '2024/10/10',
    creditLimit: 7500,
  },
  {
    id: 'C006',
    companyName: 'Evergreen Traders',
    email: 'info@evergreentraders.com',
    phone: '777/888/9999',
    status: 'Inactive',
    address: '987 Cedar St, Star City, CA',
    customerType: 'Wholesale',
    totalOrders: 8,
    lastOrderDate: '2024/09/25',
    creditLimit: 6000,
  },
  {
    id: 'C007',
    companyName: 'Fusion Dynamics',
    email: 'support@fusiondynamics.com',
    phone: '111/222/3333',
    status: 'Active',
    address: '234 Elm St, Gotham, NY',
    customerType: 'Distributor',
    totalOrders: 20,
    lastOrderDate: '2024/10/20',
    creditLimit: 9000,
  },
  {
    id: 'C008',
    companyName: 'Global Reach Solutions',
    email: 'contact@globalreach.com',
    phone: '888/777/6666',
    status: 'Pending',
    address: '135 Willow St, Springfield, IL',
    customerType: 'Retail',
    totalOrders: 3,
    lastOrderDate: '2024/11/02',
    creditLimit: 1200,
  },
  {
    id: 'C009',
    companyName: 'Quantum Retail Group',
    email: 'sales@quantumretail.com',
    phone: '555/666/7777',
    status: 'Active',
    address: '456 Pine St, Metropolis, IL',
    customerType: 'Wholesale',
    totalOrders: 18,
    lastOrderDate: '2024/10/12',
    creditLimit: 8500,
  },
  {
    id: 'C010',
    companyName: 'Summit Supplies Co.',
    email: 'support@summitsupplies.com',
    phone: '999/888/7777',
    status: 'Inactive',
    address: '321 Oak St, Gotham, NY',
    customerType: 'Distributor',
    totalOrders: 6,
    lastOrderDate: '2024/09/15',
    creditLimit: 3000,
  },
];

// Documents Page

export const documentData = [
  {
    id: 'D001',
    name: 'Invoice #12345',
    type: 'Invoice',
    associatedCompany: 'Nova Solutions',
    uploadDate: '2024/10/01',
    expirationDate: null,
    status: 'Signed',
    uploadedBy: 'Admin',
    fileFormat: 'PDF',
    fileSize: '2 MB',
    tags: ['invoice', 'finance', 'Q4'],
    downloadLink: '/documents/invoice12345.pdf',
    notes: 'Monthly invoice for Q4 2024',
  },
  {
    id: 'D002',
    name: 'Purchase Order #7890',
    type: 'Purchase Order',
    associatedCompany: 'Apex Distributors',
    uploadDate: '2024/10/05',
    expirationDate: null,
    status: 'Pending',
    uploadedBy: 'John Doe',
    fileFormat: 'PDF',
    fileSize: '1.5 MB',
    tags: ['purchase order', 'procurement'],
    downloadLink: '/documents/po7890.pdf',
    notes: 'First PO for new supply chain partner',
  },
  {
    id: 'D003',
    name: 'Shipping Manifest #45678',
    type: 'Shipping Manifest',
    associatedCompany: 'Global Reach Solutions',
    uploadDate: '2024/10/12',
    expirationDate: null,
    status: 'Pending',
    uploadedBy: 'Sophia Miller',
    fileFormat: 'DOCX',
    fileSize: '500 KB',
    tags: ['shipping', 'logistics'],
    downloadLink: '/documents/shipping45678.docx',
    notes: 'Includes fragile items / handle with care',
  },
  {
    id: 'D004',
    name: 'Customs Declaration #3345',
    type: 'Customs Declaration',
    associatedCompany: 'Quantum Retail Group',
    uploadDate: '2024/10/15',
    expirationDate: '2025/10/15',
    status: 'Signed',
    uploadedBy: 'Admin',
    fileFormat: 'PDF',
    fileSize: '1 MB',
    tags: ['customs', 'compliance'],
    downloadLink: '/documents/customs3345.pdf',
    notes: 'Approved by customs on 2024/10/15',
  },
  {
    id: 'D005',
    name: 'Safety Certificate #9988',
    type: 'Safety Certificate',
    associatedCompany: 'Summit Supplies Co.',
    uploadDate: '2024/10/20',
    expirationDate: '2026/10/20',
    status: 'Signed',
    uploadedBy: 'Emily Davis',
    fileFormat: 'PDF',
    fileSize: '3 MB',
    tags: ['safety', 'certification'],
    downloadLink: '/documents/safety9988.pdf',
    notes: 'Mandatory for all chemical shipments',
  },
  {
    id: 'D006',
    name: 'Inspection Report #5566',
    type: 'Inspection Report',
    associatedCompany: 'Prime Pathway Inc.',
    uploadDate: '2024/10/25',
    expirationDate: '2025/10/25',
    status: 'Cancelled',
    uploadedBy: 'David Wilson',
    fileFormat: 'DOCX',
    fileSize: '800 KB',
    tags: ['inspection', 'quality control'],
    downloadLink: '/documents/inspection5566.docx',
    notes: 'Initial inspection report for new warehouse site',
  },
  {
    id: 'D007',
    name: 'Return Authorization #3421',
    type: 'Return Authorization',
    associatedCompany: 'Fusion Dynamics',
    uploadDate: '2024/10/27',
    expirationDate: null,
    status: 'Signed',
    uploadedBy: 'Liam Martinez',
    fileFormat: 'PDF',
    fileSize: '1.2 MB',
    tags: ['returns', 'authorization'],
    downloadLink: '/documents/return3421.pdf',
    notes: 'Authorization for return of defective goods',
  },
  {
    id: 'D008',
    name: 'Insurance Policy #7120',
    type: 'Insurance Policy',
    associatedCompany: 'Evergreen Traders',
    uploadDate: '2024/10/30',
    expirationDate: '2025/10/30',
    status: 'Signed',
    uploadedBy: 'Alice Johnson',
    fileFormat: 'PDF',
    fileSize: '2.5 MB',
    tags: ['insurance', 'policy'],
    downloadLink: '/documents/insurance7120.pdf',
    notes: 'Covers all shipments for 2024',
  },
  {
    id: 'D009',
    name: 'Contract Agreement #8750',
    type: 'Contract Agreement',
    associatedCompany: 'Blue Horizon Logistics',
    uploadDate: '2024/11/01',
    expirationDate: '2027/11/01',
    status: 'Signed',
    uploadedBy: 'James Taylor',
    fileFormat: 'PDF',
    fileSize: '3.5 MB',
    tags: ['contract', 'agreement'],
    downloadLink: '/documents/contract8750.pdf',
    notes: 'Three/year agreement with shipping provider',
  },
  {
    id: 'D010',
    name: 'Certificate of Origin #5001',
    type: 'Certificate of Origin',
    associatedCompany: 'Anderson Supplies',
    uploadDate: '2024/11/03',
    expirationDate: null,
    status: 'Pending',
    uploadedBy: 'Olivia Anderson',
    fileFormat: 'PDF',
    fileSize: '1 MB',
    tags: ['origin', 'compliance'],
    downloadLink: '/documents/origin5001.pdf',
    notes: 'Required for international shipping',
  },
];

// INVOICES

export const invoiceData = [
  {
    id: 'INV001',
    customer: 'Tech Solutions Inc.',
    amount: '$500.00',
    date: '2024/10/22',
    status: 'Paid',
    dueDate: '2024/11/22',
    currency: 'USD',
    paymentMethod: 'Credit Card',
    items: [
      { description: 'Product A', quantity: 2, unitPrice: '$100.00' },
      { description: 'Service B', quantity: 1, unitPrice: '$300.00' },
    ],
    notes: 'Thank you for your purchase!',
  },
  {
    id: 'INV002',
    customer: 'Green Energy Solutions',
    amount: '$250.00',
    date: '2024/10/20',
    status: 'Unpaid',
    dueDate: '2024/11/20',
    currency: 'USD',
    paymentMethod: 'Bank Transfer',
    items: [{ description: 'Product C', quantity: 1, unitPrice: '$250.00' }],
    notes: 'Please pay within 30 days.',
  },
  {
    id: 'INV003',
    customer: 'NextGen Innovations',
    amount: '$1,200.00',
    date: '2024/10/18',
    status: 'Partially Paid',
    dueDate: '2024/11/18',
    currency: 'USD',
    paymentMethod: 'PayPal',
    items: [
      {
        description: 'Consulting Services',
        quantity: 10,
        unitPrice: '$120.00',
      },
    ],
    notes: 'First installment paid.',
  },
  {
    id: 'INV004',
    customer: 'World Wide Logistics',
    amount: '$3,450.00',
    date: '2024/10/25',
    status: 'Overdue',
    dueDate: '2024/10/24',
    currency: 'USD',
    paymentMethod: 'Wire Transfer',
    items: [
      { description: 'Bulk Materials', quantity: 50, unitPrice: '$69.00' },
    ],
    notes: 'Late fee applies after 7 days.',
  },
  {
    id: 'INV005',
    customer: 'Quick Logistics',
    amount: '$750.00',
    date: '2024/10/30',
    status: 'Paid',
    dueDate: '2024/11/30',
    currency: 'USD',
    paymentMethod: 'Credit Card',
    items: [
      { description: 'Shipping Services', quantity: 1, unitPrice: '$750.00' },
    ],
    notes: 'Shipped on time.',
  },
  {
    id: 'INV006',
    customer: 'Retail Networks',
    amount: '$1,050.00',
    date: '2024/10/29',
    status: 'Unpaid',
    dueDate: '2024/11/29',
    currency: 'USD',
    paymentMethod: 'Check',
    items: [
      { description: 'Retail Services', quantity: 2, unitPrice: '$525.00' },
    ],
    notes: 'Payment pending.',
  },
  {
    id: 'INV007',
    customer: 'Ocean Freight',
    amount: '$4,200.00',
    date: '2024/10/28',
    status: 'Partially Paid',
    dueDate: '2024/11/28',
    currency: 'USD',
    paymentMethod: 'Credit Card',
    items: [
      { description: 'Freight Charges', quantity: 1, unitPrice: '$4,200.00' },
    ],
    notes: 'Awaiting final payment.',
  },
  {
    id: 'INV008',
    customer: 'Tech Innovations',
    amount: '$2,600.00',
    date: '2024/10/27',
    status: 'Paid',
    dueDate: '2024/11/27',
    currency: 'USD',
    paymentMethod: 'PayPal',
    items: [
      { description: 'Software Licensing', quantity: 4, unitPrice: '$650.00' },
    ],
    notes: 'Subscription renewed.',
  },
  {
    id: 'INV009',
    customer: 'Apex Distributors',
    amount: '$950.00',
    date: '2024/10/26',
    status: 'Overdue',
    dueDate: '2024/10/25',
    currency: 'USD',
    paymentMethod: 'Bank Transfer',
    items: [
      {
        description: 'Distribution Services',
        quantity: 1,
        unitPrice: '$950.00',
      },
    ],
    notes: 'Overdue, late fee added.',
  },
  {
    id: 'INV010',
    customer: 'Global Partners',
    amount: '$1,800.00',
    date: '2024/10/31',
    status: 'Unpaid',
    dueDate: '2024/11/30',
    currency: 'USD',
    paymentMethod: 'Wire Transfer',
    items: [
      { description: 'Consulting Package', quantity: 3, unitPrice: '$600.00' },
    ],
    notes: 'Pending approval.',
  },
];
