import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./Navbar.css";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const menuBar = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/additem">Add Item</Link>
      </li>
      <li>
        <Link to="/myitem">My Item</Link>
      </li>
      <li>
        <Link to="/allitems">All Items</Link>
      </li>
      <li>
        <Link to="/myorders">My Orders</Link>
      </li>
    </>
  );
  const handelLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout Successfully");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div
      data-aos="fade-down"
      className="navbar bg-base-100 md:px-20 sm:px-10 px-2"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl"
          >
            {menuBar}
          </ul>
        </div>
        <Link className="text-xl font-bold font-serif text-green-500" to="/">
          BuyOnline
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-md font-bold font-serif nav">
          {menuBar}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <Link
            onClick={handelLogout}
            className=" border-green-500 rounded-md border-2 sm:py-2 py-1 font-bold  sm:px-4 px-2 font-serif"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className=" border-green-500 rounded-md border-2 sm:py-2 py-1 font-bold  sm:px-4 px-2 font-serif"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
