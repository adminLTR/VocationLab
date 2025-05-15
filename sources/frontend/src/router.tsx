import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import HomePage from "./pages/home/HomePage";
import TestimoniosPage from "./pages/testimonios/TestimoniosPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/testimonios',
                element: <TestimoniosPage/>
            }
        ]
    }
]);

export default router;