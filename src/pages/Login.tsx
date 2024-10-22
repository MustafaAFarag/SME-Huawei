// pages/Login.tsx
import { motion } from 'framer-motion';
import LoginForm from '../features/Login/LoginForm';
import LoginFooter from '../features/Login/LoginFooter';
import SocialLogin from '../features/Login/SocialLogin';
import LoginHeader from '../features/Login/LoginHeader';

const Login = () => {
  return (
    <>
      <LoginHeader />

      {/* Background gradient */}
      <motion.div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
        <div className="flex w-full max-w-7xl overflow-hidden rounded-xl bg-primary shadow-2xl">
          {/* Left side: Form */}
          <motion.div className="w-1/2 p-12">
            <motion.h2
              className="mb-8 text-center text-4xl font-bold text-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' },
              }}
            >
              Welcome Back
            </motion.h2>

            <LoginForm />
            <LoginFooter />
            <SocialLogin />
          </motion.div>

          {/* Right side: Image */}
          <motion.img
            className="w-1/2 bg-cover bg-center"
            src="./logo.jpg"
            alt="Brand Logo"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Login;
