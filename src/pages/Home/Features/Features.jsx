import Heading from "../../../components/Heading";
import FeatureCard from "../../../components/FeatureCard";
import img1 from "../../../assets/features/1.svg";
import img2 from "../../../assets/features/2.svg";
import img3 from "../../../assets/features/3.svg";

const Features = () => {
  return (
    <section>
      <Heading title="Features" />
      <div className="grid grid-cols-3 py-4 gap-8 ">
        <FeatureCard
          img={img1}
          title="Fast Delivery"
          description="Quick and efficient parcel delivery, ensuring timely arrivals every time."
        />
        <FeatureCard
          img={img2}
          title="Secure Delivery"
          description="Your parcels are handled with care, ensuring safe and secure delivery."
        />
        <FeatureCard
          img={img3}
          title="Home Delivery "
          description="Convenient doorstep delivery for your parcels, hassle-free and reliable."
        />
      </div>
    </section>
  );
};

export default Features;
