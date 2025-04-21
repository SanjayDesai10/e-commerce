import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="h-48 flex items-center justify-center bg-gray-100 p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
          <p className="text-sm text-gray-600 mt-1 h-12 overflow-hidden">{product.description.substring(0, 60)}...</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-full text-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 