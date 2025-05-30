import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-black text-white py-8 ">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 xs:gap-8 gap-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold">DIGITAL LIBRARY</h2>
                        <p className="text-sm sm:text-xl text-gray-400">Books & Beyond</p>
                        <p className="text-sm sm:text-xl mt-4 text-gray-500">Discover a world of knowledge with over 2.4 million books.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold sm:text-xl mb-2">Categories</h3>
                        <ul className="space-y-1 text-sm sm:text-lg text-gray-400">
                            <li><a href="/books/Fiction" className="hover:underline">Fiction</a></li>
                            <li><a href="/books/Non-Fiction" className="hover:underline">Non-Fiction</a></li>
                            <li><a href="/books/Sci-Fi" className="hover:underline">Sci-Fi</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold sm:text-xl mb-2">Quick Links</h3>
                        <ul className="space-y-1 text-sm sm:text-lg text-gray-400">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/books" className="hover:underline">Browse Books</a></li>
                            <li><a href="/addBook" className="hover:underline">Add Book</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold sm:text-xl mb-2">Contact</h3>
                        <p className="text-sm sm:text-lg text-gray-400 flex-wrap">Email: info@Digital-library.com</p>
                        <p className="text-sm sm:text-lg text-gray-400">Phone: +91 123 456 7890</p>
                    </div>
                </div>
                <div className="text-center text-xs sm:text-lg text-gray-500 mt-8 border-t border-gray-800 pt-4">
                    &copy; {new Date().getFullYear()} Digital Library. All rights reserved.
                </div>
            </footer>

        </div>
    )
}

export default Footer;
