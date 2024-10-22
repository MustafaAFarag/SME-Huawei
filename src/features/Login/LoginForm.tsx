// components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle login logic (e.g., call Supabase login API)
  };

  return (
    <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Email */}
      <motion.div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Invalid email address',
            },
          })}
          type="email"
          className={`w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary ${
            errors.email ? 'border-red-500' : ''
          }`}
          placeholder="Your email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </motion.div>

      {/* Password */}
      <motion.div>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          type="password"
          className={`w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary ${
            errors.password ? 'border-red-500' : ''
          }`}
          placeholder="Your password"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </motion.div>

      {/* Remember Me Checkbox */}
      <motion.label className="flex items-center text-white">
        <input type="checkbox" className="mr-2" />
        <p>Remember me</p>
      </motion.label>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="w-full rounded-lg bg-secondary p-3 font-bold text-primary transition duration-300 hover:bg-blue-700 hover:text-white"
      >
        Log In
      </motion.button>
    </motion.form>
  );
}

export default LoginForm;
