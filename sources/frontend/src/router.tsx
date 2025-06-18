import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import HomePage from "./pages/home/HomePage";
import TestimoniosPage from "./pages/testimonios/TestimoniosPage";
import NosotrosPage from "./pages/nosotros/NosotrosPage";
import LayoutResources from "./pages/layout-resources/LayoutResources";

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
    },
    {
        path: '/lab',
        element: <LayoutResources/>,
        children: [
            {
                index: true,
                element: <h1>CHAT</h1>
                
            }
        ]
    }
]);

export default router;