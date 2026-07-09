import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/useAppContext";

function Home() {

  const navigate = useNavigate();

  const { stocks } = useAppContext();

  const featuredStocks = stocks.slice(0, 4);


  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Trade Smarter with StockTrader
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Learn, practice, and master stock trading with a virtual portfolio.
          </p>


          <button
            onClick={() => navigate("/register")}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg"
          >
            Get Started
          </button>

        </div>

      </section>


      {/* Featured Stocks */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          Featured Stocks
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredStocks.map((stock) => (

            <div
              key={stock._id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >

              <h3 className="text-xl font-bold">
                {stock.symbol}
              </h3>


              <p className="text-gray-600">
                {stock.companyName}
              </p>


              <p className="mt-3 text-2xl font-bold">
                ${stock.currentPrice.toFixed(2)}
              </p>


              <p
                className={
                  stock.changePercentage >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >

                {stock.changePercentage >= 0 ? "+" : ""}

                {stock.changePercentage.toFixed(2)}%

              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Features */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose StockTrader?
          </h2>


          <div className="grid md:grid-cols-3 gap-8">


            <div className="bg-gray-100 p-6 rounded-lg">

              <h3 className="text-xl font-bold mb-3">
                Virtual Trading
              </h3>


              <p className="text-gray-600">
                Buy and sell stocks without risking real money.
              </p>

            </div>


            <div className="bg-gray-100 p-6 rounded-lg">

              <h3 className="text-xl font-bold mb-3">
                Portfolio Tracking
              </h3>


              <p className="text-gray-600">
                Monitor your investments and performance.
              </p>

            </div>


            <div className="bg-gray-100 p-6 rounded-lg">

              <h3 className="text-xl font-bold mb-3">
                Market Analytics
              </h3>


              <p className="text-gray-600">
                Analyze trends and improve your trading skills.
              </p>

            </div>


          </div>

        </div>

      </section>

    </div>
  );

}

export default Home;