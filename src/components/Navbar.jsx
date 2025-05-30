import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  // const location = useLocation();

  // const linkClass = (path) =>
  //   `block px-4 py-2 rounded hover:bg-white/10 ${location.pathname === path ? 'bg-white/10 text-white' : 'text-white'
  //   }`;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <navbar className=" bg-black text-white p-6 flex justify-between ">
      <div className="">
        <h1 className="text-2xl font-bold tracking-widest">DIGITAL LIBRARY</h1>
        <p className="text-md text-gray-400">Books & Beyond</p>
      </div>

      {
        !isOpen && <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-3xl text-gray-600 z-50">
          <FontAwesomeIcon icon={faBars} />
        </button>
      }

      {/* desktop Nav */}
      <nav className=" sm:flex hidden md:space-x-12 space-x-6 items-center">
        <Link to="/" >HOME</Link>
        <Link to="/books" >BROWSE BOOKS</Link>
        <Link to="/addBook" >ADD BOOK</Link>
        <a href="https://github.com/ArjunLakshakar" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
      </nav>

      {isOpen &&
        <div className="sm:hidden fixed inset-0 bg-black text-white z-40 flex flex-col items-start p-6 transition-all max-w-xs mr-auto">
          <div className="flex justify-between items-center w-full mb-10  ">
            <div>
              <h2 className="text-xl font-bold tracking-widest">
                DIGITAL LIBRARY
              </h2>
              <p className="text-sm text-gray-400 flex justify-center">Books & Beyond</p>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-gray-700">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 items-center  w-full justify-center">
            <Link to="/" onClick={() => setIsOpen(!isOpen)} >HOME</Link>
            <Link to="/books" onClick={() => setIsOpen(!isOpen)} >BROWSE BOOKS</Link>
            <Link to="/addBook" onClick={() => setIsOpen(!isOpen)} >ADD BOOK</Link>
            <a href="https://github.com/ArjunLakshakar" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
          </nav>
        </div>
      }
    </navbar>
  );
}

export default Navbar;



// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="bg-white shadow p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold text-indigo-600">Online Library</h1>
//       <div className="space-x-4">
//         <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
//         <Link to="/books/Fiction" className="text-gray-700 hover:text-indigo-600">Browse Books</Link>
//         <Link to="/add" className="text-gray-700 hover:text-indigo-600">Add Book</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;