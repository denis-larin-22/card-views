import { createHashRouter } from "react-router-dom";

import Root from "../Root";
import { CardPage } from "../pages/card-page/CardPage";

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