import { Link } from 'react-router-dom';

function MainNav() {
  return (
    <nav>
      <ul className="text-primary flex gap-16 font-semibold">
        <li>
          <Link to="/">How It Works</Link>
        </li>
        <li>
          <Link to="/">Testimonials</Link>
        </li>
        <li>
          <Link to="/">Pricing</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
