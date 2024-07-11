import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

function Base() {
  const [text, setText] = useState({
    userName: "",
  });

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("users"));

    console.log("localStorageItems", localStorageItems);
    if (localStorageItems) {
      setText(localStorageItems.userName);
    }
  }, []);
  return (
    <>
      <Navbar text={text} />
      <Outlet />
    </>
  );
}

export default Base;
