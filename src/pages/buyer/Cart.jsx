import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const increaseQty = (index) => {
    const updated = [...cart];

    updated[index].qty += 1;

    updateCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];

    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
    }

    updateCart(updated);
  };

  const removeItem = (index) => {
    const updated = cart.filter(
      (_, i) => i !== index
    );

    updateCart(updated);
  };

  const checkout = () => {
    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrders = [
      ...existingOrders,
      ...cart.map((item) => ({
        ...item,
        status: "Ordered",
        orderDate: new Date().toLocaleString(),
      })),
    ];

    localStorage.setItem(
      "orders",
      JSON.stringify(newOrders)
    );

    localStorage.removeItem("cart");

    setCart([]);

    alert("Order Placed Successfully");

    navigate("/orders");
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl">
            Cart is Empty
          </h2>

          <button
            onClick={() =>
              navigate("/search-products")
            }
            className="mt-6 bg-blue-600 px-6 py-3 rounded-lg"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-5 rounded-xl mb-5 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <p>
                  Price: ₹ {item.price}
                </p>

                <p>
                  Subtotal:
                  ₹ {item.price * item.qty}
                </p>
              </div>

              <div className="flex items-center">

                <button
                  onClick={() =>
                    decreaseQty(index)
                  }
                  className="bg-red-500 px-3 py-2 rounded"
                >
                  -
                </button>

                <span className="mx-4 text-xl">
                  {item.qty}
                </span>

                <button
                  onClick={() =>
                    increaseQty(index)
                  }
                  className="bg-green-500 px-3 py-2 rounded"
                >
                  +
                </button>

                <button
                  onClick={() =>
                    removeItem(index)
                  }
                  className="bg-red-700 ml-4 px-4 py-2 rounded"
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

          <div className="mt-10">

            <h2 className="text-3xl font-bold">
              Grand Total: ₹ {total}
            </h2>

            <button
              onClick={checkout}
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg mt-5"
            >
              Checkout
            </button>

          </div>
        </>
      )}
    </div>
  );
}