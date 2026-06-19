import { useNavigate } from "react-router-dom";

export default function BuyerDashboard() {
  const navigate = useNavigate();

  const buyer = JSON.parse(
    localStorage.getItem("currentBuyer")
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-10 text-white">

      <h1 className="text-4xl font-bold mb-2">
        Welcome {buyer?.name || "Buyer"}
      </h1>

      <p className="text-gray-300 mb-10">
        Manage products, cart and orders.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Search Products */}

        <div
          onClick={() =>
            navigate("/search-products")
          }
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all shadow-xl"
        >
          <h2 className="text-2xl font-bold">
            Search Products
          </h2>

          <p className="mt-3 text-gray-300">
            Find products from vendors.
          </p>
        </div>

        {/* Cart */}

        <div
          onClick={() =>
            navigate("/cart")
          }
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all shadow-xl"
        >
          <h2 className="text-2xl font-bold">
            Cart
          </h2>

          <p className="mt-3 text-gray-300">
            View and manage cart items.
          </p>
        </div>

        {/* Orders */}

        <div
          onClick={() =>
            navigate("/orders")
          }
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all shadow-xl"
        >
          <h2 className="text-2xl font-bold">
            Orders
          </h2>

          <p className="mt-3 text-gray-300">
            View your order history.
          </p>
        </div>

      </div>

    </div>
  );
}