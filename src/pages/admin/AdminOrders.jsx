export default function AdminOrders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="min-h-screen p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Orders
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
              <h2>{order.name}</h2>

              <p>₹ {order.price}</p>

              <p>Qty: {order.qty}</p>

              <p>Status: {order.status}</p>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}