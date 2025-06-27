// Mock data - in a real application, this would come from a database
const products = [
  {
    id: 1,
    name: "Chanel No. 5",
    brand: "Chanel",
    price: 100,
    description: "A timeless classic, the epitome of feminine fragrance. Floral aldehyde with notes of jasmine, rose, sandalwood, and vanilla.",
  },
  {
    id: 2,
    name: "J'adore",
    brand: "Dior",
    price: 120,
    description: "A grand floral fragrance for women. Features ylang-ylang, Damascus rose, and sambac jasmine for an opulent and sensual scent.",
  },
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
