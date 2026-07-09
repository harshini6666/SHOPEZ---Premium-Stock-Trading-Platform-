import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/useAppContext";

function Login() {

  const { login, user } = useAppContext();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // Redirect after successful login
  useEffect(() => {

    if (user) {

      if (user.role?.toLowerCase() === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }

    }

  }, [user, navigate]);


  // Handle Login
  const handleSubmit = async (e) => {

    e.preventDefault();

    const result = await login(
      email,
      password
    );


    if (result.success) {

      setEmail("");
      setPassword("");

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
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your StockTrader account
          </p>

        </div>


        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          {/* Email */}
          <div>

            <label className="block text-gray-700 mb-2">
              Email
            </label>


            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>


          {/* Password */}
          <div>

            <label className="block text-gray-700 mb-2">
              Password
            </label>


            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>


          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>


        </form>


        {/* Register Link */}
        <div className="mt-6 text-center">

          <span className="text-gray-600">
            Don't have an account?
          </span>


          <button
            onClick={() => navigate("/register")}
            className="ml-2 text-blue-600 hover:underline"
          >
            Register
          </button>

        </div>


      </div>

    </div>

  );

}

export default Login;