export default function Products() {

  const products =
    JSON.parse(localStorage.getItem("products")) || [];

  return (
    <div className="min-h-screen p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        My Products
      </h1>

      {products.length === 0 ? (
        <h2 className="text-2xl">
          No Products Added Yet
        </h2>
      ) : (
        <div className="grid md:grid-cols-3 gap-5">

          {products.map((product, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-lg"
            >

              <h2 className="text-2xl font-bold">
                {product.name}
              </h2>

              <p className="mt-2">
                Category: {product.category}
              </p>

              <p>
                Price: ₹ {product.price}
              </p>

              <p>
                Stock: {product.quantity}
              </p>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}