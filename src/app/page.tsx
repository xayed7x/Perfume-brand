// Define the Product type
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  // In a real application, you would fetch from an external API
  // or a database. For this example, we're using the mock API
  // we created in the previous step.
  // Ensure the URL is absolute for server-side fetching.
  const res = await fetch("http://localhost:3000/api/products", {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id} className="text-lg mb-2">
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </main>
  );
}
