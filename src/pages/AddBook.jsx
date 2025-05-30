import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/slices/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const [form, setForm] = useState({
        title: '',
        author: '',
        description: '',
        rating: '',
        category: '',
        image: '',
    });
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, author, description, rating, category, image } = form;
        if (!title || !author || !description || !rating || !category || !image) {
            setError('All fields are required');
            return;
        }
        dispatch(addBook({
            ...form,
            rating: parseFloat(rating),
        }));
        navigate(`/books/${category}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-b from-[#f9f9f9] to-white font-sans">
            <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 w-full max-w-2xl transition-all">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#b28b51] mb-6 text-center">
                    Add a New Book
                </h2>

                {error && <p className="text-red-600 mb-4 text-center text-sm sm:text-base">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Title"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b28b51] transition"
                    />
                    <input
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        placeholder="Author"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b28b51] transition"
                    />
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b28b51] transition"
                        rows="4"
                    />
                    <input
                        name="rating"
                        value={form.rating}
                        onChange={handleChange}
                        placeholder="Rating (0-5)"
                        type="number"
                        min="0"
                        max="5"
                        step="0.1"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b28b51] transition"
                    />

                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b28b51] transition"
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>

                    <input
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b28b51] transition"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#b28b51] text-white py-3 rounded-lg hover:bg-[#a07b45] transition font-medium"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;
