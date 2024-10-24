import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-secondary">
        {/* Placeholder logo design */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">N</span>
        </div>
      </div>
      <span className="font-heading text-2xl font-bold">
        <span className="text-white">Nexus</span>
        <span className="text-secondary">Flow</span>
      </span>
    </Link>
  );
}

export default Logo;
