import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-xl font-bold text-white mb-4">ShopEasy</h2>
                  <p className="text-sm">Your one-stop shop for all your needs.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Shop</h3>
                    <ul className="space-y-2">
                      <li><a href="/products" className="text-sm hover:text-white">All Products</a></li>
                      <li><a href="/products?category=electronics" className="text-sm hover:text-white">Electronics</a></li>
                      <li><a href="/products?category=jewelry" className="text-sm hover:text-white">Jewelry</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                      <li><a href="/about" className="text-sm hover:text-white">About Us</a></li>
                      <li><a href="#" className="text-sm hover:text-white">Privacy Policy</a></li>
                      <li><a href="#" className="text-sm hover:text-white">Terms of Service</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <ul className="space-y-2">
                      <li className="text-sm">Email: support@shopeasy.com</li>
                      <li className="text-sm">Phone: +1 (555) 123-4567</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
                © {new Date().getFullYear()} ShopEasy. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
