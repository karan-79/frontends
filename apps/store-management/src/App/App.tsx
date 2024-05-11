import { router } from "../router/Router";
import { RouterProvider } from "react-router-dom";
import { Box, Container } from "@mui/material";

function App() {
    return (
        <Container>
            <RouterProvider router={router} />
        </Container>
    );
}

export default App;
