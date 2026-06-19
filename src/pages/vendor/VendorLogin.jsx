import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VendorLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {

    // Demo Account

    if (
      email === "vendor@test.com" &&
      password === "vendor123"
    ) {
      navigate("/vendor-dashboard");
      return;
    }

    const vendors =
      JSON.parse(localStorage.getItem("vendors")) || [];

    const vendor = vendors.find(
      (v) =>
        v.email === email &&
        v.password === password
    );

    if (vendor) {

      localStorage.setItem(
        "currentVendor",
        JSON.stringify(vendor)
      );

      navigate("/vendor-dashboard");

    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl w-[450px]">

        <h1 className="text-white text-3xl font-bold mb-5">
          Vendor Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-3"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-4"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={loginHandler}
          className="bg-blue-600 text-white p-3 rounded w-full"
        >
          Login
        </button>

        <button
          onClick={() =>
            navigate("/vendor-signup")
          }
          className="bg-green-600 text-white p-3 rounded w-full mt-3"
        >
          Signup
        </button>

        <p className="text-white mt-4">
          Demo:
          <br />
          vendor@test.com
          <br />
          vendor123
        </p>

      </div>

    </div>
  );
}