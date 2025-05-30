import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const categories = ['All Books', 'Fiction', 'Non-Fiction', 'Sci-Fi'];

function BrowseBooks() {
    const { category } = useParams();
    const books = useSelector((state) => state.books.books);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(category || 'All Books');

    useEffect(() => {
        if (category && selectedCategory !== category) {
            setSelectedCategory(category);
        }
    }, [category]);

    // Navigate when user selects a different category from dropdown
    useEffect(() => {
        if (selectedCategory !== category) {
            navigate(`/books/${selectedCategory}`);
        }
    }, [selectedCategory]);

    // Filter books
    const filteredBooks = books.filter((book) => {
        const matchesCategory = selectedCategory === 'All Books' || book.category === selectedCategory;
        const matchesSearch =
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex min-h-screen bg-gradient-to-b from-[#f9f9f9] to-white font-sans">
            <main className="flex-1 p-6 sm:p-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <h2 className="text-3xl font-bold text-[#b28b51]">Browse Books</h2>

                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        className="border border-gray-300 rounded px-4 py-2 w-full mb-6 focus:outline-none focus:border-[#b28b51]"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* Book Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <div key={book.id} className="bg-white rounded-lg shadow p-4">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="h-40 w-full object-cover rounded mb-4"
                                    />
                                    <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                                    <p className="text-gray-600 text-sm mb-2">Author: {book.author}</p>
                                    <Link
                                        to={`/book/${book.id}`}
                                        className="text-blue-600 hover:underline text-sm"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No books found.</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BrowseBooks;
