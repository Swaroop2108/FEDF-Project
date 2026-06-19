import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VendorSignup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    vendorName: "",
    email: "",
    businessName: "",
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {

    const vendors =
      JSON.parse(localStorage.getItem("vendors")) || [];

    vendors.push(form);

    localStorage.setItem(
      "vendors",
      JSON.stringify(vendors)
    );

    alert("Vendor Registered Successfully");

    navigate("/vendor-login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl w-[450px]">

        <h1 className="text-white text-3xl font-bold mb-5">
          Vendor Signup
        </h1>

        <input
          name="vendorName"
          placeholder="Vendor Name"
          className="w-full p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          name="businessName"
          placeholder="Business Name"
          className="w-full p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          name="contact"
          placeholder="Contact Number"
          className="w-full p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-4"
          onChange={handleChange}
        />

        <button
          onClick={handleSignup}
          className="bg-green-600 w-full text-white p-3 rounded"
        >
          Signup
        </button>

      </div>

    </div>
  );
}