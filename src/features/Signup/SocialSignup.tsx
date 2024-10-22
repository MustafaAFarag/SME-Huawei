import { FaGoogle, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

function SocialSignup() {
  return (
    <>
      <motion.p className="mt-8 flex items-center justify-center text-center text-white">
        <span className="flex-grow border-t border-white"></span>
        <span className="mx-4">Or Register with</span>
        <span className="flex-grow border-t border-white"></span>
      </motion.p>

      <motion.div className="mt-4 flex items-center gap-4">
        <button className="flex w-1/2 items-center justify-center gap-2 rounded-lg border p-2 text-white">
          <FaGoogle className="text-xl" /> Google
        </button>
        <button className="flex w-1/2 items-center justify-center gap-2 rounded-lg border p-2 text-white">
          <FaApple className="text-xl" /> Apple
        </button>
      </motion.div>
    </>
  );
}

export default SocialSignup;
