import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Search } from './components/pages';
import { Category } from './components/pages/Category';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'search',
    element: <Category />,
  },
  {
    path: 'search/:categoryId',
    element: <Search />,
  },
  {
    path: 'about',
    element: <h2>This is the about page</h2>,
  },
  {
    path: 'products',
    element: <h2>This is the products page</h2>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
