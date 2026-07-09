import { useState } from "react";
import { useAppContext } from "../../context/useAppContext";

function ManageStocks() {
  const { stocks, setStocks } = useAppContext();

  const [newStock, setNewStock] = useState({
    symbol: "",
    name: "",
    price: "",
    sector: "",
    volume: "",
  });

  const handleChange = (e) => {
    setNewStock({
      ...newStock,
      [e.target.name]: e.target.value,
    });
  };

  // Add new stock
  const addStock = (e) => {
    e.preventDefault();

    if (!newStock.symbol || !newStock.name || !newStock.price) {
      alert("Please fill all required fields");
      return;
    }

    const stock = {
      id: Date.now(),
      symbol: newStock.symbol.toUpperCase(),
      name: newStock.name,
      price: Number(newStock.price),
      change: 0,
      percentChange: 0,
      sector: newStock.sector || "Other",
      volume: newStock.volume || "0",
    };

    setStocks((prev) => [...prev, stock]);

    setNewStock({
      symbol: "",
      name: "",
      price: "",
      sector: "",
      volume: "",
    });
  };


  // Delete stock
  const deleteStock = (symbol) => {
    setStocks(
      stocks.filter((stock) => stock.symbol !== symbol)
    );
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-8">
          Manage Stocks
        </h1>


        {/* Add Stock Form */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">

          <h2 className="text-2xl font-bold mb-5">
            Add New Stock
          </h2>

          <form
            onSubmit={addStock}
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
          >

            <input
              name="symbol"
              value={newStock.symbol}
              onChange={handleChange}
              placeholder="Symbol"
              className="border p-3 rounded"
            />

            <input
              name="name"
              value={newStock.name}
              onChange={handleChange}
              placeholder="Company Name"
              className="border p-3 rounded"
            />

            <input
              type="number"
              name="price"
              value={newStock.price}
              onChange={handleChange}
              placeholder="Price"
              className="border p-3 rounded"
            />

            <input
              name="sector"
              value={newStock.sector}
              onChange={handleChange}
              placeholder="Sector"
              className="border p-3 rounded"
            />

            <input
              name="volume"
              value={newStock.volume}
              onChange={handleChange}
              placeholder="Volume"
              className="border p-3 rounded"
            />

            <button
              className="bg-green-600 text-white py-3 rounded hover:bg-green-700 md:col-span-5"
            >
              Add Stock
            </button>

          </form>

        </div>


        {/* Stock Table */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold mb-5">
            Listed Stocks
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-3">
                    Symbol
                  </th>

                  <th className="text-left py-3">
                    Company
                  </th>

                  <th className="text-left py-3">
                    Price
                  </th>

                  <th className="text-left py-3">
                    Sector
                  </th>

                  <th className="text-left py-3">
                    Volume
                  </th>

                  <th className="text-left py-3">
                    Action
                  </th>

                </tr>

              </thead>


              <tbody>

                {stocks.map((stock) => (

                  <tr
                    key={stock.id}
                    className="border-b"
                  >

                    <td className="py-4 font-bold">
                      {stock.symbol}
                    </td>

                    <td>
                      {stock.name}
                    </td>

                    <td>
                      ${stock.price}
                    </td>

                    <td>
                      {stock.sector}
                    </td>

                    <td>
                      {stock.volume}
                    </td>

                    <td>

                      <button
                        onClick={() =>
                          deleteStock(stock.symbol)
                        }
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManageStocks;