import {
  createBrowserRouter,
} from "react-router";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Resume from "../Pages/Resume";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      
      {
        path: "resume",
        Component: Resume
      },
      
    ]
  }
]);