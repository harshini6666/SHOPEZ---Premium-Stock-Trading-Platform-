import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/useAppContext";

function Market() {

  const { stocks } = useAppContext();

  const navigate = useNavigate();

  const [search, setSearch] = useState("");


  // Filter stocks
  const filteredStocks = stocks.filter(
    (stock) =>
      stock.symbol
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      stock.companyName
        .toLowerCase()
        .includes(search.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <h1 className="text-4xl font-bold mb-3">
          Stock Market
        </h1>


        <p className="text-gray-600 mb-8">
          Explore available stocks and monitor market prices.
        </p>


        {/* Search */}
        <input
          type="text"
          placeholder="Search by company or symbol..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full md:w-96 p-3 border rounded-lg mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />


        {/* Empty State */}
        {filteredStocks.length === 0 && (

          <div className="text-center text-gray-500">
            No stocks found.
          </div>

        )}


        {/* Stock Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


          {filteredStocks.map((stock) => (

            <div
              key={stock._id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >


              {/* Symbol & Change */}
              <div className="flex justify-between items-center">


                <div>

                  <h2 className="text-2xl font-bold">
                    {stock.symbol}
                  </h2>


                  <p className="text-gray-500">
                    {stock.companyName}
                  </p>

                </div>


                <span
                  className={
                    stock.changePercentage >= 0
                      ? "text-green-600 font-bold"
                      : "text-red-600 font-bold"
                  }
                >

                  {stock.changePercentage >= 0 ? "+" : ""}

                  {stock.changePercentage.toFixed(2)}%

                </span>


              </div>


              {/* Current Price */}
              <div className="mt-5">


                <p className="text-gray-500">
                  Current Price
                </p>


                <h3 className="text-3xl font-bold">

                  ${stock.currentPrice.toFixed(2)}

                </h3>


              </div>


              {/* Extra Information */}
              <div className="mt-4 text-sm text-gray-600">


                <p>
                  Sector: {stock.sector}
                </p>


                <p>
                  Volume: {stock.volume.toLocaleString()}
                </p>


              </div>


              {/* Actions */}
              <div className="flex gap-3 mt-6">


                {/* View Details */}
                <button
                  onClick={() =>
                    navigate(`/stock/${stock.symbol}`)
                  }
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  View Details
                </button>


                {/* Buy Stock */}
                <button
                  onClick={() =>
                    navigate(`/stock/${stock.symbol}`)
                  }
                  className="flex-1 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-600 hover:text-white"
                >
                  Buy
                </button>


              </div>


            </div>

          ))}


        </div>


      </div>


    </div>
  );

}


export default Market;