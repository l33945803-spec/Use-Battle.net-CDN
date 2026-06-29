import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Purchase from "./pages/Purchase";
import Rental from "./pages/Rental";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "purchase", Component: Purchase },
      { path: "rental", Component: Rental },
      { path: "*", Component: NotFound },
    ],
  },
]);
