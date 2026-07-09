import { useState } from "react";
import { useAppContext } from "../../context/useAppContext";

function ManageTransactions() {
  const { transactions } = useAppContext();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.symbol
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      transaction.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">
          Manage Transactions
        </h1>


        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">

          {/* Search */}
          <input
            type="text"
            placeholder="Search by stock symbol..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-lg flex-1"
          />


          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option value="All">
              All Transactions
            </option>

            <option value="Buy">
              Buy
            </option>

            <option value="Sell">
              Sell
            </option>

          </select>

        </div>


        {/* Transaction Table */}
        <div className="bg-white rounded-xl shadow p-6">

          {
            filteredTransactions.length === 0 ? (

              <p className="text-gray-500 text-center py-10">
                No transactions found.
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
                        Price
                      </th>

                      <th className="text-left py-3">
                        Total
                      </th>

                      <th className="text-left py-3">
                        Status
                      </th>

                      <th className="text-left py-3">
                        Date
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {filteredTransactions.map((transaction) => {

                      const total =
                        transaction.quantity *
                        transaction.price;


                      return (

                        <tr
                          key={transaction.id}
                          className="border-b hover:bg-gray-50"
                        >

                          <td className="py-4">
                            {transaction.id}
                          </td>


                          <td>
                            {transaction.symbol}
                          </td>


                          <td
                            className={
                              transaction.type === "Buy"
                                ? "text-green-600 font-bold"
                                : "text-red-600 font-bold"
                            }
                          >
                            {transaction.type}
                          </td>


                          <td>
                            {transaction.quantity}
                          </td>


                          <td>
                            ${transaction.price.toFixed(2)}
                          </td>


                          <td>
                            ${total.toFixed(2)}
                          </td>


                          <td className="text-blue-600">
                            {transaction.status}
                          </td>


                          <td>
                            {transaction.date}
                          </td>

                        </tr>

                      );

                    })}

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

export default ManageTransactions;