import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Main from "../layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import UserDetails from "../Pages/UserDetails";
import Colleges from "../Pages/Colleges";
import CollegeDetails from "../Pages/CollegeDetails";
import Admission from "../Pages/Admission";
import MyCollege from "../Pages/MyCollege";
import AdmissionForm from "../Pages/AdmissionForm";




const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
              path: "/userDetails",
              element: <UserDetails></UserDetails>,
            },
            {
              path: "/colleges",
              element: <Colleges></Colleges>,
            },
            {
              path: "/collegeDetails/:id",
              element: (
                <PrivateRoute>
                  <CollegeDetails></CollegeDetails>
                </PrivateRoute>
              ),
              loader: ({ params }) =>
                fetch(`http://localhost:5000/colleges/${params.id}`),
            },
            {
              path: "/admission",
              element: <Admission></Admission>,
            },
            {
              path: "/myCollege",
              element: <MyCollege></MyCollege>,
            },
            {
              path: "/admissionForm/:id",
              element: (
                <PrivateRoute>
                  <AdmissionForm></AdmissionForm>
                </PrivateRoute>
              ),
              loader: ({ params }) =>
                fetch(`http://localhost:5000/colleges/${params.id}`),
            }
        ]
    }
])

export default route;