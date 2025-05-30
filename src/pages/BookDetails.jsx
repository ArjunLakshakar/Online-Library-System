import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === id)
  );

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f9f9f9] to-white font-sans">
        <p className="text-gray-600 text-xl">Book not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f9f9f9] to-white font-sans">
      <div className="bg-white rounded-lg shadow p-8 max-w-3xl w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={book.image}
            alt={book.title}
            className="w-full md:w-1/3 h-auto rounded object-cover shadow"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#b28b51] mb-2">{book.title}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Category:</strong> {book.category}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Rating:</strong> {book.rating}
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Description:</strong><br />{book.description}
            </p>

            <Link
              to={`/books/${book.category}`}
              className="inline-block mt-6 text-sm px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition rounded"
            >
              Back to Browse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
