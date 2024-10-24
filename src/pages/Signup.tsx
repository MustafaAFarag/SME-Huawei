import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SignupForm from '../features/Signup/SignupForm';
import SocialSignup from '../features/Signup/SocialSignup';
import Logo from '../ui/Logo';

// Signup Page
function Signup() {
  return (
    <>
      <motion.div
        className="absolute top-0 z-50 rounded-xl bg-white/10 px-6 py-3 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
      </motion.div>

      <motion.div
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white"
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-md space-y-6 rounded-lg bg-white/10 p-8 shadow-lg backdrop-blur-lg">
          {/* Title */}
          <motion.h1
            className="text-center text-2xl font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Create Account
          </motion.h1>

          {/* Signup Form */}
          <SignupForm />

          <SocialSignup />
          {/* Already have an account */}
          <p className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default Signup;
