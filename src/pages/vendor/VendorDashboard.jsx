import { useNavigate } from "react-router-dom";

export default function VendorDashboard() {
  const navigate = useNavigate();

  const vendor = JSON.parse(
    localStorage.getItem("currentVendor")
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-10 text-white">

      <h1 className="text-5xl font-bold mb-3">
        Welcome {vendor?.vendorName || "Vendor"}
      </h1>

      <p className="text-gray-300 mb-10">
        Manage your products, orders and store.
      </p>

      <div className="grid md:grid-cols-4 gap-6">

        {/* Inventory */}

        <div
          onClick={() =>
            navigate("/vendor-inventory")
          }
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all"
        >
          <h2 className="text-2xl font-bold">
            Inventory
          </h2>
        </div>

        {/* Products */}

        <div
          onClick={() =>
            navigate("/vendor-products")
          }
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all"
        >
          <h2 className="text-2xl font-bold">
            Products
          </h2>
        </div>

        {/* Orders */}

        <div
          onClick={() =>
            navigate("/vendor-orders")
          }
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all"
        >
          <h2 className="text-2xl font-bold">
            Orders
          </h2>
        </div>

        {/* Store Setup */}

        <div
          onClick={() =>
            navigate("/vendor-store")
          }
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl cursor-pointer hover:scale-105 transition-all"
        >
          <h2 className="text-2xl font-bold">
            Store Setup
          </h2>
        </div>

      </div>
    </div>
  );
}