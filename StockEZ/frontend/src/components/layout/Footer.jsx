function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              StockTrader
            </h2>
            <p className="mt-3 text-gray-400">
              A virtual stock trading platform where users can learn,
              practice, and analyze market trends without real money.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-blue-400 cursor-pointer">
                Home
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Market
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Portfolio
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Transactions
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Author and Contact details
            </h3>

            <p className="text-gray-400">
              Akshitha Reddy
            </p>

            <p className="text-gray-400 mt-2">
              Phone: +91 98765 43210
            </p>

            <p className="text-gray-400 mt-2">
              Trade Smart. Learn Better.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          © 2026 StockTrader. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;