"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const FALLBACK_IMAGE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='3' width='18' height='18' rx='2' ry='2'/><circle cx='8.5' cy='8.5' r='1.5'/><polyline points='21 15 16 10 5 21'/></svg>";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const [imgSrc, setImgSrc] = useState(product.image);

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Product Image */}
            <Link
                href={`/products/${product.id}`}
                className="relative block aspect-square overflow-hidden bg-gray-50"
            >
                <Image
                    src={imgSrc}
                    alt={product.title}
                    fill
                    unoptimized
                    onError={() => setImgSrc(FALLBACK_IMAGE)}
                    className="object-contain p-6 transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
            </Link>

            {/* Product Content */}
            <div className="flex flex-1 flex-col p-5">

                {/* Category */}
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                    {product.category}
                </p>

                {/* Title */}
                <Link href={`/products/${product.id}`}>
                    <h2 className="line-clamp-2 min-h-[48px] text-base font-semibold leading-6 text-gray-900 hover:underline">
                        {product.title}
                    </h2>
                </Link>

                {/* Bottom */}
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">

                    <span className="text-xl font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                    </span>

                    <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-95"
                    >
                        Add to Cart
                    </button>

                </div>
            </div>
        </article>
    );
}