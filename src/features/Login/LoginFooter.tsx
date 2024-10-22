// components/LoginFooter.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LoginFooter() {
  return (
    <>
      {/* Forgot Password Link */}
      <motion.p className="m-6 text-center text-white">
        Forgot your password?{' '}
        <span className="cursor-pointer text-secondary underline">
          Reset it
        </span>
      </motion.p>

      {/* Already have an account? */}
      <motion.p className="text-center text-white">
        Don't have an account?{' '}
        <Link to="/signup" className="text-secondary underline">
          Sign up
        </Link>
      </motion.p>
    </>
  );
}

export default LoginFooter;
