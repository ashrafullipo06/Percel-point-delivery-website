import Lottie from "lottie-react";
import loader from "../../../assets/lottie/loading-delivery.json";

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-276px)] flex justify-center items-center">
      <Lottie className="w96" animationData={loader} />
    </div>
  );
};

export default Loading;
