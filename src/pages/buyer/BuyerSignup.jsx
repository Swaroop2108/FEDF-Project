import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BuyerSignup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    const buyers =
      JSON.parse(localStorage.getItem("buyers")) || [];

    buyers.push(form);

    localStorage.setItem(
      "buyers",
      JSON.stringify(buyers)
    );

    alert("Signup Successful");

    navigate("/buyer-login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl w-[450px]">

        <h1 className="text-white text-3xl font-bold mb-5">
          Buyer Signup
        </h1>

        <input
          name="name"
          placeholder="Name"
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
          name="mobile"
          placeholder="Mobile"
          className="w-full p-3 rounded mb-3"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-4"
          onChange={handleChange}
        />

        <button
          onClick={handleSignup}
          className="bg-green-600 text-white p-3 rounded w-full"
        >
          Signup
        </button>

        <p
          onClick={() => navigate("/buyer-login")}
          className="text-white mt-4 cursor-pointer"
        >
          Already have an account? Login
        </p>

      </div>

    </div>
  );
}