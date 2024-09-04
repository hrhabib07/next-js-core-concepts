import React from "react";
import Link from "next/link";

export const metadata = {
  title: "ABC Home page",
  description: "this is ABC website home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();
  // console.log(shoes);
  return (
    <div>
      <h1 className="text-4xl text-center my-8">This home page</h1>
      <div>
        <ul className="text-center">
          <Link href="/gallery" className="p-2 border bg-gray-50">
            gallery
          </Link>
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {shoes.map((shoe) => (
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

export default HomePage;
