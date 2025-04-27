import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "./HeroSlider.css";
import banner2 from "../../../assets/Home/banner2.png";
import banner3 from "../../../assets/Home/banner3.png";

const HeroSlider = () => {
  const images = [
    {
      id: 1,
      img: banner2,
      title: "Elevate Your Shipping Experience",
      class: "text-black",
      description:
        "When it comes to delivering your goods, trust matters. At Swift Courier, we specialize in providing seamless shipping solutions tailored to meet your business needs.",
      url: "/dashboard/book-percel",
      button: "Book Your Percel",
    },
    {
      id: 2,
      img: banner3,
      title: "Fast Delivery Services",
      class: "text-white",
      description:
        "When it comes to delivering your goods, trust matters. At Swift Courier, we specialize in providing seamless shipping solutions tailored to meet your business needs.",
      url: "/dashboard/book-percel",
      button: "Gift Send by US",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[350px] lg:h-[500px] 2xl:h-[750px]">
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[350px] lg:h-[500px] 2xl:h-[750px] object-cover"
              />

              {/* Overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center">
                <div
                  className={`w-full max-w-xl  lg:ml-20 2xl:ml-56 px-4 lg:px-8 text-center  ${item.class}`}
                >
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-lg mb-6 break-words">
                    {item.description}
                  </p>
                  <Link
                    to={item.url}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded  inline-block text-center"
                  >
                    {item.button}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
