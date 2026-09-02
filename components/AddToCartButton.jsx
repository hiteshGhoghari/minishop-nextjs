"use client";

import { useState } from "react";

export default function AddToCartButton({ product }) {
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        setAdded(true);

        setTimeout(() => {
            setAdded(false);
        }, 1500);
    };

    return (
        <button
            type="button"
            onClick={handleAddToCart}
            className="w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 active:scale-95 sm:w-fit"
        >
            {added ? "Added ✓" : "Add to Cart"}
        </button>
    );
}