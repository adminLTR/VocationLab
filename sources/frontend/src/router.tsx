import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import HomePage from "./pages/home/HomePage";
import TestimoniosPage from "./pages/testimonios/TestimoniosPage";
import NosotrosPage from "./pages/nosotros/NosotrosPage";

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
            },
            {
                path: '/nosotros',
                element: <NosotrosPage/>
            }
        ]
    }
]);

export default router;