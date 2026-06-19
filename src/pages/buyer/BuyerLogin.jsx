import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BuyerLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {

    const buyers =
      JSON.parse(localStorage.getItem("buyers")) || [];

    const buyer = buyers.find(
      (b) =>
        b.email === email &&
        b.password === password
    );

    if (buyer) {

      localStorage.setItem(
        "currentBuyer",
        JSON.stringify(buyer)
      );

      navigate("/buyer-dashboard");

    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl w-[450px]">

        <h1 className="text-white text-3xl font-bold mb-5">
          Buyer Login
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
            navigate("/buyer-signup")
          }
          className="mt-3 bg-green-600 text-white p-3 rounded w-full"
        >
          Signup
        </button>

      </div>

    </div>
  );
}