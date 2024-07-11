import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const getDataFromLocalStorage = localStorage.getItem("users");

    if (!getDataFromLocalStorage) {
      navigate("/");
      return;
    }
  }, []);
  return <>{children}</>;
}

export default ProtectedRoute;
