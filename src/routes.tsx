import { createBrowserRouter } from "react-router-dom";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import { Navigate } from "react-router-dom";
import AdminProduct from "./pages/admin/product";
import AdminProductAdd from "./pages/admin/product/add";
import AdminProductEdit from "./pages/admin/product/edit";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Signin from "./pages/user/signin";
import Signup from "./pages/user/signup";
import Static from "./pages/admin/product/statictal";
import Listcart from "./pages/user/cart";
import Productlist from "./pages/Productlist";
import { useAppSelector } from "./store/hook";

export const routers = createBrowserRouter([
    { path: "/",
    element: <LayoutWebsite />,
    children: [
        { index: true, element: <Navigate to="homepage" /> },
        { path: "homepage", element: <About /> },
        { path: "product", element: <Homepage/> },
    ], },
    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            { path: "dashboard", element: <Static/> },
            { path: "product", element: <AdminProduct /> },
            { path: "product/add", element: <AdminProductAdd /> },
            { path: "product/:idProduct/edit", element: <AdminProductEdit /> },
        ],
    },
    { path: "/signup", element: <Signup />,},
    { path: "/signin", element: <Signin />,},
    { path: "/cart", element: <Listcart />,},
    { path: "/detail/:id", element: <Productlist/>,},
]);
