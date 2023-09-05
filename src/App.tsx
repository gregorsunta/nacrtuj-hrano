import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, Home, Search } from './components/pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
  { path: '*', element: <Error /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
