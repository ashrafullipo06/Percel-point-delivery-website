import { useState } from "react";
import Heading from "../../../components/Heading";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
const PercelBook = () => {
  const [charge, setCharge] = useState(0);
  const { user } = useAuth();

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
    console.log(data);
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
              {...register("name", { required: true })}
              type="text"
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
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
              defaultValue={user?.phone}
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Percel Type */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 mb-1">Parcel Type</label>
            <input
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
