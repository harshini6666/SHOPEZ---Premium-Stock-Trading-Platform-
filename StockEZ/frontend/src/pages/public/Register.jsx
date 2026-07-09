import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/useAppContext";

function Register() {

  const { register, user } = useAppContext();

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  // Redirect after successful registration
  useEffect(() => {

    if (user) {

      if (user.role?.toLowerCase() === "admin") {

        navigate("/admin-dashboard");

      } else {

        navigate("/dashboard");

      }

    }

  }, [user, navigate]);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // Handle Registration
  const handleSubmit = async (e) => {

    e.preventDefault();


    if (formData.password !== formData.confirmPassword) {

      alert("Passwords do not match");

      return;

    }


    const result = await register(
      formData.name,
      formData.email,
      formData.password
    );


    if (result.success) {

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } else {

      alert(result.message);

    }

  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">


        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Start your virtual trading journey
          </p>

        </div>


        {/* Register Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          <div>

            <label className="block text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

          </div>


          <div>

            <label className="block text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

          </div>


          <div>

            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

          </div>


          <div>

            <label className="block text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

          </div>


          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            Create Account
          </button>


        </form>


        {/* Login Link */}
        <div className="mt-6 text-center">

          <span className="text-gray-600">
            Already have an account?
          </span>


          <button
            onClick={() => navigate("/login")}
            className="ml-2 text-blue-600 hover:underline"
          >
            Login
          </button>

        </div>


      </div>

    </div>
  );

}

export default Register;