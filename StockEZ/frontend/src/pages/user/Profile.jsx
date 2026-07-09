import { useState } from "react";
import { useAppContext } from "../../context/useAppContext";

function Profile() {
  const { user, updateProfile } = useAppContext();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile(formData);

    setMessage("Profile updated successfully!");
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-xl shadow p-8">

          <h1 className="text-4xl font-bold mb-2">
            My Profile
          </h1>

          <p className="text-gray-600 mb-8">
            Manage your account details
          </p>


          {/* Profile Information */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}
            <div>

              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

            </div>


            {/* Email */}
            <div>

              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

            </div>


            {/* Role */}
            <div>

              <label className="block mb-2 font-medium">
                Account Role
              </label>

              <input
                type="text"
                value={user?.role || ""}
                className="w-full border p-3 rounded-lg bg-gray-100"
                disabled
              />

            </div>


            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>

          </form>


          {/* Success Message */}
          {
            message && (
              <div className="mt-5 bg-green-100 text-green-700 p-3 rounded-lg">
                {message}
              </div>
            )
          }

        </div>

      </div>

    </div>
  );
}

export default Profile;