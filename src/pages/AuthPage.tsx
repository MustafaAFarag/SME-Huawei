import { useState } from 'react';
import { motion } from 'framer-motion';
import Signup from './Signup';
import Login from './Login';

function AuthPage() {
  const [isSignup, setIsSignup] = useState<boolean>(true);

  function toggleSignup() {
    setIsSignup(!isSignup);
  }

  return (
    <motion.div transition={{ duration: 0.5 }}>
      {isSignup ? (
        <Signup toggleSignup={toggleSignup} />
      ) : (
        <Login toggleSignup={toggleSignup} />
      )}
    </motion.div>
  );
}

export default AuthPage;
