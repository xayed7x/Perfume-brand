// Mock data - in a real application, this would come from a database
const products = [
  { id: 1, name: "Chanel No. 5", brand: "Chanel", price: 100 },
  { id: 2, name: "J'adore", brand: "Dior", price: 120 },
  // Add more mock products if needed for testing
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const productId = parseInt(params.id, 10);

  if (isNaN(productId)) {
    return new Response(JSON.stringify({ message: "Invalid product ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const product = products.find((p) => p.id === productId);

  if (product) {
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "Product not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
