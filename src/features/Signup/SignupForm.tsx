import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
};

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const password = watch('password');
  const agreeToTerms = watch('agreeToTerms'); // Watch the agreeToTerms checkbox

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Full Name */}
      <motion.div>
        <label className="mb-2 block text-sm font-medium text-gray-200">
          Full Name
        </label>
        <input
          {...register('fullName', { required: 'Full name is required' })}
          type="text"
          className="w-full rounded-lg border border-gray-300 bg-white/10 p-3 text-white backdrop-blur-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          placeholder="John Doe"
        />
        {errors.fullName && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-sm text-red-400"
          >
            {errors.fullName.message}
          </motion.p>
        )}
      </motion.div>

      {/* Email */}
      <motion.div>
        <label className="mb-2 block text-sm font-medium text-gray-200">
          Email Address
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Please enter a valid email address',
            },
          })}
          type="email"
          className="w-full rounded-lg border border-gray-300 bg-white/10 p-3 text-white backdrop-blur-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          placeholder="your@email.com"
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-sm text-red-400"
          >
            {errors.email.message}
          </motion.p>
        )}
      </motion.div>

      {/* Password */}
      <motion.div>
        <label className="mb-2 block text-sm font-medium text-gray-200">
          Password
        </label>
        <div className="relative">
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            type={showPassword ? 'text' : 'password'}
            className="w-full rounded-lg border border-gray-300 bg-white/10 p-3 pr-10 text-white backdrop-blur-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-sm text-red-400"
          >
            {errors.password.message}
          </motion.p>
        )}
      </motion.div>

      {/* Confirm Password */}
      <motion.div>
        <label className="mb-2 block text-sm font-medium text-gray-200">
          Confirm Password
        </label>
        <div className="relative">
          <input
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'The passwords do not match',
            })}
            type={showConfirmPassword ? 'text' : 'password'}
            className="w-full rounded-lg border border-gray-300 bg-white/10 p-3 pr-10 text-white backdrop-blur-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.confirmPassword && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-sm text-red-400"
          >
            {errors.confirmPassword.message}
          </motion.p>
        )}
      </motion.div>

      {/* Agree to Terms */}
      <div className="flex items-center">
        <label className="flex items-center text-sm text-gray-200">
          <input
            type="checkbox"
            {...register('agreeToTerms', {
              required: 'You must agree to the terms and conditions',
            })}
            className="mr-2 rounded border-gray-300 bg-white/10 text-blue-500 focus:ring-blue-500"
          />
          I agree to the{' '}
          <a
            href="#"
            className="ml-1 text-blue-400 hover:text-blue-300 hover:underline"
          >
            terms and conditions
          </a>
        </label>
      </div>
      {errors.agreeToTerms && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-1 text-sm text-red-400"
        >
          {errors.agreeToTerms.message}
        </motion.p>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || !agreeToTerms} // Disable if not checked or submitting
        className={`relative w-full overflow-hidden rounded-lg bg-blue-600 p-3 font-semibold text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-800 disabled:opacity-65`}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </motion.div>
        ) : (
          'Create Account'
        )}
      </motion.button>
    </motion.form>
  );
}

export default SignupForm;
