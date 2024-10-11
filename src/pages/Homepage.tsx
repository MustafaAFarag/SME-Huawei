import { FaArrowRight, FaChartBar, FaTruck, FaChartLine } from 'react-icons/fa';
import { ReactNode } from 'react';

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
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-text transition-colors hover:text-primary"
              >
                About
              </a>
              <a
                href="#"
                className="text-text transition-colors hover:text-primary"
              >
                Success Stories
              </a>
              <a
                href="#"
                className="text-text transition-colors hover:text-primary"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-text transition-colors hover:text-primary"
              >
                Industries
              </a>
              <a
                href="#"
                className="text-text transition-colors hover:text-primary"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-text transition-colors hover:text-primary"
              >
                Contact Us
              </a>
              <button className="rounded bg-primary px-4 py-2 text-white transition-colors hover:bg-opacity-90">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative h-[80vh]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="./logo.jpg" // Use your GIF or video source here
              alt="AI Supply Chain Management"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Text Overlay */}
          <div className="relative z-10 flex h-full flex-col justify-center bg-black bg-opacity-50 p-6 text-white md:flex-row md:items-center md:justify-start md:p-12">
            <div className="md:w-1/2">
              <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
                Transform Your Supply Chain with AI
              </h1>
              <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                Unlock Efficiency and Growth
              </h2>
              <p className="mb-6 text-lg">
                Discover how our AI-powered solutions can revolutionize your
                supply chain management, optimize your inventory, and predict
                market demand like never before. Join us in shaping the future
                of small and medium-sized enterprises.
              </p>
              <button className="flex items-center rounded-full bg-secondary px-6 py-3 text-white transition-colors hover:bg-opacity-90">
                Start Optimizing <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Youtube Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto flex max-w-[100rem] flex-col items-center px-4">
            <h2 className="mb-6 text-center font-heading text-3xl font-bold">
              Watch Our Overview
            </h2>
            <div className="flex flex-col items-center md:flex-row">
              <iframe
                className="w-full max-w-2xl rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual YouTube video URL
                title="Overview of LogiSmart"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="560"
                height="315"
              ></iframe>
              <div className="mt-4 flex items-center md:ml-6">
                <svg
                  className="mr-2 h-6 w-6 text-gray-500"
                  role="img"
                  viewBox="0 0 53 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use xlinkHref="/sprite.svg#quote-icon"></use>
                </svg>
                <blockquote className="italic text-gray-700">
                  "We will help grow your company with innovative solutions for
                  supply chain and logistics management."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-6">
            <h2 className="mb-8 text-center font-heading text-3xl font-bold">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <FeatureCard
                icon={<FaChartBar size={48} />}
                title="Inventory Optimization"
                description="AI-driven stock management to prevent overstocking and stockouts."
              />
              <FeatureCard
                icon={<FaChartLine size={48} />}
                title="Demand Prediction"
                description="Forecast market demand using advanced AI algorithms."
              />
              <FeatureCard
                icon={<FaTruck size={48} />}
                title="Logistics Management"
                description="Optimize delivery routes and manage supplier relationships efficiently."
              />
            </div>
          </div>
        </section>

        {/* Clients carousel */}
        <section className="text-center">Clients</section>

        {/* Industries We Serve Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {['Retail', 'E-commerce', 'Manufacturing', 'Wholesale'].map(
              (industry) => (
                <div
                  key={industry}
                  className="rounded-lg bg-white p-6 text-center shadow-md"
                >
                  <h3 className="mb-2 font-heading text-xl font-bold">
                    {industry}
                  </h3>
                  <p className="text-text">
                    Tailored solutions for {industry.toLowerCase()} businesses.
                  </p>
                </div>
              ),
            )}
          </div>
        </section>
      </main>

      {/* Copyright */}
      <footer className="bg-text py-8 text-white">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 LogiSmart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// FeatureCard Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-white bg-opacity-10 p-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="mb-2 font-heading text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Homepage;
