import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";
import BrandLogo from "./BrandLogo";


const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <div className="h-16 bg-white/90 backdrop-blur-xl border-b border-slate-200 z-50 flex items-center sticky top-0">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
        <BrandLogo />
        <ul
          className={`flex sm:gap-8 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-slate-800 sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          } transition-all duration-100 sm:h-fit bg-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li className="hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className={`${
                path === "/" ? "text-btnColor font-semibold" : "text-slate-600"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className={`${
                path === "/about" ? "text-btnColor font-semibold" : "text-slate-600"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          {token && (
            <li className="hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className={`${
                path === "/dashboard" ? "text-btnColor font-semibold" : "text-slate-600"
              }`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          )}
          {!token && (
            <Link to="/register">
              <li className="sm:ml-0 -ml-1 bg-custom-gradient text-white cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md hover:opacity-90 transition-all duration-150">
                Sign Up
              </li>
            </Link>
            )}

          {token && (
            <button
             onClick={onLogOutHandler}
             className="sm:ml-0 -ml-1 bg-rose-600 text-white cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md hover:opacity-90 transition-all duration-150">
              LogOut
            </button>
            )}
        </ul>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
        >
          {navbarOpen ? (
            <RxCross2 className="text-slate-700 text-3xl" />
          ) : (
            <IoIosMenu className="text-slate-700 text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;