import { Link } from 'react-router-dom';

type LogoProps = {
  className?: string;
  headerClassName?: string;
};

function Logo({ className, headerClassName }: LogoProps) {
  return (
    <Link to="/">
      <div className={`flex font-heading text-3xl font-bold ${className}`}>
        <img src="./logo-removebg.png" className="h-12 w-12" />
        <h2 className={`translate-y-1 text-secondary ${headerClassName}`}>
          LogiSmart
        </h2>
      </div>
    </Link>
  );
}

export default Logo;
