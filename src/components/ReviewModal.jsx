import { useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ReviewModal = ({ ratingInfo, refetch }) => {
  const [rating, setRating] = useState(0);
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const productId = ratingInfo?._id;
    const userName = ratingInfo.userDetails.name;
    const userPhoto = ratingInfo.userDetails.imgDisplayUrl;
    const deliverManName = ratingInfo.deliveryManName;
    const deliverManId = ratingInfo.deliveryManId;
    const delivermanPhoto = ratingInfo.deliveryManPhoto;
    const feedBack = data.feedback;

    // console.log(data);
    const details = {
      productId,
      userName,
      userPhoto,
      deliverManName,
      deliverManId,
      delivermanPhoto,
      feedBack,
      rating,
    };
    // console.log(details);
    const res = await axiosSecure.post("/ratings", details);
    if (res.data.insertedId) {
      document.getElementById("reviewModal").close();
      refetch();
      Swal.fire({
        text: "Thanks For your FeedBack",
        icon: "success",
      });
      setRating(0);
      reset();
    }
  };
  const handleClose = () => {
    document.getElementById("reviewModal").close();
    setRating(0);
    reset();
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="reviewModal" className="modal w-full bg-black/30">
        <div className="flex flex-col items-center w-full bg-white max-w-2xl py-8 rounded-lg shadow-2xl ">
          <h3 className="font-bold text-2xl mb-4 text-blue-600">
            Share Your Valuable Feedback
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 mt-6 text-center w-full px-8"
          >
            <textarea
              {...register("feedback", { required: "Feedback is required" })}
              placeholder="Write your feedback here..."
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
            ></textarea>
            {errors.feedback && (
              <p className="text-red-500 text-sm">{errors.feedback.message}</p>
            )}

            <div className="flex flex-col items-center">
              <p className="mb-2 font-medium text-gray-700">
                Rate your experience:
              </p>
              <Rating
                style={{ maxWidth: 250 }}
                value={rating}
                onChange={setRating}
              />
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ReviewModal;
