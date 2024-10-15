import { ReactNode } from 'react';
import { FaChartBar, FaTruck, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  isEven: boolean;
};

function FeatureCard({ icon, title, description, isEven }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-start justify-center rounded-lg bg-gradient-to-br from-primary to-secondary p-8 shadow-lg transition duration-300 hover:shadow-xl ${
        isEven ? 'md:items-end' : ''
      }`}
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-4xl text-primary">
        {icon}
      </div>
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      <p className="leading-relaxed text-gray-100">{description}</p>
    </motion.div>
  );
}

function KeyFeatures() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-4xl font-bold text-primary"
        >
          Key Features
        </motion.h2>

        {/* Feature 1 */}
        <div className="mb-24 flex flex-col items-center md:flex-row">
          <div className="md:w-1/2 md:pr-12">
            <FeatureCard
              icon={<FaChartBar />}
              title="Inventory Optimization"
              description="Optimize your inventory management by leveraging real-time tracking and data analytics. Our platform helps you reduce excess stock and avoid stockouts by predicting demand trends. With detailed reports and insights, you can streamline your supply chain and ensure efficient storage utilization."
              isEven={false}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 md:mt-0 md:w-1/2"
          >
            <img
              src="./logo.jpg"
              alt="Inventory Optimization"
              className="h-[28rem] w-full rounded-lg object-cover shadow-md transition duration-300 hover:shadow-xl"
            />
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="mb-24 flex flex-col items-center md:flex-row-reverse">
          <div className="md:w-1/2 md:pl-12">
            <FeatureCard
              icon={<FaChartLine />}
              title="Demand Prediction"
              description="Utilize advanced AI-driven analytics to accurately predict demand patterns for your products. Our system analyzes historical data, market trends, and customer behavior to help you forecast inventory needs, ensuring you always have the right products available at the right time."
              isEven={true}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 md:mt-0 md:w-1/2"
          >
            <img
              src="./logo.jpg"
              alt="Demand Prediction"
              className="h-[28rem] w-full rounded-lg object-cover shadow-md transition duration-300 hover:shadow-xl"
            />
          </motion.div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:w-1/2 md:pr-12">
            <FeatureCard
              icon={<FaTruck />}
              title="Logistics Management"
              description="Streamline your logistics operations with our comprehensive management tools. Track shipments in real time, analyze transportation costs, and optimize routes to enhance delivery efficiency. Our platform offers detailed visibility into your supply chain, empowering you to make informed decisions and improve customer satisfaction."
              isEven={false}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 md:mt-0 md:w-1/2"
          >
            <img
              src="./logo.jpg"
              alt="Logistics Management"
              className="h-[28rem] w-full rounded-lg object-cover shadow-md transition duration-300 hover:shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
