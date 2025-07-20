import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './LayOuts/Home/Home';
import Error from './Components/Error';
import About from './LayOuts/About/About';
import Career from './LayOuts/Career/Career';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/career",
    element: <Career></Career>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
