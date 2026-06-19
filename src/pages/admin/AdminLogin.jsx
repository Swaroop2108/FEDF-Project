import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {

    if (
      username === "admin" &&
      password === "admin123"
    ) {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl w-[400px]">

        <h1 className="text-white text-3xl mb-5 font-bold">
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded-lg"
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={loginHandler}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg"
        >
          Login
        </button>

        <p className="text-gray-300 mt-4">
          Demo:
          <br />
          admin / admin123
        </p>

      </div>

    </div>
  );
}