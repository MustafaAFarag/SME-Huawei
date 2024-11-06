import { HiCheckCircle } from 'react-icons/hi';

function PricingPlans() {
  const plans = [
    {
      name: 'Basic',
      price: '49.99',
      features: [
        'Basic inventory management',
        'Demand forecasting',
        '100 GB storage',
        'Email support',
        'Standard analytics dashboard',
        'Access to essential integrations (e.g., ERP, CRM)',
        'Order tracking',
        'Low stock alerts',
      ],
      borderColor: 'border-gray-200',
      recommended: false,
    },
    {
      name: 'Pro',
      price: '200',
      features: [
        'All Basic features',
        '300 GB storage',
        'Priority email and chat support',
        'Advanced analytics and custom reporting',
        'Customizable dashboards',
        'Access to premium integrations (e.g., logistics platforms)',
        'Inventory optimization tools',
        'Predictive stock replenishment',
        'Multiple warehouse management',
      ],
      borderColor: 'border-blue-500',
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Pro features',
        '500 GB storage',
        '24/7 dedicated support',
        'API access and custom webhooks',
        'Dedicated account manager',
        'Custom integration with proprietary systems',
        'Supply chain consulting services',

        'Automated supply chain workflows',
        'End-to-end visibility across supply chain networks',
      ],
      borderColor: 'border-gray-200',
      recommended: false,
    },
  ];

  return (
    <section className="bg-blue-100 px-4 py-16" id="pricing">
      <div className="container mx-auto max-w-[100rem]">
        <h2 className="mb-16 text-center text-6xl font-bold text-primary">
          Our <span className="text-blue-600">Pricing Plans</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border-2 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl ${plan.borderColor} ${
                plan.recommended
                  ? 'bg-white ring-4 ring-blue-500/20'
                  : 'bg-white'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
                  Most Popular
                </div>
              )}

              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                {plan.name}
              </h3>

              <p className="mb-6 text-5xl font-extrabold text-blue-600">
                {plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
                <span className="text-lg font-normal text-gray-500">
                  {plan.price !== 'Custom' && '/month'}
                </span>
              </p>

              <ul className="mb-8 flex-grow space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <HiCheckCircle className="mr-3 text-blue-500" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full rounded-lg py-3 font-semibold transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-primary to-secondary text-lg text-white hover:shadow-lg hover:ring-4 hover:ring-cyan-500 hover:ring-opacity-50 hover:ring-offset-4'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
