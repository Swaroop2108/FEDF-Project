export default function Buyers() {
  const buyers =
    JSON.parse(localStorage.getItem("buyers")) || [];

  return (
    <div className="min-h-screen p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Registered Buyers
      </h1>

      {buyers.length === 0 ? (
        <h2>No Buyers Found</h2>
      ) : (
        <div className="grid md:grid-cols-3 gap-5">

          {buyers.map((buyer, index) => (
            <div
              key={index}
              className="bg-white/10 p-5 rounded-xl"
            >
              <h2 className="text-2xl">
                {buyer.name}
              </h2>

              <p>{buyer.email}</p>

              <p>{buyer.mobile}</p>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}