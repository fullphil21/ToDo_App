import React from "react";
import { NavLink } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";

const Header = () => {
  return (
    <header className="h-[80px] w-full bg-slate-900 text-white flex items-center justify-end px-3 py-2 space-x-8 pr-10">
      <NavLink
        to={"/"}
        className="mr-auto pl-4 hover:text-sky-600 transition-colors duration-100 hover:scale-110"
      >
        <FcTodoList className="w-16 h-16" />
      </NavLink>
      <NavLink
        to={"/about"}
        className="hover:text-sky-600 transition-colors duration-100 hover:scale-110"
      >
        <div>About To Do</div>
      </NavLink>
      <NavLink
        to={"/"}
        className="hover:text-sky-600 transition-colors duration-100 hover:scale-110"
      >
        <div>Aufgaben verwalten</div>
      </NavLink>
    </header>
  );
};

export default Header;
