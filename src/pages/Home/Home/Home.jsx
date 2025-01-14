import Features from "../Features/Features";
import HeroBanner from "../HeroBanner/HeroBanner";
import Statistics from "../Statistics/Statistics";
import TopRatedDeliveryMan from "../TopRatedDeliveryMan/TopRatedDeliveryMan";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="space-y-12 2xl:space-y-24 py-12 2xl:py-24">
        <Features />
        <Statistics />
        <TopRatedDeliveryMan />
      </div>
    </div>
  );
};

export default Home;
