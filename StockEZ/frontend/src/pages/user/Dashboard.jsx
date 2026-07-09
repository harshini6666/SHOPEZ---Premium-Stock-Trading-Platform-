import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/useAppContext";

function Dashboard() {

  const navigate = useNavigate();

  const {
    user,
    balance,
    portfolio,
    transactions,
    portfolioValue,
  } = useAppContext();


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">


        {/* Welcome Section */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Welcome, {user?.name || "Trader"} 👋
          </h1>

          <p className="text-gray-600 mt-2">
            Here's your trading overview.
          </p>

        </div>


        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


          {/* Balance */}
          <div className="bg-white rounded-xl p-6 shadow">

            <h3 className="text-gray-500">
              Available Balance
            </h3>

            <p className="text-3xl font-bold text-green-600 mt-2">
              ${balance.toFixed(2)}
            </p>

          </div>


          {/* Portfolio */}
          <div className="bg-white rounded-xl p-6 shadow">

            <h3 className="text-gray-500">
              Portfolio Value
            </h3>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              ${portfolioValue.toFixed(2)}
            </p>

          </div>


          {/* Holdings */}
          <div className="bg-white rounded-xl p-6 shadow">

            <h3 className="text-gray-500">
              Total Holdings
            </h3>

            <p className="text-3xl font-bold text-purple-600 mt-2">
              {portfolio.length}
            </p>

          </div>

        </div>


        {/* Quick Actions */}
        <div className="mt-8 flex gap-4">

          <button
            onClick={() => navigate("/market")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            Explore Market
          </button>


          <button
            onClick={() => navigate("/portfolio")}
            className="bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-900"
          >
            View Portfolio
          </button>

        </div>


        {/* Recent Transactions */}
        <div className="mt-10 bg-white rounded-xl shadow p-6">


          <div className="flex justify-between items-center mb-5">

            <h2 className="text-2xl font-bold">
              Recent Transactions
            </h2>


            <button
              onClick={() => navigate("/transactions")}
              className="text-blue-600 hover:underline"
            >
              View All
            </button>

          </div>


          {transactions.length === 0 ? (

            <p className="text-gray-500">
              No transactions found.
            </p>

          ) : (

            <div className="overflow-x-auto">


              <table className="w-full">

                <thead>

                  <tr className="border-b">

                    <th className="text-left py-3">
                      Symbol
                    </th>

                    <th className="text-left py-3">
                      Type
                    </th>

                    <th className="text-left py-3">
                      Quantity
                    </th>

                    <th className="text-left py-3">
                      Price
                    </th>

                    <th className="text-left py-3">
                      Date
                    </th>

                  </tr>

                </thead>


                <tbody>


                  {transactions.slice(0, 5).map((trx) => (

                    <tr
                      key={trx.id}
                      className="border-b"
                    >

                      <td className="py-3">
                        {trx.symbol}
                      </td>


                      <td
                        className={
                          trx.type === "BUY"
                            ? "text-green-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                      >

                        {trx.type}

                      </td>


                      <td>
                        {trx.quantity}
                      </td>


                      <td>
                        ${trx.price}
                      </td>


                      <td>
                        {trx.date}
                      </td>


                    </tr>

                  ))}


                </tbody>

              </table>


            </div>

          )}

        </div>


      </div>

    </div>
  );

}

export default Dashboard;