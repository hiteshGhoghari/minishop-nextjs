"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen bg-gray-50 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <div className="rounded-2xl bg-white p-10 shadow-sm">
                        <div className="text-5xl">🛒</div>

                        <h1 className="mt-5 text-2xl font-bold text-gray-900">
                            Your Cart is Empty
                        </h1>

                        <p className="mt-3 text-gray-600">
                            Add some products to your cart to get started.
                        </p>

                        <Link
                            href="/products"
                            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-10 sm:py-16">
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */}
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                            MiniShop
                        </p>

                        <h1 className="mt-2 text-3xl font-bold text-gray-900">
                            Shopping Cart
                        </h1>
                    </div>

                    <button
                        type="button"
                        onClick={clearCart}
                        className="w-fit rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Cart Items */}
                    <div className="space-y-4 lg:col-span-2">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-2xl bg-white p-4 shadow-sm sm:p-6"
                            >
                                <div className="flex gap-4">
                                    {/* Product Image */}
                                    <Link
                                        href={`/products/${item.id}`}
                                        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-50 sm:h-32 sm:w-32"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            unoptimized
                                            className="object-contain p-3"
                                            sizes="128px"
                                        />
                                    </Link>

                                    {/* Product Details */}
                                    <div className="min-w-0 flex-1">
                                        <Link href={`/products/${item.id}`}>
                                            <h2 className="line-clamp-2 text-sm font-semibold text-gray-900 hover:underline sm:text-base">
                                                {item.title}
                                            </h2>
                                        </Link>

                                        <p className="mt-2 text-lg font-bold text-gray-900">
                                            ${item.price.toFixed(2)}
                                        </p>

                                        {/* Quantity */}
                                        <div className="mt-4 flex flex-wrap items-center gap-3">
                                            <div className="flex items-center rounded-lg border border-gray-300">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.id,
                                                            Math.max(1, item.quantity - 1)
                                                        )
                                                    }
                                                    className="px-3 py-2 text-gray-700 hover:bg-gray-100"
                                                >
                                                    −
                                                </button>

                                                <span className="min-w-10 text-center text-sm font-medium">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateQuantity(item.id, item.quantity + 1)
                                                    }
                                                    className="px-3 py-2 text-gray-700 hover:bg-gray-100"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-sm font-medium text-red-600 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    {/* Item Total */}
                                    <div className="hidden text-right sm:block">
                                        <p className="text-sm text-gray-500">Item Total</p>
                                        <p className="mt-1 font-bold text-gray-900">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-900">
                            Order Summary
                        </h2>

                        <div className="mt-6 flex items-center justify-between border-b pb-4">
                            <span className="text-gray-600">Subtotal</span>

                            <span className="font-semibold text-gray-900">
                                ${cartTotal.toFixed(2)}
                            </span>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">Total</span>

                            <span className="text-xl font-bold text-gray-900">
                                ${cartTotal.toFixed(2)}
                            </span>
                        </div>

                        <button
                            type="button"
                            className="mt-6 w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 active:scale-95"
                        >
                            Checkout
                        </button>

                        <Link
                            href="/products"
                            className="mt-3 block text-center text-sm font-medium text-gray-600 hover:text-black"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}