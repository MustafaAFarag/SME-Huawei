import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaApple } from 'react-icons/fa';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';

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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-300">
      <div className="animate-fadeIn flex w-full max-w-7xl overflow-hidden rounded-lg bg-primary shadow-lg">
        {/* Left side: Image */}
        <img
          className="w-1/2 bg-cover bg-center"
          src="./logo.jpg"
          alt="Brand Logo"
        />

        {/* Right side: Form */}
        <div className="w-1/2 p-10">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <h2 className="mb-6 text-center text-3xl font-bold text-secondary">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <input
                {...register('fullName', { required: 'Full name is required' })}
                type="text"
                className={`w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary ${
                  errors.fullName ? 'border-red-500' : ''
                }`}
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
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
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password and Confirm Password Row */}
            <div className="flex space-x-4">
              <div className="flex-1">
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
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <input
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) =>
                      value ===
                        (
                          document.querySelector(
                            'input[name="password"]',
                          ) as HTMLInputElement
                        )?.value || 'Passwords do not match',
                  })}
                  type="password"
                  className={`w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary ${
                    errors.confirmPassword ? 'border-red-500' : ''
                  }`}
                  placeholder="Confirm password"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            {/* Terms & Conditions Checkbox */}
            <label className="mt-4 flex items-center text-white">
              <input
                type="checkbox"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              <p>
                I agree to the{' '}
                <span className="text-secondary underline">
                  Terms & Conditions
                </span>
              </p>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full rounded-lg bg-secondary p-3 font-bold text-primary transition duration-300 hover:bg-blue-700 hover:text-white ${
                !isChecked ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isChecked}
            >
              Create Account
            </button>

            {/* Already have an account? */}
            <p className="mt-4 text-center text-white opacity-70">
              Already have an account?{' '}
              <Link to="/login" className="text-secondary underline">
                Log in
              </Link>
            </p>
          </form>

          <p className="mt-6 flex items-center justify-center text-center text-white">
            <span className="flex-grow border-t border-white"></span>
            <span className="mx-4">Or Register with</span>
            <span className="flex-grow border-t border-white"></span>
          </p>

          <div className="mt-4 flex items-center gap-4">
            <button className="flex w-1/2 items-center justify-center gap-2 rounded-lg border p-2 text-white">
              <FaGoogle className="text-xl" /> Google
            </button>
            <button className="flex w-1/2 items-center justify-center gap-2 rounded-lg border p-2 text-white">
              <FaApple className="text-xl" /> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
