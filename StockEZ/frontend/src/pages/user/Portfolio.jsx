import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/useAppContext";

function Portfolio() {

  const navigate = useNavigate();

  const {
    balance,
    portfolio,
    stocks,
    portfolioValue,
  } = useAppContext();


  // Get current stock price
  const calculateCurrentPrice = (symbol) => {

    const stock = stocks.find(
      (item) => item.symbol === symbol
    );

    return stock ? stock.currentPrice : 0;

  };


  // Cash + Investments
  const totalAccountValue =
    balance + portfolioValue;


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              My Portfolio
            </h1>

            <p className="text-gray-600 mt-2">
              Track your investments and performance
            </p>

          </div>


          <button
            onClick={() => navigate("/market")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            Buy More Stocks
          </button>

        </div>


        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">


          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-gray-500 text-lg">
              Available Balance
            </h2>

            <p className="text-3xl font-bold text-green-600 mt-2">
              ${balance.toFixed(2)}
            </p>

          </div>


          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-gray-500 text-lg">
              Portfolio Value
            </h2>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              ${portfolioValue.toFixed(2)}
            </p>

          </div>


          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-gray-500 text-lg">
              Total Account Value
            </h2>

            <p className="text-3xl font-bold text-purple-600 mt-2">
              ${totalAccountValue.toFixed(2)}
            </p>

          </div>


        </div>


        {/* Holdings */}
        <div className="bg-white rounded-xl shadow p-6">


          <h2 className="text-2xl font-bold mb-6">
            Holdings
          </h2>


          {portfolio.length === 0 ? (

            <div className="text-center py-10">

              <p className="text-gray-500 mb-5">
                You don't own any stocks yet.
              </p>


              <button
                onClick={() => navigate("/market")}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg"
              >
                Explore Market
              </button>

            </div>

          ) : (

            <div className="overflow-x-auto">


              <table className="w-full">


                <thead>

                  <tr className="border-b">

                    <th className="text-left py-3">
                      Symbol
                    </th>

                    <th className="text-left py-3">
                      Quantity
                    </th>

                    <th className="text-left py-3">
                      Average Price
                    </th>

                    <th className="text-left py-3">
                      Current Price
                    </th>

                    <th className="text-left py-3">
                      Current Value
                    </th>

                    <th className="text-left py-3">
                      Profit/Loss
                    </th>

                  </tr>

                </thead>


                <tbody>


                  {portfolio.map((item) => {

                    const currentPrice =
                      calculateCurrentPrice(item.symbol);


                    const currentValue =
                      currentPrice * item.quantity;


                    const investment =
                      item.avgPrice * item.quantity;


                    const profitLoss =
                      currentValue - investment;


                    return (

                      <tr
                        key={item.symbol}
                        className="border-b"
                      >

                        <td className="py-4 font-semibold">
                          {item.symbol}
                        </td>


                        <td>
                          {item.quantity}
                        </td>


                        <td>
                          ${item.avgPrice.toFixed(2)}
                        </td>


                        <td>
                          ${currentPrice.toFixed(2)}
                        </td>


                        <td>
                          ${currentValue.toFixed(2)}
                        </td>


                        <td
                          className={
                            profitLoss >= 0
                              ? "text-green-600 font-bold"
                              : "text-red-600 font-bold"
                          }
                        >

                          {profitLoss >= 0 ? "+" : ""}
                          ${profitLoss.toFixed(2)}

                        </td>

                      </tr>

                    );

                  })}


                </tbody>


              </table>


            </div>

          )}

        </div>


      </div>

    </div>
  );

}

export default Portfolio;