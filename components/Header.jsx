"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <header className="border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-gray-900"
                >
                    MiniShop
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-6 md:flex">
                    <Link
                        href="/"
                        className="text-gray-700 transition hover:text-black"
                    >
                        Home
                    </Link>

                    <Link
                        href="/products"
                        className="text-gray-700 transition hover:text-black"
                    >
                        Products
                    </Link>

                    <Link
                        href="/cart"
                        className="font-medium text-gray-700 transition hover:text-black"
                    >
                        🛒 Cart
                        {cartCount > 0 && (
                            <span className="ml-1">
                                ({cartCount})
                            </span>
                        )}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded border px-3 py-2 text-sm md:hidden"
                >
                    Menu
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <nav className="border-t px-4 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            href="/products"
                            onClick={() => setMenuOpen(false)}
                        >
                            Products
                        </Link>

                        <Link
                            href="/cart"
                            onClick={() => setMenuOpen(false)}
                        >
                            🛒 Cart
                            {cartCount > 0 && (
                                <span className="ml-1">
                                    ({cartCount})
                                </span>
                            )}
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}