// components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

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

      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm text-gray-200">
          <input
            type="checkbox"
            {...register('rememberMe')}
            className="mr-2 rounded border-gray-300 bg-white/10 text-blue-500 focus:ring-blue-500"
          />
          Remember me
        </label>
        <button
          type="button"
          className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
        >
          Forgot password?
        </button>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full overflow-hidden rounded-lg bg-blue-600 p-3 font-semibold text-white transition-all hover:bg-blue-700 disabled:bg-blue-800"
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
          'Sign In'
        )}
      </motion.button>
    </motion.form>
  );
}

export default LoginForm;
