import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BrowseBooks from './pages/BrowseBooks.jsx'
import BookDetails from './pages/BookDetails.jsx'
import AddBook from './pages/AddBook.jsx'
import NotFound from './pages/NotFound.jsx'

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/books/:category',
        element: <BrowseBooks />
      },
      {
        path: '/books',
        element: <BrowseBooks />
      },
      {
        path: "/book/:id",
        element: <BookDetails />
      },
      {
        path: "/addBook",
        element: <AddBook />
      },
    ],
    errorElement: <NotFound />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>,
)
