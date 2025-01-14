import Lottie from "lottie-react";

const FeatureCard = ({ img, title, description }) => {
  return (
    <div>
      <img className="w-40 mx-auto" src={img} alt="" />
      <div className="text-center max-w-lg mx-auto space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
