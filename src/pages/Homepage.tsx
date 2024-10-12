import { ReactNode } from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaArrowRight,
  FaChartBar,
  FaTruck,
  FaChartLine,
  FaIndustry,
  FaShoppingCart,
  FaWarehouse,
  FaStore,
} from 'react-icons/fa';

type NavItemProps = {
  href: string;
  text: string;
};

function NavItem({ href, text }: NavItemProps) {
  return (
    <a href={href} className="text-text transition-colors hover:text-primary">
      {text}
    </a>
  );
}

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4 flex">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

type StepCardProps = {
  number: number;
  title: string;
  description: string;
};

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="mb-8 text-center md:mb-0">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

type IndustryCardProps = {
  icon: ReactNode;
  name: string;
};

function IndustryCard({ icon, name }: IndustryCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 text-center shadow-md">
      <div className="mx-auto mb-4 flex items-center justify-center text-4xl text-primary">
        {icon}
      </div>
      <h3 className="font-bold">{name}</h3>
    </div>
  );
}

type BrandProps = {
  name: string;
  logo: string;
};

function Brand({ name, logo }: BrandProps) {
  return (
    <div className="mx-4 flex items-center justify-center">
      <img src={logo} alt={name} className="h-20 w-auto object-contain" />
    </div>
  );
}

function BrandsCarousel() {
  const brands: BrandProps[] = [
    { name: 'Brand 1', logo: '/logo-removebg.png' },
    { name: 'Brand 2', logo: '/logo-removebg.png' },
    { name: 'Brand 3', logo: '/logo-removebg.png' },
    { name: 'Brand 4', logo: '/logo-removebg.png' },
    { name: 'Brand 5', logo: '/logo-removebg.png' },
    { name: 'Brand 5', logo: '/logo-removebg.png' },
    { name: 'Brand 5', logo: '/logo-removebg.png' },
    { name: 'Brand 5', logo: '/logo-removebg.png' },
    { name: 'Brand 5', logo: '/logo-removebg.png' },
    { name: 'Brand 5', logo: '/logo-removebg.png' },
    { name: 'Brand 5', logo: '/logo-removebg.png' },
    { name: 'Brand 5', logo: '/logo-removebg.png' },
    { name: 'Brand 5', logo: '/logo-removebg.png' },
    { name: 'Brand 5', logo: '/logo-removebg.png' },
  ];

  return (
    <div className="py-10">
      <Marquee gradient={false} speed={200}>
        {brands.map((brand, index) => (
          <Brand key={index} {...brand} />
        ))}
      </Marquee>
    </div>
  );
}

function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading text-2xl font-bold text-primary">
              LogiSmart
            </div>
            <div className="hidden items-center space-x-6 md:flex">
              <NavItem href="#" text="About" />
              <NavItem href="#" text="Success Stories" />
              <NavItem href="#" text="Solutions" />
              <NavItem href="#" text="Industries" />
              <NavItem href="#" text="Pricing" />
              <NavItem href="#" text="Contact Us" />
              <button className="rounded bg-primary px-4 py-2 text-white transition-colors hover:bg-opacity-90">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              {/* Add a mobile menu button here */}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="./logo-light.png"
            alt="AI Supply Chain Management"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-center bg-black bg-opacity-50 p-6 text-white md:flex-row md:items-center md:justify-start md:p-12">
          <div className="md:w-1/2">
            <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
              Transform Your Supply Chain with AI
            </h1>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Unlock Efficiency and Growth for SMEs
            </h2>
            <p className="mb-6 text-lg">
              Discover how our AI-powered solutions can revolutionize your
              supply chain management, optimize your inventory, and predict
              market demand like never before.
            </p>
            <button className="flex items-center rounded-full bg-white px-6 py-3 text-primary transition-colors hover:bg-opacity-90">
              Start Optimizing <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Video and Quote Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto flex max-w-[100rem] flex-col items-center px-4 md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <iframe
              className="w-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/zqVxB7YFz6w?si=k6aLjqMv23Zswihs"
              title="Overview of LogiSmart"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8">
            <div className="flex flex-col">
              <img src="./quote.png" className="w-12 -translate-y-10" />
              <blockquote className="italic text-gray-700">
                "Our goal is to empower SMEs by providing cutting-edge,
                AI-driven solutions that simplify and optimize supply chain and
                logistics management. We are here to help you unlock hidden
                efficiencies and drive growth in a competitive market."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Trusted by Leading Brands
          </h2>
          <BrandsCarousel />
        </div>
      </section>

      {/* Key Features Section (Z-pattern) */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>

          {/* Feature 1 */}
          <div className="mb-16 flex flex-col items-center md:flex-row">
            <div className="md:w-1/2 md:pr-8">
              <FeatureCard
                icon={<FaChartBar className="text-4xl text-primary" />}
                title="Inventory Optimization"
                description="Leverage AI to ensure that your stock levels are always optimal. Our system automatically adjusts based on real-time sales data, preventing both stockouts and overstock situations, while minimizing storage costs."
              />
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <img
                src="./logo.jpg"
                alt="Inventory Optimization"
                className="h-[28rem] w-[40rem] rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mb-16 flex flex-col items-center md:flex-row-reverse">
            <div className="md:w-1/2">
              <FeatureCard
                icon={<FaChartLine className="text-4xl text-primary" />}
                title="Demand Prediction"
                description="By analyzing past trends and external factors, our advanced AI algorithms predict future demand with high accuracy. This allows businesses to prepare better for seasonal changes, promotions, and unexpected market fluctuations."
              />
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <img
                src="./logo.jpg"
                alt="Demand Prediction"
                className="ml-auto mr-10 h-[28rem] w-[40rem] rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:w-1/2 md:pr-8">
              <FeatureCard
                icon={<FaTruck className="text-4xl text-primary" />}
                title="Logistics Management"
                description="Take control of your logistics with our AI-powered management system. From optimizing delivery routes to real-time shipment tracking, our solution reduces costs, enhances efficiency, and provides a seamless experience."
              />
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <img
                src="./logo.jpg"
                alt="Logistics Management"
                className="h-[28rem] w-[40rem] rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-10">
            <StepCard
              number={1}
              title="Connect Your Data"
              description="Easily integrate your existing systems, such as your ERP, inventory management, or sales systems, with our platform. The process is seamless and requires minimal technical expertise, allowing you to get started quickly."
            />
            <StepCard
              number={2}
              title="AI Analysis"
              description="Once your data is connected, our AI goes to work, analyzing everything from historical sales data to market trends. Our algorithms are designed to uncover patterns, inefficiencies, and opportunities you might have overlooked."
            />
            <StepCard
              number={3}
              title="Optimize Operations"
              description="After the analysis, our platform provides actionable insights, allowing you to make data-driven decisions. Whether it’s optimizing your stock levels, planning deliveries, or adjusting marketing strategies, we help automate key operations for maximum efficiency."
            />
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <IndustryCard icon={<FaStore />} name="Retail" />
            <IndustryCard icon={<FaShoppingCart />} name="E-commerce" />
            <IndustryCard icon={<FaIndustry />} name="Manufacturing" />
            <IndustryCard icon={<FaWarehouse />} name="Wholesale" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="mb-8">
            Join thousands of SMEs already benefiting from our AI-powered
            solutions.
          </p>
          <button className="rounded-full bg-white px-8 py-3 font-bold text-primary transition-colors hover:bg-opacity-90">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-10 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">LogiSmart</h3>
              <p>Empowering SMEs with AI-driven supply chain solutions</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                About
              </a>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <p className="text-center">
            &copy; 2024 LogiSmart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
