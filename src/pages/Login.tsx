import { useForm } from 'react-hook-form';
import { FaGoogle, FaApple } from 'react-icons/fa';

type FormData = {
  email: string;
  password: string;
};

function Login({ toggleSignup }: { toggleSignup: () => void }) {
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
    <div className="flex min-h-screen items-center justify-center bg-blue-300">
      <div className="animate-fadeIn flex w-full max-w-7xl overflow-hidden rounded-lg bg-primary shadow-lg">
        {/* Left side: Form */}
        <div className="w-1/2 p-10">
          <h2 className="mb-6 text-center text-3xl font-bold text-secondary">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

            {/* Password */}
            <div>
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

            <label className="mt-4 flex items-center text-white">
              <input type="checkbox" className="mr-2" />
              <p>Remember me</p>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full rounded-lg bg-secondary p-3 font-bold text-primary transition duration-300 hover:bg-blue-700 hover:text-white`}
            >
              Log In
            </button>

            {/* Forgot Password Link */}
            <p className="text-center text-white opacity-70">
              Forgot your password?{' '}
              <span className="cursor-pointer text-secondary underline">
                Reset it
              </span>
            </p>

            {/* Already have an account? */}
            <p className="text-center text-white opacity-70">
              Don't have an account?{' '}
              <button
                onClick={toggleSignup}
                className="text-secondary underline"
              >
                Sign up
              </button>
            </p>
          </form>

          <p className="mt-6 flex items-center justify-center text-center text-white">
            <span className="flex-grow border-t border-white"></span>
            <span className="mx-4">Or Login with</span>
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

        {/* Right side: Image */}
        <img
          className="w-1/2 bg-cover bg-center"
          src="./logo.jpg"
          alt="Brand Logo"
        />
      </div>
    </div>
  );
}

export default Login;
