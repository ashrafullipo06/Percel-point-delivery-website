import Lottie from "lottie-react";
import founding from "../../assets/lottie/founding.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5">
      <Lottie className="w-96" animationData={founding} loop={true} />
      <p className="text-3xl font-semibold">Something Went wrong</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
