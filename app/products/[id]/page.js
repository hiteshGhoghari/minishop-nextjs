import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { getProduct } from "@/lib/api";



export default async function ProductDetailsPage({ params }) {
    const { id } = await params;
    const product = await getProduct(id);

    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-4">

                {/* Back Link */}
                <Link
                    href="/products"
                    className="mb-8 inline-block text-sm font-medium text-gray-600 hover:text-black"
                >
                    ← Back to Products
                </Link>

                {/* Product Details */}
                <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">

                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-contain p-10"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Product Information */}
                    <div className="flex flex-col justify-center">

                        <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                            {product.category}
                        </p>

                        <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                            {product.title}
                        </h1>

                        <p className="mt-5 text-3xl font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                        </p>

                        <p className="mt-6 leading-7 text-gray-600">
                            {product.description}
                        </p>

                        <AddToCartButton product={product} />

                    </div>
                </div>
            </div>
        </main>
    );
}