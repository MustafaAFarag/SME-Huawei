import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog'] },
    {
      title: 'Solutions',
      links: [
        'Inventory Management',
        'Demand Forecasting',
        'Logistics Optimization',
        'Supply Chain Analytics',
      ],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Tutorials', 'Case Studies', 'FAQs'],
    },
    {
      title: 'Legal',
      links: [
        'Terms of Service',
        'Privacy Policy',
        'Cookie Policy',
        'GDPR Compliance',
      ],
    },
  ];

  const socialIcons = [
    { Icon: FaFacebookF, href: '#' },
    { Icon: FaTwitter, href: '#' },
    { Icon: FaLinkedinIn, href: '#' },
    { Icon: FaInstagram, href: '#' },
  ];

  return (
    <footer className="bg-primary py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col">
            <h3 className="flex-grow text-3xl font-bold">LogiSmart</h3>
            <div className="mt-6 flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-white transition-colors duration-300 hover:text-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="mb-4 font-semibold">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-white transition-colors duration-300 hover:text-secondary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
          <p className="text-sm text-white">
            © {currentYear} LogiSmart. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-white transition-colors duration-300 hover:text-secondary"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-white transition-colors duration-300 hover:text-secondary"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
