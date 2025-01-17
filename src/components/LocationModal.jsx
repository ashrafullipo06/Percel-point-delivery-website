import React from "react";
import Map from "react-map-gl";

const LocationModal = () => {
//   console.log(import.meta.env.VITE_mapboxAccessToken);
  return (
    <div>
      {/* Trigger the modal with document.getElementById('my_modal_3').showModal() */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full max-w-3xl">
          {/* Close button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* Modal Content */}
          <h2 className="text-lg font-semibold mb-4 text-center">
            Location Map
          </h2>
          <div className="rounded-lg overflow-hidden">
            {/* <Map
              mapboxAccessToken={import.meta.env.VITE_mapboxAccessToken}
              initialViewState={{
                longitude: 90.366313, // Mirpur, Dhaka
                latitude: 23.8042,
                zoom: 12,
              }}
              style={{ width: "100%", height: "400px" }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
            /> */}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LocationModal;
