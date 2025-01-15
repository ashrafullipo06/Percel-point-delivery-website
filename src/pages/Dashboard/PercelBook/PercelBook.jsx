import { useState } from "react";
import Swal from "sweetalert2";
import Heading from "../../../components/Heading";
import { useForm } from "react-hook-form";
import useUser from "../../../hooks/useUser";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const PercelBook = () => {
  const [charge, setCharge] = useState(0);
  const { isUser, isUserLoading } = useUser();
  const axiosPublic = useAxiosPublic();

  const userId = isUser?._id;

  const handleWeight = (e) => {
    const weight = parseFloat(e.target.value);
    if (weight > 0 && weight <= 1) {
      setCharge(50);
    } else if (weight > 1 && weight <= 2) {
      setCharge(100);
    } else if (weight > 2) {
      setCharge(150);
    } else {
      setCharge(0);
    }
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.userId = userId;
    data.charge = charge;
    console.log(data);
    axiosPublic.post("/percels", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: `${isUser.name} added your ${data.percelType} in the queue`,
          icon: "success",
        });
      }
    });
  };

  return (
    <section className=" px-6 py-10">
      <div className="  rounded-lg p-8 w-full max-w-3xl">
        <Heading title="Book A Parcel" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-6 mt-6"
        >
          {/* Name */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              defaultValue={isUser?.name}
              readOnly
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              defaultValue={isUser?.email}
              readOnly
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Phone */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              defaultValue={isUser?.phone}
              readOnly
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Percel Type */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 mb-1">Parcel Type</label>
            <input
              {...register("percelType", { required: true })}
              type="text"
              placeholder="Parcel Type"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Reciver Name */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 mb-1">Receiver's Name</label>
            <input
              {...register("reciverName", { required: true })}
              type="text"
              placeholder="Receiver's Name"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Reciver Phone */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 mb-1">
              Receiver's Phone Number
            </label>
            <input
              {...register("reciverPhone", { required: true })}
              type="text"
              placeholder="Receiver's Phone Number"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Delivery Address */}
          <div className="col-span-2">
            <label className="block text-gray-700 mb-1">Delivery Address</label>
            <input
              type="text"
              {...register("deliveryAddress", { required: true })}
              placeholder="Delivery Address"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Latitude */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 mb-1">
              Delivery Address Latitude
            </label>
            <input
              {...register("latitude", { required: true })}
              type="text"
              placeholder="Latitude (e.g., 23.8103)"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Longitude */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 mb-1">
              Delivery Address Longitude
            </label>
            <input
              {...register("longitude", { required: true })}
              type="text"
              placeholder="Longitude (e.g., 90.4125)"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Weight */}
          <div>
            <label className="block text-gray-700 mb-1">
              Parcel Weight (kg)
            </label>
            <input
              {...register("weight", { required: true })}
              type="number"
              onChange={handleWeight}
              placeholder="Parcel Weight"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Charge */}
          <div>
            <label className="block text-gray-700 mb-1">Delivery Charge</label>
            <input
              type="text"
              value={`BDT ${charge} TK`}
              readOnly
              className="w-full border border-gray-300 p-3 rounded-lg "
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PercelBook;
