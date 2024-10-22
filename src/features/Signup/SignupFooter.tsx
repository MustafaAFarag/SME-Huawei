import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function SignupFooter() {
  return (
    <motion.p className="text-center text-white">
      Already have an account?
      <Link to="/signup" className="text-secondary underline">
        Log in
      </Link>
    </motion.p>
  );
}

export default SignupFooter;
