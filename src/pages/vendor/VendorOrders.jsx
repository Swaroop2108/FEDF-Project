export default function VendorOrders() {

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="min-h-screen p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Vendor Orders
      </h1>

      {orders.length === 0 ? (
        <h2>No Orders Yet</h2>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="bg-white/10 p-5 rounded-xl mb-4"
          >
            <h2>{order.name}</h2>

            <p>Price: ₹ {order.price}</p>

            <p>Quantity: {order.qty}</p>

            <p>Status: {order.status}</p>
          </div>
        ))
      )}

    </div>
  );
}