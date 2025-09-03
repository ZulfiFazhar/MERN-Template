import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { UserPage } from "../pages/UserPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <UserPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
