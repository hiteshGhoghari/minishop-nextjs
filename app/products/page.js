import ProductCard from "@/components/ProductCard";

async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <main className="min-h-screen bg-gray-50">

            {/* Page Header */}
            <section className="border-b bg-white">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                        MiniShop Collection
                    </p>

                    <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                All Products
                            </h1>

                            <p className="mt-3 max-w-2xl text-gray-600">
                                Explore our collection and find products you'll love.
                            </p>
                        </div>

                        <p className="text-sm text-gray-500">
                            {products.length} products
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Listing */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>

        </main>
    );
}