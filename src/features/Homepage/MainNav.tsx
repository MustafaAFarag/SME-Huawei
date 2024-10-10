import { Link } from 'react-router-dom';

function MainNav() {
  return (
    <nav>
      <ul className="flex gap-16 font-semibold text-primary">
        <li>
          <Link
            to="/"
            className="transition-all duration-300 hover:text-background-text"
          >
            How It Works
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition-all duration-300 hover:text-background-text"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition-all duration-300 hover:text-background-text"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="transition-all duration-300 hover:text-background-text"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
