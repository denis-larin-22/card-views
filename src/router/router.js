import { createHashRouter } from "react-router-dom";

import Root from "../Root";
import { CardPage } from "../components/CardPage";

export const router = createHashRouter([
    {
        path: "/",
        element: <Root/>
    },
    {
        path: "/card-item",
        element: <CardPage/>,
    },
])