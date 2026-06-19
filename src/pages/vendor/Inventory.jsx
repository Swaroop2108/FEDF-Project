import { useState, useEffect } from "react";

export default function Inventory() {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(savedProducts);
  }, []);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = () => {
    const updatedProducts = [...products, product];

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    setProduct({
      name: "",
      category: "",
      price: "",
      quantity: "",
    });
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter(
      (_, i) => i !== index
    );

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );
  };

  return (
    <div className="min-h-screen p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Inventory Management
      </h1>

      <div className="bg-white/10 p-6 rounded-xl mb-10">

        <input
          name="name"
          placeholder="Product Name"
          className="p-3 rounded text-black mr-2 mb-2"
          value={product.name}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          className="p-3 rounded text-black mr-2 mb-2"
          value={product.category}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          className="p-3 rounded text-black mr-2 mb-2"
          value={product.price}
          onChange={handleChange}
        />

        <input
          name="quantity"
          placeholder="Quantity"
          className="p-3 rounded text-black mr-2 mb-2"
          value={product.quantity}
          onChange={handleChange}
        />

        <button
          onClick={addProduct}
          className="bg-green-600 px-5 py-3 rounded"
        >
          Add Product
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-5">

        {products.map((item, index) => (

          <div
            key={index}
            className="bg-white/10 p-5 rounded-xl"
          >

            <h2 className="text-2xl font-bold">
              {item.name}
            </h2>

            <p className="mt-2">
              Category: {item.category}
            </p>

            <p>
              Price: ₹ {item.price}
            </p>

            <p>
              Stock: {item.quantity}
            </p>

            <button
              onClick={() => deleteProduct(index)}
              className="bg-red-600 mt-4 px-4 py-2 rounded"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}