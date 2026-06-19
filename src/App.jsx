import { Routes, Route } from "react-router-dom";

// Landing Page
import LandingPage from "./pages/LandingPage";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Buyers from "./pages/admin/Buyers";
import Vendors from "./pages/admin/Vendors";
import AdminOrders from "./pages/admin/AdminOrders";

// Buyer Pages
import BuyerLogin from "./pages/buyer/BuyerLogin";
import BuyerSignup from "./pages/buyer/BuyerSignup";
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import SearchProducts from "./pages/buyer/SearchProducts";
import Cart from "./pages/buyer/Cart";
import Orders from "./pages/buyer/Orders";

// Vendor Pages
import VendorLogin from "./pages/vendor/VendorLogin";
import VendorSignup from "./pages/vendor/VendorSignup";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import Inventory from "./pages/vendor/Inventory";
import Products from "./pages/vendor/Products";
import VendorOrders from "./pages/vendor/VendorOrders";
import StoreSetup from "./pages/vendor/StoreSetup";

function App() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Admin */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-buyers" element={<Buyers />} />
      <Route path="/admin-vendors" element={<Vendors />} />
      <Route path="/admin-orders" element={<AdminOrders />} />

      {/* Buyer */}
      <Route path="/buyer-login" element={<BuyerLogin />} />
      <Route path="/buyer-signup" element={<BuyerSignup />} />
      <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
      <Route path="/search-products" element={<SearchProducts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />

      {/* Vendor */}
      <Route path="/vendor-login" element={<VendorLogin />} />
      <Route path="/vendor-signup" element={<VendorSignup />} />
      <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      <Route path="/vendor-inventory" element={<Inventory />} />
      <Route path="/vendor-products" element={<Products />} />
      <Route path="/vendor-orders" element={<VendorOrders />} />
      <Route path="/vendor-store" element={<StoreSetup />} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center text-white text-4xl">
            404 - Page Not Found
          </div>
        }
      />

    </Routes>
  );
}

export default App;