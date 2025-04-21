import { Link } from 'react-router-dom';

const CheckoutSuccessPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mt-6">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-600 mt-4">Thank you for your purchase. Your order has been received and is being processed.</p>
        
        <div className="mt-8 space-y-4">
          <p className="text-gray-700">
            A confirmation email has been sent to your email address.
          </p>
          <p className="text-gray-700">
            Order #: <span className="font-semibold">{Math.floor(100000 + Math.random() * 900000)}</span>
          </p>
        </div>
        
        <div className="mt-10">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage; 