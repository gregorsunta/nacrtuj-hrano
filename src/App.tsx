import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>This is the root (home) page</h1>,
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
