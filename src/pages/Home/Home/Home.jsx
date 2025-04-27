import WhyChooseUs from "../../Features/WhyChooseUs";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import HeroSlider from "../HeroBanner/HeroSlider";
import Statistics from "../Statistics/Statistics";
import TopRatedDeliveryMan from "../TopRatedDeliveryMan/TopRatedDeliveryMan";

const Home = () => {
  return (
    <div>
      {/* <HeroBanner /> */}
      <HeroSlider />
      <div className="space-y-12 2xl:space-y-24 py-12 2xl:py-24">
        <Features />
        <Statistics />
        <WhyChooseUs />
        <TopRatedDeliveryMan />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
