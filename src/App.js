import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
