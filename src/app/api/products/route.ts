import { NextResponse } from 'next/server';

// This is our mock database. In a real app, you'd fetch this from a database.
const products = [
  { id: '1', name: 'Chanel No. 5', brand: 'Chanel', price: 100 },
  { id: '2', name: 'J\'adore', brand: 'Dior', price: 120 },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

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