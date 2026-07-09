import { useAppContext } from "../../context/useAppContext";

function AdminDashboard() {
  const {
    stocks,
    transactions,
    user,
  } = useAppContext();

  const totalUsers = 1; // Temporary until backend database

  const marketValue = stocks.reduce(
    (total, stock) => total + stock.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Welcome, {user?.name || "Admin"}
          </p>
        </div>


        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Total Users
            </h3>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              {totalUsers}
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Listed Stocks
            </h3>

            <p className="text-3xl font-bold text-green-600 mt-2">
              {stocks.length}
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Transactions
            </h3>

            <p className="text-3xl font-bold text-purple-600 mt-2">
              {transactions.length}
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Market Value
            </h3>

            <p className="text-3xl font-bold text-red-600 mt-2">
              ${marketValue.toFixed(2)}
            </p>
          </div>

        </div>


        {/* Recent Transactions */}
        <div className="mt-8 bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold mb-5">
            Recent Activity
          </h2>

          {
            transactions.length === 0 ? (
              <p className="text-gray-500">
                No transactions available.
              </p>
            ) : (
              <div className="overflow-x-auto">

                <table className="w-full">

                  <thead>
                    <tr className="border-b">

                      <th className="text-left py-3">
                        ID
                      </th>

                      <th className="text-left py-3">
                        Stock
                      </th>

                      <th className="text-left py-3">
                        Type
                      </th>

                      <th className="text-left py-3">
                        Quantity
                      </th>

                      <th className="text-left py-3">
                        Status
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
                          {trx.id}
                        </td>

                        <td>
                          {trx.symbol}
                        </td>

                        <td
                          className={
                            trx.type === "Buy"
                              ? "text-green-600 font-bold"
                              : "text-red-600 font-bold"
                          }
                        >
                          {trx.type}
                        </td>

                        <td>
                          {trx.quantity}
                        </td>

                        <td className="text-blue-600">
                          {trx.status}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>
            )
          }

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;