import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const buyers =
    JSON.parse(localStorage.getItem("buyers")) || [];

  const vendors =
    JSON.parse(localStorage.getItem("vendors")) || [];

  const products =
    JSON.parse(localStorage.getItem("products")) || [];

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-10 text-white">

      <h1 className="text-5xl font-bold mb-10">
        Admin Dashboard
      </h1>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl">Buyers</h3>
          <h1 className="text-4xl font-bold mt-2">
            {buyers.length}
          </h1>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl">Vendors</h3>
          <h1 className="text-4xl font-bold mt-2">
            {vendors.length}
          </h1>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl">Products</h3>
          <h1 className="text-4xl font-bold mt-2">
            {products.length}
          </h1>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl">Orders</h3>
          <h1 className="text-4xl font-bold mt-2">
            {orders.length}
          </h1>
        </div>

      </div>

      {/* Management Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        <div
          onClick={() =>
            navigate("/admin-buyers")
          }
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all shadow-xl"
        >
          <h2 className="text-3xl font-bold">
            Buyers
          </h2>

          <p className="mt-3 text-gray-300">
            View all registered buyers.
          </p>
        </div>

        <div
          onClick={() =>
            navigate("/admin-vendors")
          }
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all shadow-xl"
        >
          <h2 className="text-3xl font-bold">
            Vendors
          </h2>

          <p className="mt-3 text-gray-300">
            View all registered vendors.
          </p>
        </div>

        <div
          onClick={() =>
            navigate("/admin-orders")
          }
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all shadow-xl"
        >
          <h2 className="text-3xl font-bold">
            Orders
          </h2>

          <p className="mt-3 text-gray-300">
            View all placed orders.
          </p>
        </div>

      </div>

    </div>
  );
}