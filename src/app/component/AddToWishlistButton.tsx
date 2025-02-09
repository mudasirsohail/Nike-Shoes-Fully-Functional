"use client";

import React from "react";

type AddToWishlistButtonProps = {
  product: {
    id: string;
    productName: string;
    price: number;
    imageUrl: string;
  };
};

const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({
  product,
}) => {
  const handleAddToWishlist = () => {
    // Get existing wishlist from local storage
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const isAlreadyInWishlist = existingWishlist.some(
      (item: { id: string }) => item.id === product.id
    );

    if (isAlreadyInWishlist) {
      alert("Item is already in your wishlist!");
      return;
    }

    const updatedWishlist = [...existingWishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    alert("Item added to wishlist!");
  };

  return (
    <button
      onClick={handleAddToWishlist}
      className="w-full md:w-[250px] bg-black text-white py-2 px-4 rounded-full text-center hover:bg-gray-800 transition transform hover:scale-105 active:scale-95"
    >
      Add to Wishlist
    </button>
  );
};

export default AddToWishlistButton;
