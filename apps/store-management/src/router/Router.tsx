import {
    createRoutesFromElements,
    Route,
    createBrowserRouter,
} from "react-router-dom";
import StoreOverview from "../feature/StoreOverview";
import CreateStore from "../feature/CreateStore/CreateStore.tsx";

const routes = [
    {
        path: "/store/:storeid",
        element: <StoreOverview />,
    },
];
export const router = createBrowserRouter(routes, { basename: "/" });
