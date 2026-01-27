import Register from "../components/register/register";
import Login from "../components/login/login";
import MainLayout from "../layout/mainlayout";


const routes = [
  {
    path: "/",
    element: <MainLayout />,
  
  children: [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ],
}
];

export default routes;