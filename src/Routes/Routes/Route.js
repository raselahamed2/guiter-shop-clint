import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Shops from "../../Pages/Shop/Shops";
import Login from "../../Pages/Login/Login";

 export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shops></Shops>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])