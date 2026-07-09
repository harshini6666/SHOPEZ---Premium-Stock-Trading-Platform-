import { useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { useAppContext } from "../../context/useAppContext";

function StockDetails() {

  const {
    stocks,
    buyStock,
    sellStock,
  } = useAppContext();


  const navigate = useNavigate();

  const { symbol } = useParams();


  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");


  // Find selected stock
  const stock = stocks.find(
    (item) => item.symbol === symbol
  );


  // Stock not found
  if (!stock) {

    return (
      <div className="p-10 text-center">

        <h1 className="text-3xl font-bold">
          Stock Not Found
        </h1>

        <button
          onClick={() => navigate("/market")}
          className="mt-5 bg-blue-600 text-white px-5 py-2 rounded"
        >
          Back to Market
        </button>

      </div>
    );

  }


  // Buy Stock
  const handleBuy = async () => {

    const result = await buyStock(
      stock._id,
      Number(quantity)
    );

    setMessage(result.message);

  };


  // Sell Stock
  const handleSell = async () => {

    const result = await sellStock(
      stock._id,
      Number(quantity)
    );

    setMessage(result.message);

  };


  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">


        {/* Header */}
        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold">
              {stock.symbol}
            </h1>


            <p className="text-gray-600 text-lg">
              {stock.companyName}
            </p>

          </div>


          <div
            className={
              stock.changePercentage >= 0
                ? "text-green-600 text-xl font-bold"
                : "text-red-600 text-xl font-bold"
            }
          >

            {stock.changePercentage >= 0 ? "+" : ""}

            {stock.changePercentage.toFixed(2)}%

          </div>

        </div>


        {/* Price */}
        <div className="mt-8">

          <h2 className="text-gray-500">
            Current Price
          </h2>


          <h1 className="text-5xl font-bold">
            ${stock.currentPrice.toFixed(2)}
          </h1>

        </div>


        {/* Stock Info */}
        <div className="grid grid-cols-2 gap-5 mt-8">


          <div className="bg-gray-100 p-5 rounded-lg">

            <h3 className="font-semibold">
              Sector
            </h3>


            <p>
              {stock.sector}
            </p>

          </div>


          <div className="bg-gray-100 p-5 rounded-lg">

            <h3 className="font-semibold">
              Volume
            </h3>


            <p>
              {stock.volume.toLocaleString()}
            </p>

          </div>


        </div>


        {/* Trading */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Trade Stock
          </h2>


          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(e.target.value)
            }
            className="border p-3 rounded-lg w-full mb-5"
          />


          <p className="mb-4 text-gray-700">

            Total Value:

            <span className="font-bold">

              {" "}
              $
              {
                (
                  Number(quantity) *
                  stock.currentPrice
                ).toFixed(2)
              }

            </span>

          </p>


          <div className="flex gap-4">


            <button
              onClick={handleBuy}
              className="flex-1 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
            >
              Buy Stock
            </button>


            <button
              onClick={handleSell}
              className="flex-1 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700"
            >
              Sell Stock
            </button>


          </div>


          {message && (

            <div className="mt-5 p-3 bg-blue-100 rounded">

              {message}

            </div>

          )}

        </div>


        {/* Back */}
        <button
          onClick={() => navigate("/market")}
          className="mt-8 text-blue-600 hover:underline"
        >
          ← Back to Market
        </button>


      </div>

    </div>

  );

}


export default StockDetails;