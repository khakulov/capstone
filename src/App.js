import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
