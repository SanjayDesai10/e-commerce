import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About ShopEasy</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            ShopEasy was founded in 2025 with a simple mission: to make online
            shopping easy, affordable, and accessible to everyone. What started
            as a small operation has grown into a thriving e-commerce platform
            offering a wide range of products across multiple categories.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We believe in providing a seamless shopping experience with
            transparent pricing, secure payments, and fast delivery. Our team
            works tirelessly to source the best products from around the world
            and bring them directly to your doorstep.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We carefully select every product to ensure it meets our high
                standards of quality and durability.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Fair Pricing</h3>
              <p className="text-gray-600">
                We believe in transparent and competitive pricing without hidden
                fees or charges.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We work hard to provide
                exceptional service and support.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions, feedback, or need assistance? Our customer support
            team is ready to help.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-gray-600">support@shopeasy.com</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9am - 6pm IST</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
