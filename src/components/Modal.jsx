import { useState } from "react";
import useDeliveryMen from "../hooks/useDeliveryMen";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useUser from "../hooks/useUser";

const Modal = ({ selectPercel }) => {
  const { deleveryMan, isDeleveryManLoading } = useDeliveryMen();
  const { isUser } = useUser();

  const [deliveryDate, setDeliveryDate] = useState(new Date());

  const handleAssign = () => {
    console.log("Assigned Delivery Man and Date", deliveryDate);
    // Add logic for assigning the delivery man here
  };

  const handleClose = () => {
    document.getElementById("my_modal_5").close();
  };

  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle bg-black/40"
      >
        <div className="bg-white w-full max-w-lg p-10 rounded-md shadow-2xl flex flex-col items-center space-y-4">
          <div>
            <h3 className="font-bold text-xl">Hello {isUser?.name}</h3>
            <p className="text-center">Please assign a delivery man</p>
          </div>
          <select
            defaultValue=""
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Assign Delivery Man
            </option>
            {deleveryMan.map((man) => (
              <option value={man.name} key={man._id}>
                {man.name}
              </option>
            ))}
          </select>
          <div className="w-full mt-4">
            <DatePicker
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 hover:cursor-pointer"
              selected={deliveryDate}
              onChange={(date) => setDeliveryDate(date)}
            />
          </div>
          <div className="modal-action">
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
