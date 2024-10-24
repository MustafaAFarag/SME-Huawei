import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LoginForm from '../features/Login/LoginForm';
import SocialLogin from '../features/Login/SocialLogin';
import Logo from '../ui/Logo';

function Login() {
  return (
    <>
      <motion.div
        className="absolute left-1/2 top-20 z-50 rounded-xl bg-white/10 px-6 py-3 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
      </motion.div>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
        <motion.div
          className="flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full max-w-md space-y-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <div className="text-center">
              <motion.h2
                className="text-3xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Welcome Back
              </motion.h2>
              <motion.p
                className="mt-2 text-sm text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Please enter your details to sign in
              </motion.p>
            </div>

            <LoginForm />
            <SocialLogin />

            <motion.p
              className="text-center text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-blue-400 hover:text-blue-300 hover:underline"
              >
                Sign up for free
              </Link>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
