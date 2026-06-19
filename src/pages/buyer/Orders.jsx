export default function Orders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="min-h-screen p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <h2>No Orders Found</h2>
      ) : (
        <div className="grid gap-5">

          {orders.map((order, index) => (

            <div
              key={index}
              className="bg-white/10 p-5 rounded-xl"
            >
              <h2 className="text-2xl">
                {order.name}
              </h2>

              <p>Price: ₹ {order.price}</p>

              <p>Quantity: {order.qty}</p>

              <p>
                Total:
                ₹ {order.price * order.qty}
              </p>

              <p className="text-green-400">
                Status: Ordered
              </p>
            </div>

          ))}

        </div>
      )}

    </div>
  );
}