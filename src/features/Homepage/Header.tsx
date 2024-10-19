import { FaBars } from 'react-icons/fa';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo';

type NavItemProps = {
  href: string;
  text: string;
};

function NavItem({ href, text }: NavItemProps) {
  return (
    <a
      href={href}
      className="text-white transition-colors hover:text-secondary"
    >
      {text}
    </a>
  );
}

function Header() {
  return (
    <header className="bg-primary shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Nav Items for larger screens */}
          <div className="hidden items-center space-x-6 md:flex">
            <NavItem href="#" text="About" />
            <NavItem href="#" text="Success Stories" />
            <NavItem href="#" text="Solutions" />
            <NavItem href="#" text="Industries" />
            <NavItem href="#" text="Pricing" />
            <NavItem href="#" text="Contact Us" />
            <Link to="/dashboard">
              <Button label="Get Started" />
            </Link>
          </div>

          {/* Mobile Menu (Hamburger) */}
          <div className="md:hidden">
            <button className="text-white">
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
