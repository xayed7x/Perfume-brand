import { NextResponse } from 'next/server';


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


  if (product) {
    return NextResponse.json(product);
  }

  return new Response(JSON.stringify({ message: 'Product not found' }), {
    status: 404,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}