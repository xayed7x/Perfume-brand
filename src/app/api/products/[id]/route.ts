import { NextResponse } from 'next/server';

const products = [
  { id: '1', name: 'Chanel No. 5', brand: 'Chanel', price: 100, description: 'A timeless, iconic floral fragrance.' },
  { id: '2', name: 'J\'adore', brand: 'Dior', price: 120, description: 'A modern, glamorous, and luminous floral bouquet.' },
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
