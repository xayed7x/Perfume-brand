import ProductCard from "@/components/ProductCard";

// Define the Product type
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  // Determine the base URL based on the environment
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  // Construct the full, absolute URL
  const url = new URL("/api/products", baseURL);

  const res = await fetch(url.toString(), {
    cache: "no-store", // Ensure fresh data on every request
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-16 md:p-24">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                brand={product.brand}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </main>
  );
}
