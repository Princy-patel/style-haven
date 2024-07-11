import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignUpPage from "./components/Signup";
import HomePage from "./components/Home";
import ProtectedRoute from "./auth/protectedRoute";
import Base from "./Common/Base";
import LoginPage from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Base />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
