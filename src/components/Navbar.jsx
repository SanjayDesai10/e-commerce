import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link
                to="/"
                className="flex items-center py-5 px-2 text-gray-100"
              >
                <span className="font-bold text-xl">ShopEasy</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-5 px-3 text-gray-300 hover:text-white">
                Home
              </Link>
              <Link
                to="/products"
                className="py-5 px-3 text-gray-300 hover:text-white"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="py-5 px-3 text-gray-300 hover:text-white"
              >
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              <span className="mr-1">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button p-2 text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <Link
          to="/"
          className="block py-2 px-4 text-sm text-gray-300 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="block py-2 px-4 text-sm text-gray-300 hover:text-white"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="block py-2 px-4 text-sm text-gray-300 hover:text-white"
        >
          About
        </Link>
        <Link
          to="/cart"
          className="block py-2 px-4 text-sm text-gray-300 hover:text-white"
        >
          Cart{" "}
          {totalItems > 0 && (
            <span className="ml-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
