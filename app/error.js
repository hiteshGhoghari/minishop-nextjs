"use client";

export default function Error({
    error,
    reset,
}) {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h2 className="text-3xl font-bold mb-4">
                    Something went wrong!
                </h2>

                <p className="text-gray-600 mb-6">
                    We couldn't load this page. Please try again.
                </p>

                <button
                    onClick={() => reset()}
                    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}