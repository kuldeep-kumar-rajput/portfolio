import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./page/About";
import Project from "./page/Project.jsx";
import Skill from "./page/Skill.jsx";
import Contact from "./page/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <Main /> }, 
      { path: "about", element: <About /> },
      { path: "project", element: <Project /> },
      { path: "skill", element: <Skill /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
