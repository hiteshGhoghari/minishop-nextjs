import Link from "next/link";
export const metadata = {
  title: "Home",
  description:
    "Welcome to MiniShop. Find great products at affordable prices.",
};
export default function Home() {

  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-16 sm:py-20">
          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Welcome to MiniShop
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Simple Shopping.
              <br />
              Better Experience.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Discover quality products at great prices. Browse our collection
              and find something you'll love.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="rounded-lg bg-black px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-gray-800 active:scale-95"
              >
                Shop Now
              </Link>

              <Link
                href="/products"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-center text-sm font-medium text-gray-900 transition hover:bg-gray-100 active:scale-95"
              >
                View Products
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Why MiniShop?
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Everything you need for easy shopping
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-md">
              <div className="mb-5 text-3xl">✓</div>

              <h3 className="text-lg font-semibold text-gray-900">
                Quality Products
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Carefully selected products with quality in mind.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-md">
              <div className="mb-5 text-3xl">₹</div>

              <h3 className="text-lg font-semibold text-gray-900">
                Great Prices
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Find products at competitive and affordable prices.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-md sm:col-span-2 lg:col-span-1">
              <div className="mb-5 text-3xl">→</div>

              <h3 className="text-lg font-semibold text-gray-900">
                Easy Shopping
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy a simple and user-friendly shopping experience.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}