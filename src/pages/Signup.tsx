// pages/Signup.tsx
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import SignupHeader from '../features/Signup/SignupHeader';
import SignupForm from '../features/Signup/SignupForm';
import SocialSignup from '../features/Signup/SocialSignup';

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function Signup() {
  const [isChecked, setIsChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle signup logic (e.g., call Supabase signup API)
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // Define animation variants for form elements
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <>
      <SignupHeader />

      {/* Background gradient */}
      <motion.div
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="flex w-full max-w-7xl overflow-hidden rounded-xl bg-primary shadow-2xl">
          {/* Left side: Image */}
          <motion.img
            className="w-1/2 bg-cover bg-center"
            src="./logo.jpg"
            alt="Brand Logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Right side: Form */}
          <motion.div className="w-1/2 p-12">
            <motion.h2
              className="mb-8 text-center text-4xl font-bold text-secondary"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
            >
              Create an Account
            </motion.h2>

            <SignupForm
              onSubmit={handleSubmit(onSubmit)} // Correctly pass the wrapped function
              errors={errors}
              register={register}
              isChecked={isChecked}
              handleCheckboxChange={handleCheckboxChange}
            />

            {/* Move SocialSignup inside the main form area */}
            <SocialSignup />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Signup;
