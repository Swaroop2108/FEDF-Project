import { motion } from "framer-motion";
import {
  FaUserShield,
  FaShoppingCart,
  FaStore,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex flex-col justify-center items-center p-6">

      <h1 className="text-white text-5xl font-bold mb-4 text-center">
        Smart Vendor-Buyer
      </h1>

      <p className="text-gray-300 text-lg mb-12 text-center">
        Vendor Management & Product Procurement Platform
      </p>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">

        {/* Admin Card */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/admin-login")}
          className="cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl text-white"
        >
          <FaUserShield
            size={70}
            className="text-cyan-400"
          />

          <h2 className="text-3xl font-bold mt-5">
            Admin Login
          </h2>

          <p className="mt-4 text-gray-300">
            Manage vendors, buyers,
            analytics and notifications.
          </p>
        </motion.div>

        {/* Buyer Card */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/buyer-login")}
          className="cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl text-white"
        >
          <FaShoppingCart
            size={70}
            className="text-pink-400"
          />

          <h2 className="text-3xl font-bold mt-5">
            Buyer Portal
          </h2>

          <p className="mt-4 text-gray-300">
            Search products, compare vendors,
            manage cart and orders.
          </p>
        </motion.div>

        {/* Vendor Card */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/vendor-login")}
          className="cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl text-white"
        >
          <FaStore
            size={70}
            className="text-yellow-400"
          />

          <h2 className="text-3xl font-bold mt-5">
            Vendor Portal
          </h2>

          <p className="mt-4 text-gray-300">
            Manage inventory, products,
            orders and online store.
          </p>
        </motion.div>

      </div>
    </div>
  );
}