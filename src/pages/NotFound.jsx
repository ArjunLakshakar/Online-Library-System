import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react'; // Optional: for icon

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f9f9f9] to-white p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4 text-red-500">
          <AlertTriangle className="h-12 w-12" />
        </div>
        <h2 className="text-4xl font-bold text-[#b28b51]">404</h2>
        <p className="text-xl mt-2 text-[#b28b51]">Page Not Found</p>
        <p className="mt-4 text-gray-500">
          Oops! The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block border border-gray-800 text-white bg-black px-6 py-2 rounded-full shadow hover:bg-white hover:text-black transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
