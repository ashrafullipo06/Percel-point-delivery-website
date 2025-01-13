import { Link } from "react-router-dom";
import logo from "/percel-point.svg";
import LoginRegisterLottie from "../shared/LoginRegisterLottie/LoginRegisterLottie";
import GoogleLogin from "../shared/GoogleLogin/GoogleLogin";
const Register = () => {
  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center justify-center shadow-lg container mx-auto ">
        {/* Lottie Animation */}
        <div className="flex-1">
          <LoginRegisterLottie />
        </div>

        {/* Login Form */}
        <div className="flex-1 w-full max-w-3xl px-12">
          <div className="space-y-4">
            <img className="w-16 mx-auto" src={logo} alt="" />
            <p className="text-center">Welcom to Percel Point</p>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-center text-gray-800 py-4">
            Register
          </h2>
          <form className="space-y-5">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all"
            >
              Login
            </button>
          </form>
          <GoogleLogin />

          {/* Register Link */}
          <p className="text-center mt-4 text-gray-600">
            Already have an account?
            <Link to="/login" className="text-blue-500 hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
