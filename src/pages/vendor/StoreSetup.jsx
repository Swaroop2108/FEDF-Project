import { useState } from "react";

export default function StoreSetup() {

  const [storeName, setStoreName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const saveStore = () => {

    localStorage.setItem(
      "storeInfo",
      JSON.stringify({
        storeName,
        description,
      })
    );

    alert("Store Saved");
  };

  return (
    <div className="min-h-screen p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Store Setup
      </h1>

      <input
        type="text"
        placeholder="Store Name"
        className="w-full p-3 rounded text-black mb-4"
        onChange={(e) =>
          setStoreName(e.target.value)
        }
      />

      <textarea
        placeholder="Store Description"
        className="w-full p-3 rounded text-black mb-4"
        rows="5"
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <button
        onClick={saveStore}
        className="bg-green-600 px-6 py-3 rounded"
      >
        Save Store
      </button>

    </div>
  );
}