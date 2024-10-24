import { ReactNode } from 'react';
import { FaChartBar, FaTruck, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
};

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative m-4 flex h-full w-full flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-4xl text-primary transition-all duration-300 group-hover:shadow-lg"
      >
        {icon}
      </motion.div>
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      <p className="text-center leading-relaxed text-gray-100">{description}</p>
    </motion.div>
  );
}

function OurServices() {
  const services = [
    {
      icon: <FaChartBar />,
      title: 'Inventory Optimization',
      description:
        'Transform your inventory management with AI-powered analytics. Get real-time insights, predict demand patterns, and maintain optimal stock levels to maximize profitability.',
    },
    {
      icon: <FaChartLine />,
      title: 'Smart Demand Forecasting',
      description:
        'Leverage advanced machine learning algorithms to accurately predict market demands. Make data-driven decisions and stay ahead of market trends with precision.',
    },
    {
      icon: <FaTruck />,
      title: 'Intelligent Logistics',
      description:
        'Revolutionize your logistics operations with smart route optimization, real-time tracking, and automated delivery management for maximum efficiency.',
    },
  ];

  return (
    <section className="overflow-hidden py-20">
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-6xl font-bold text-primary">
            Our <span className="text-blue-600">Services</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-[calc(33.333%-2rem)]">
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
