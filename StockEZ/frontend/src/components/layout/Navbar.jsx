import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/useAppContext";

function Navbar() {

  const navigate = useNavigate();

  const {
    user,
    logout,
  } = useAppContext();


  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1
          className="text-2xl font-bold text-blue-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          StockTrader
        </h1>


        {/* Navigation */}
        <div className="flex gap-6 items-center">


          {/* Guest Navigation */}
          {!user && (
            <>

              <button
                onClick={() => navigate("/")}
                className="hover:text-blue-400 transition"
              >
                Home
              </button>


              <button
                onClick={() => navigate("/market")}
                className="hover:text-blue-400 transition"
              >
                Market
              </button>


              <button
                onClick={() => navigate("/login")}
                className="hover:text-blue-400 transition"
              >
                Login
              </button>


              <button
                onClick={() => navigate("/register")}
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </button>

            </>
          )}


          {/* User Navigation */}
          {user?.role?.toLowerCase() === "user" && (
            <>

              <button
                onClick={() => navigate("/dashboard")}
                className="hover:text-blue-400 transition"
              >
                Dashboard
              </button>


              <button
                onClick={() => navigate("/market")}
                className="hover:text-blue-400 transition"
              >
                Market
              </button>


              <button
                onClick={() => navigate("/portfolio")}
                className="hover:text-blue-400 transition"
              >
                Portfolio
              </button>


              <button
                onClick={() => navigate("/transactions")}
                className="hover:text-blue-400 transition"
              >
                Transactions
              </button>


              <button
                onClick={() => navigate("/profile")}
                className="hover:text-blue-400 transition"
              >
                Profile
              </button>


              <span className="text-green-400 font-semibold">
                👋 {user.name}
              </span>


              <button
                onClick={logout}
                className="bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>

            </>
          )}


          {/* Admin Navigation */}
          {user?.role?.toLowerCase() === "admin" && (
            <>

              <button
                onClick={() => navigate("/admin-dashboard")}
                className="hover:text-blue-400 transition"
              >
                Dashboard
              </button>


              <button
                onClick={() => navigate("/admin-users")}
                className="hover:text-blue-400 transition"
              >
                Users
              </button>


              <button
                onClick={() => navigate("/admin-stocks")}
                className="hover:text-blue-400 transition"
              >
                Stocks
              </button>


              <button
                onClick={() => navigate("/admin-transactions")}
                className="hover:text-blue-400 transition"
              >
                Transactions
              </button>


              <span className="text-yellow-400 font-semibold">
                👑 Admin
              </span>


              <button
                onClick={logout}
                className="bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>

            </>
          )}

        </div>

      </div>

    </nav>
  );

}

export default Navbar;