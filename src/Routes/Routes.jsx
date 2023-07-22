import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Main from "../layout/Main";




const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default route;