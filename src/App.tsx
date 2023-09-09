import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, Home, HowItWorks, Search } from './components/pages';
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
    path: '/howitworks',
    element: <HowItWorks />,
  },
  { path: '*', element: <Error /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
