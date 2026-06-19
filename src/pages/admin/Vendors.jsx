export default function Vendors() {
  const vendors =
    JSON.parse(localStorage.getItem("vendors")) || [];

  return (
    <div className="min-h-screen p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Registered Vendors
      </h1>

      {vendors.length === 0 ? (
        <h2>No Vendors Found</h2>
      ) : (
        <div className="grid md:grid-cols-3 gap-5">

          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-white/10 p-5 rounded-xl"
            >
              <h2 className="text-2xl">
                {vendor.vendorName}
              </h2>

              <p>{vendor.email}</p>

              <p>{vendor.businessName}</p>

              <p>{vendor.contact}</p>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}