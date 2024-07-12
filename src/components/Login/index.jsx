import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = function (e) {
    e.preventDefault();

    const getUsersFromLocalStorage = JSON.parse(localStorage.getItem("users"));

    if (!getUsersFromLocalStorage) {
      alert("User not found! Please create an account first.");
      return;
    } else {
      if (getUsersFromLocalStorage.userName !== inputValue.username) {
        alert("Invalid username!");
        return;
      }

      if (getUsersFromLocalStorage.password !== inputValue.password) {
        alert("Password do not match!");
        return;
      }

      navigate("/home");
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="Username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Username
          </label>
          <input
            type="text"
            id="Username"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) =>
              setInputValue({ ...inputValue, username: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) =>
              setInputValue({ ...inputValue, password: e.target.value })
            }
          />
        </div>
        <div className="flex items-start mb-5">
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-600">
            Need an accound?
            <Link
              to="/"
              className="text-blue-600 hover:underline dark:text-blue-500"
              onClick={() => localStorage.removeItem("users")}
            >
              Sign up
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
