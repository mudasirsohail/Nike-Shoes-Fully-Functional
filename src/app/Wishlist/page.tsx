"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type Product = {
  productName: string;
  id: string;
  price: number;
  imageUrl: string;
};

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-700">Your wishlist is empty.</p>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((product) => (
            <li
              key={product.id}
              className="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold">{product.productName}</h2>
              <p className="text-lg text-gray-600">${product.price}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                >
                  Remove
                </button>
                <Link href={`/Shoes/${product.id}`}>
                  <button className="py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-900">
                    View Product
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
