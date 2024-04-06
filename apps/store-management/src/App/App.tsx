import { useState } from "react";
import { router } from "../router/Router";
import { RouterProvider } from "react-router-dom";
import "common-components/lib/style.css";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
