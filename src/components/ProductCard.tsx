// This is the ProductCard component.
// It displays a single product with its name, brand, and price.

interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, brand, price }) => {
  return (
    <div className="border p-4 shadow-lg rounded-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-500">{brand}</p>
      <p className="mt-2 text-lg font-semibold">${price}</p>
    </div>
  );
};

export default ProductCard;
