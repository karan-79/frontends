import { useState } from "react";
import { router } from "../router/Router";
import { RouterProvider } from "react-router-dom";
import "common-components/dist/style.css";
function App() {
  return <div className="container bg-gray-800">
    <RouterProvider router={router} /></div>
}

export default App;
