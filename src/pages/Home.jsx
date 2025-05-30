import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

function Home() {
    const books = useSelector((state) => state.books.books);

    // Get top 5 books based on rating
    const topBooks = [...books]
        .filter((book) => book.rating)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return (
        <>
            <div className="flex min-h-[95vh] font-sans bg-gradient-to-b from-[#f9f9f9] to-white">
                <main className="flex-1 flex flex-col items-center text-center px-6 relative">
                    <img
                        src="../img/book.png"
                        alt="Open Book"
                        className="absolute lg:-bottom-8 bottom-0  lg:w-2/5 sm:w-3/6 xs:w-4/5 2/5  opacity-50 pointer-events-none "
                    />

                    <h2 className="xs:text-3xl text-2xl md:text-4xl font-bold text-[#b28b51] mb-4 mt-20 lg:tracking-wider">
                        DISCOVER HANDPICKED<br />BOOKS FOR EVERY READER
                    </h2>
                    <p className="text-gray-500 mb-6 max-w-md">
                        Dive into a universe of stories, ideas, and knowledge — curated just for passionate readers like you.
                    </p>

                    <Link
                        to="/books/Fiction"
                        className="xs:px-6 px-4 py-1  xs:py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition rounded mb-8"
                    >
                        BROWSE BOOKS
                    </Link>

                    {/* Categories */}
                    <h3 className="xs:text-2xl text-xl font-semibold mb-2 text-gray-700">Categories</h3>
                    <div className="flex xs:gap-12 gap-6 mb-6 flex-wrap justify-center">
                        {categories.map((category) => (
                            <Link key={category} to={`/books/${category}`} className=" text-[#b28b51] text-xl hover:underline">
                                {category}
                            </Link>
                        ))}
                    </div>
                </main>
            </div>

            {/* Popular Books Section */}
            <section className="mt-12 w-full mx-auto md:px-14 px-4 min-h-[55vh] ">
                <h3 className="text-4xl font-bold text-center text-[#b28b51] mb-6">POPULAR BOOKS</h3>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-16 gap-8">
                    {topBooks.map((book) => (
                        <Link to={`/book/${book.id}`} key={book.id} className="bg-white border rounded shadow hover:shadow-lg transition p-4">
                            <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded mb-3" />
                            <h4 className="text-lg font-semibold text-gray-800">{book.title}</h4>
                            <p className="text-sm text-gray-500">{book.author}</p>
                            <span className="text-xs text-yellow-600">⭐ {book.rating}</span>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;
