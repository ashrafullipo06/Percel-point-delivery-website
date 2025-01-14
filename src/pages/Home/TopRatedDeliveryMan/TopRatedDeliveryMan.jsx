import Heading from "../../../components/Heading";
import ReviewCard from "../../../components/ReviewCard";

const TopRatedDeliveryMan = () => {
  return (
    <div>
      <Heading title="Top Rated Delivery Men" />
      <div className="grid grid-cols-3 gap-8">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default TopRatedDeliveryMan;
