import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

function Base() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Base;
