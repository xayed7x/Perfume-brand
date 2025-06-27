// This is the GET request handler for the products API endpoint.
// It returns a JSON array of two mock perfume objects.

export async function GET(request: Request) {
  const products = [
    {
      id: 1,
      name: "Chanel No. 5",
      brand: "Chanel",
      price: 100,
    },
    {
      id: 2,
      name: "J'adore",
      brand: "Dior",
      price: 120,
    },
  ];

  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}
