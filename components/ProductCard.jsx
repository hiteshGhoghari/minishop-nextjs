import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-6 transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
            </div>

            {/* Product Content */}
            <div className="flex flex-1 flex-col p-5">

                {/* Category */}
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                    {product.category}
                </p>

                {/* Title */}
                <h2 className="line-clamp-2 min-h-[48px] text-base font-semibold leading-6 text-gray-900">
                    {product.title}
                </h2>

                {/* Bottom */}
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">

                    <span className="text-xl font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                    </span>

                    <button
                        type="button"
                        className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-95"
                    >
                        Add to Cart
                    </button>

                </div>
            </div>
        </article>
    );
}