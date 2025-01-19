import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyProfile = () => {
  const { user, updateUserInfo } = useAuth(); // Access user info and update method
  const { displayName, email, photoURL } = user;
  const axiosPublic = useAxiosPublic();

  const imgbb = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_BB_API
  }`;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(displayName || "");
  const [preview, setPreview] = useState(photoURL); // For image preview
  const [newPhoto, setNewPhoto] = useState(null); // To hold the new file

  // Handle file input and preview
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewPhoto(file);
      setPreview(URL.createObjectURL(file)); // Preview the selected file
    }
  };

  // Handle profile update
  const handleUpdateProfile = async () => {
    if (!name.trim()) {
      toast.error("Name cannot be empty.");
      return;
    }

    let imgDisplayUrl = photoURL; // Default to the current photo URL
    try {
      // If a new photo is uploaded, upload it to imgbb
      if (newPhoto) {
        const formData = new FormData();
        formData.append("image", newPhoto);

        const res = await axiosPublic.post(imgbb, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        imgDisplayUrl = res.data.data.display_url; // Get the new image URL
      }

      // Update user info
      await updateUserInfo(name, imgDisplayUrl); // Update in auth
      toast.success("Profile updated successfully!");

      // Exit editing mode
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">My Profile</h2>

      {/* Display Mode */}
      {!isEditing ? (
        <>
          <img
            src={preview || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-gray-300 shadow-md"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            {displayName || "No name provided"}
          </h3>
          <p className="text-gray-600">{email || "No email provided"}</p>

          <button
            onClick={() => setIsEditing(true)}
            className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Profile
          </button>
        </>
      ) : (
        // Edit Mode
        <>
          <img
            src={preview || "https://via.placeholder.com/150"}
            alt="Profile Preview"
            className="w-36 h-36 rounded-full object-cover border-4 border-gray-300 shadow-md"
          />
          <div className="mt-4">
            <label
              htmlFor="fileUpload"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload New Profile Picture
            </label>
            <input
              id="fileUpload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-72 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleUpdateProfile}
              className="bg-blue-600 text-white py-2 px-6 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white py-2 px-6 rounded-md shadow hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MyProfile;
