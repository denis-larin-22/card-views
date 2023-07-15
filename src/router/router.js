import { createBrowserRouter } from "react-router-dom";

import Root from "../Root";
import { CardPage } from "../components/CardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>
    },
    {
        path: "/card-page",
        element: <CardPage/>,
    },
])