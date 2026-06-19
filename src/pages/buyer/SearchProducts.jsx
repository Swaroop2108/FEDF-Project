import { useState } from "react";

export default function SearchProducts() {
  const [search, setSearch] = useState("");

  const products =
    JSON.parse(localStorage.getItem("products")) || [];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (item) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({
        ...item,
        qty: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert(`${item.name} added to cart`);
  };

  return (
    <div className="min-h-screen p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Search Products
      </h1>

      <input
        type="text"
        placeholder="Search Product..."
        className="w-full p-4 rounded-lg text-black mb-8"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length === 0 ? (
        <div className="text-center text-2xl mt-10">
          No Products Found
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {filteredProducts.map((item, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105 transition duration-300"
            >

              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="text-gray-300 mt-3">
                Category: {item.category}
              </p>

              <p className="text-green-400 text-xl font-bold mt-2">
                ₹ {item.price}
              </p>

              <p className="mt-2">
                Available Stock: {item.quantity}
              </p>

              <button
                onClick={() => addToCart(item)}
                className="bg-green-600 hover:bg-green-700 mt-4 px-5 py-2 rounded-lg w-full"
              >
                Add To Cart
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}