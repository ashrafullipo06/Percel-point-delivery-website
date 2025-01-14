const ReviewCard = ({ img, name, deliverCount, avgRating }) => {
  return (
    <div className="py-8">
      <div
        className="bg-red-500 shadow-lg rounded-lg p-4 max-w-sm mx-auto relative py-24
         mt-8"
      >
        <img
          className="w-24 h-24 rounded-full mx-auto border-2 border-blue-500 object-cover absolute inset-0 -top-10"
          src={img}
          alt={name}
        />
        <h2 className="text-3xl font-semibold text-center mt-2">{name}</h2>
      </div>
    </div>
  );
};

export default ReviewCard;
