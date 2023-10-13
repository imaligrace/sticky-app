//IMPORTS
import App from './App';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import './index.css';

const routes = [
  // Route for the "/welcome" URL path
  {
    path: '/welcome',
    element: <Welcome />,
  },
  // Route for the "/about" URL path
  {
    path: '/about',
    element: <About />,
  },
  // Default route for other URLs
  {
    path: '/',
    element: <App />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
