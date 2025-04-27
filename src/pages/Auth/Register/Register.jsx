import { Link } from "react-router-dom";
import logo from "/percel-point.svg";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import GoogleLogin from "../../../components/shared/GoogleLogin/GoogleLogin";
import LoginRegisterLottie from "../../../components/shared/LoginRegisterLottie/LoginRegisterLottie";

const Register = () => {
  const { createUserByEmailPassword, updateUserInfo, handleLogout } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgbb = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_BB_API
  }`;
  const onSubmit = async (data) => {
    const { name, email, phone, requestedRole, password } = data;
    // console.log(data);
    try {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(imgbb, imageFile, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const imgDisplayUrl = res.data.data.display_url;
      await createUserByEmailPassword(email, password);
      await updateUserInfo(name, imgDisplayUrl);
      const userDetails = { name, email, imgDisplayUrl, phone, requestedRole };
      const userData = await axiosPublic.post("/users", userDetails);
      // console.log(userData.data);
      if (userData.data.insertedId) {
        handleLogout();
        toast.success("Account create successfully.");
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong..");
      throw error;
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <Helmet>
        <title>Percel Point | Register</title>
      </Helmet>
      <div className="flex flex-col md:flex-row items-center justify-center shadow-lg container mx-auto bg-white rounded-lg overflow-hidden">
        <div className="flex-1">
          <LoginRegisterLottie />
        </div>
        <div className="flex-1 w-full max-w-3xl px-12">
          <div className="text-center mb-6">
            <img className="w-16 mx-auto" src={logo} alt="Percel Point Logo" />
            <p className="text-gray-600 mt-2">Welcome to Percel Point</p>
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Phone */}
            <div>
              <input
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            {/* Photo */}
            <div>
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered w-full "
              />
            </div>
            {/* Phone */}
            <div>
              <select
                defaultValue="Select user type"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                {...register("requestedRole", {
                  required: "User type is required",
                })}
              >
                <option disabled>Select user type</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="deliveryMan">Delivery Man</option>
              </select>

              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            {/* Password */}
            <div>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all"
            >
              Register
            </button>
          </form>

          <GoogleLogin />

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
