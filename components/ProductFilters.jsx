"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductFilters({ products }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");

    // Get unique categories
    const categories = [
        "all",
        ...new Set(products.map((product) => product.category)),
    ];

    // Search + Category Filter
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "all" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    // Sort Products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sort) {
            case "price-low":
                return a.price - b.price;

            case "price-high":
                return b.price - a.price;

            case "name-az":
                return a.title.localeCompare(b.title);

            case "name-za":
                return b.title.localeCompare(a.title);

            default:
                return 0;
        }
    });

    return (
        <div>
            {/* Search + Filter + Sort */}
            <div className="mb-8 grid gap-4 md:grid-cols-3">
                {/* Search */}
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                />

                {/* Category Filter */}
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm capitalize outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item === "all" ? "All Categories" : item}
                        </option>
                    ))}
                </select>

                {/* Sort */}
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                >
                    <option value="default">Sort: Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-az">Name: A to Z</option>
                    <option value="name-za">Name: Z to A</option>
                </select>
            </div>

            {/* Product Count */}
            <p className="mb-6 text-sm text-gray-500">
                {sortedProducts.length} products found
            </p>

            {/* Products */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedProducts.length > 0 ? (
                    sortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="col-span-full py-10 text-center text-gray-500">
                        No products found.
                    </p>
                )}
            </div>
        </div>
    );
}