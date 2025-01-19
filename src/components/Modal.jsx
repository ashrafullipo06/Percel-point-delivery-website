import { useState } from "react";
import useDeliveryMen from "../hooks/useDeliveryMen";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useUser from "../hooks/useUser";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const Modal = ({ selectPercel, refetch }) => {
  const { deliveryMan, isDeleveryManLoading } = useDeliveryMen();
  const { isUser } = useUser();
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [deliveryManDetails, setDeliveryManDetails] = useState(null); // State to store selected delivery man details
  const axiosSecure = useAxiosSecure();
  // console.log(deliveryDate);

  const resetValues = () => {
    setDeliveryManDetails(null);
    setDeliveryDate(new Date());
    document.getElementById("deliveryManSelect").value = "";
  };

  const handleAssign = async () => {
    if (!deliveryManDetails) {
      toast.error("Please select a delivery man.");
      return;
    }
    const percelId = selectPercel._id;
    const approximateDeliveryDate = deliveryDate;
    const deliveryManId = deliveryManDetails._id;
    const deliveryManName = deliveryManDetails.name;
    const deliveryManPhoneNumber = deliveryManDetails.phone;
    const deliveryManPhoto = deliveryManDetails.imgDisplayUrl;
    const details = {
      percelId,
      deliveryManId,
      approximateDeliveryDate,
      deliveryManName,
      deliveryManPhoneNumber,
      deliveryManPhoto,
    };
    // console.log(details);
    const res = await axiosSecure.post("/delivery-list", details);
    if (res.data.insertedId) {
      // Add API logic for assigning the delivery man here
      refetch();
      toast.success(`Assigned delivery man: ${deliveryManDetails.name}`);
      resetValues();
      document.getElementById("my_modal_5").close();
    }
  };

  const handleDeliveryManInfo = async (email) => {
    try {
      // console.log("Selected Email:", email);
      const res = await axiosSecure.get(`/user/${email}`);
      // console.log("Response Data:", res.data);
      setDeliveryManDetails(res.data); // Update state with selected delivery man details
    } catch (error) {
      // console.error("Error fetching delivery man info:", error);
    }
  };

  const handleClose = () => {
    resetValues();
    document.getElementById("my_modal_5").close();
  };

  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle bg-black/40"
      >
        <div className="bg-white w-full max-w-lg p-10 rounded-md shadow-2xl flex flex-col items-center space-y-4">
          {/* Header */}
          <div>
            <h3 className="font-bold text-xl">Hello {isUser?.name}</h3>
            <p className="text-center">Please assign a delivery man</p>
          </div>

          {/* Delivery Man Selection */}
          <select
            id="deliveryManSelect"
            onChange={(e) => handleDeliveryManInfo(e.target.value)}
            defaultValue=""
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Assign Delivery Man
            </option>
            {!isDeleveryManLoading &&
              deliveryMan.map((man) => (
                <option value={man.email} key={man._id}>
                  {man.name}
                </option>
              ))}
          </select>

          {/* Display Selected Delivery Man Info */}
          {deliveryManDetails && (
            <div className="w-full mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h4 className="font-bold text-gray-800 mb-2">
                Selected Delivery Man:
              </h4>
              <p>
                <span className="font-bold">Name:</span>{" "}
                {deliveryManDetails.name}
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                {deliveryManDetails.email}
              </p>
              <p>
                <span className="font-bold">Phone:</span>{" "}
                {deliveryManDetails.phone}
              </p>
            </div>
          )}

          {/* Approximate Delivery Date */}
          <div className="w-full mt-4">
            <span className="ml-1 text-gray-700">
              Approximate Delivery Date
            </span>
            <DatePicker
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 hover:cursor-pointer"
              selected={deliveryDate}
              onChange={(date) => setDeliveryDate(date)}
            />
          </div>

          {/* Actions */}
          <div className="modal-action flex gap-4">
            <button
              onClick={handleAssign}
              className="btn bg-green-500 text-white hover:bg-green-600"
            >
              Assign
            </button>
            <button
              onClick={handleClose}
              className="btn bg-red-500 text-white hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
