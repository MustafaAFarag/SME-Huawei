import { ReactNode } from 'react';
import { FaChartBar, FaTruck, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary p-8 shadow-lg transition duration-300 hover:shadow-xl"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-4xl text-primary">
        {icon}
      </div>
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      <p className="text-center leading-relaxed text-gray-100">{description}</p>
    </motion.div>
  );
}

function OurServices() {
  return (
    <section className="py-20">
      <div className="px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-6xl font-bold text-primary"
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h2>

        {/* 3 Column Layout */}
        <div className="flex flex-wrap justify-between space-x-4">
          <div className="min-w-[600px] max-w-[350px] flex-1">
            <ServiceCard
              icon={<FaChartBar />}
              title="Inventory Optimization"
              description="Optimize your inventory with real-time tracking and data analytics. Predict demand trends, reduce excess stock, and streamline your supply chain."
            />
          </div>
          <div className="min-w-[600px] max-w-[350px] flex-1">
            <ServiceCard
              icon={<FaChartLine />}
              title="Demand Prediction"
              description="Use AI-driven analytics to predict demand patterns, ensuring you have the right products at the right time."
            />
          </div>
          <div className="min-w-[600px] max-w-[350px] flex-1">
            <ServiceCard
              icon={<FaTruck />}
              title="Logistics Management"
              description="Enhance your logistics operations by tracking shipments, optimizing routes, and improving delivery efficiency."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
