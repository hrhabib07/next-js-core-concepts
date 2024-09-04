import Link from "next/link";
import React from "react";

const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoesData = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center my-8">Here is your all shoes </h1>
      <div>
        <ul className="text-center flex items-center justify-center gap-4 my-8">
          <li>
            <Link href="/" className="p-2 border bg-gray-50">
              Home
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="p-2 border bg-gray-50">
              gallery
            </Link>
          </li>
          <li>
            <Link href="/all-shoes" className="p-2 border bg-gray-50">
              All Shoes
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {shoesData.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{shoe.title}</h2>
              <p className="text-gray-700 mb-4">{shoe.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">
                  ${shoe.price}
                </span>
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoesPage;
