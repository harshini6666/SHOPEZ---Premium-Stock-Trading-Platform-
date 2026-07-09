import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/useAppContext";

function Transactions() {

  const navigate = useNavigate();

  const { transactions } = useAppContext();


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="flex justify-between items-center mb-8">


          <div>

            <h1 className="text-4xl font-bold">
              Transaction History
            </h1>


            <p className="text-gray-600 mt-2">
              View all your stock trading activities
            </p>

          </div>


          <button
            onClick={() => navigate("/market")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            Trade Stocks
          </button>


        </div>


        {/* Transaction Table */}
        <div className="bg-white rounded-xl shadow p-6">


          {transactions.length === 0 ? (

            <div className="text-center py-10">


              <p className="text-gray-500 mb-5">
                No transactions available.
              </p>


              <button
                onClick={() => navigate("/market")}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg"
              >
                Start Trading
              </button>


            </div>

          ) : (

            <div className="overflow-x-auto">


              <table className="w-full">


                <thead>

                  <tr className="border-b">

                    <th className="text-left py-3">
                      Transaction ID
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


                  {transactions.map((transaction) => {


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
                            transaction.type === "BUY"
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

          )}


        </div>


      </div>


    </div>
  );

}


export default Transactions;