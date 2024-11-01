import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Logo from '../../ui/Logo';
import Button from '../../ui/Button';

type NavItemProps = {
  href: string;
  text: string;
  isActive?: boolean;
};

function NavItem({ href, text, isActive }: NavItemProps) {
  return (
    <a
      href={href}
      className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-white'} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full`}
    >
      {text}
    </a>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#test', text: 'About' },
    { href: '#', text: 'Success Stories' },
    { href: '#', text: 'Solutions' },
    { href: '#', text: 'Industries' },
    { href: '#', text: 'Pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Center: Navigation Items */}
          <div className="hidden flex-grow justify-center md:flex">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <NavItem key={item.text} {...item} />
              ))}
            </div>
          </div>

          {/* Right: Get Started Button & Mobile Menu */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link to="/signup">
                <Button label="Contact Us" />
              </Link>
            </div>

            <button
              className="ml-4 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <IoClose className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.text} className="block">
                  <NavItem {...item} />
                </div>
              ))}
              <div className="pt-4">
                <Link to="/signup" className="block">
                  <Button
                    label="Contact Us"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
