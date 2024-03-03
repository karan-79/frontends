import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import StoreOverview from "../feature/StoreOverview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<StoreOverview />}>
      <Route path="{name}" element></Route>
    </Route>
  )
);
