import Link from "next/link";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

async function getProduct(id: string): Promise<Product | null> {
  const baseURL = process.env.NEXT_PUBLIC_APP_URL;
  if (!baseURL) {
    console.error("NEXT_PUBLIC_APP_URL environment variable is not set.");
    // In a real app, you might throw an error or handle this case differently
    return null;
  }

  const url = new URL(`/api/products/${id}`, baseURL);

  try {
    const res = await fetch(url.toString(), {
      cache: "no-store", // Fetch fresh data on every request
    });

    if (res.status === 404) {
      return null; // Product not found
    }

    if (!res.ok) {
      // Log more detailed error information if possible
      console.error(`Failed to fetch product ${id}: ${res.status} ${res.statusText}`);
      // Consider throwing an error that can be caught by an error boundary
      // For now, returning null to indicate failure
      return null;
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null; // Network error or other issue
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold">Product not found.</h1>
        <div className="mt-8">
          <Link href="/" className="text-blue-500 hover:underline">
            &larr; Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-16">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <Link href="/" className="text-blue-500 hover:underline">
            &larr; Back to Products
          </Link>
        </div>
        <article className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{product.name}</h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">{product.brand}</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          <div className="text-2xl sm:text-3xl font-semibold text-green-600">
            ${product.price.toFixed(2)}
          </div>
        </article>
      </div>
    </main>
  );
}
