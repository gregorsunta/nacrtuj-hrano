import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
