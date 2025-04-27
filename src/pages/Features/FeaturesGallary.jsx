import safety_a from "../../assets/features/safety_a.jpg";
import safety_b from "../../assets/features/safety_b.jpg";
import safety_c from "../../assets/features/safety_c.jpg";
import safety_d from "../../assets/features/safety_d.jpg";
import safety_e from "../../assets/features/safety_e.jpg";
import safety_f from "../../assets/features/safety_f.jpg";
import Heading from "../../components/Heading";

const images = [safety_a, safety_b, safety_c, safety_d, safety_e, safety_f];

const FeaturesGallery = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading title="Our Services" />
          <p className="mt-4 text-lg text-gray-500">
            Fast, safe, and reliable parcel solutions for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={src}
                alt={`Feature ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Optional: If you want a badge like Pathao Insured */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-full text-white font-semibold">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Parcel Insured</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGallery;
