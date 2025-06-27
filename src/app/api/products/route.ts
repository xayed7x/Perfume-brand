// This is the GET request handler for the products API endpoint.
// It returns a JSON array of two mock perfume objects.

export async function GET() {
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
  ];

  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}
