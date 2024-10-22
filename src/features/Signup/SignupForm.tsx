import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { type UseFormRegister, type FieldErrors } from 'react-hook-form';
import { Link } from 'react-router-dom';

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type SignupFormProps = {
  // Update the onSubmit type to match react-hook-form's handleSubmit return type
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
  isChecked: boolean;
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function SignupForm({
  onSubmit,
  errors,
  register,
  isChecked,
  handleCheckboxChange,
}: SignupFormProps) {
  const validateConfirmPassword = (value: string) => {
    const passwordInput = document.querySelector(
      'input[name="password"]',
    ) as HTMLInputElement;
    return value === passwordInput?.value || 'Passwords do not match';
  };

  return (
    <motion.form onSubmit={onSubmit} className="space-y-8">
      {/* Full Name */}
      <motion.div>
        <input
          {...register('fullName', { required: 'Full name is required' })}
          type="text"
          className={`w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary ${errors.fullName ? 'border-red-500' : ''}`}
          placeholder="Your full name"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
        )}
      </motion.div>

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
          className={`w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary ${errors.email ? 'border-red-500' : ''}`}
          placeholder="Your email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </motion.div>

      {/* Password and Confirm Password Row */}
      <motion.div className="flex space-x-4">
        <motion.div className="flex-1">
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            type="password"
            className={`w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary ${errors.password ? 'border-red-500' : ''}`}
            placeholder="Your password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </motion.div>

        <motion.div className="flex-1">
          <input
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: validateConfirmPassword,
            })}
            type="password"
            className={`w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary ${errors.confirmPassword ? 'border-red-500' : ''}`}
            placeholder="Confirm password"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </motion.div>
      </motion.div>

      {/* Terms & Conditions Checkbox */}
      <motion.label className="flex items-center text-white">
        <input
          type="checkbox"
          className="mr-2"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        <p>
          I agree to the{' '}
          <span className="cursor-pointer text-secondary underline">
            Terms & Conditions
          </span>
        </p>
      </motion.label>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className={`w-full rounded-lg bg-secondary p-3 font-bold text-primary transition duration-300 hover:bg-blue-700 hover:text-white ${!isChecked ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={!isChecked}
      >
        Create Account
      </motion.button>

      {/* Already have an account? */}
      <motion.p className="text-center text-white opacity-70">
        Already have an account?{' '}
        <Link to="/login" className="text-secondary underline">
          Log in
        </Link>
      </motion.p>
    </motion.form>
  );
}

export default SignupForm;
