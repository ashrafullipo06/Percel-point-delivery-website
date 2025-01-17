const ReviewCard = ({ review }) => {
  const { deliverManName, delivermanPhoto, feedBack, rating } = review;

  return (
    <div className=" rounded-lg p-6 mx-auto  w-full max-w-md relative mt-24 bg-slate-100 ">
      {/* Delivery Man Photo */}
      <div className="relative -mt-20 flex justify-center">
        <img
          src={delivermanPhoto}
          alt={`${deliverManName}'s photo`}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Delivery Man Name */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {deliverManName}
        </h3>
      </div>

      {/* Feedback */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed text-center">
        "{feedBack}"
      </p>

      {/* Rating */}
      <div className="mt-4 flex justify-center items-center">
        <div className="text-yellow-500 text-lg">
          {Array.from({ length: rating }, (_, i) => (
            <span key={i}>&#9733;</span>
          ))}
        </div>
        <span className="text-gray-500 text-sm ml-2">({rating} / 5)</span>
      </div>
    </div>
  );
};

export default ReviewCard;
