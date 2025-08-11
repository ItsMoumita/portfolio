import {
  createBrowserRouter,
} from "react-router";
import Layout from "../Layout";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      
    ]
  }
]);