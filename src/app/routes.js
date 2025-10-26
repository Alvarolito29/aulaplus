import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
