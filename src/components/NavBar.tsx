import { NavLink } from "react-router-dom";

import home from "assets/image/homepiece.svg";
import about from "assets/image/pxfuel.jpg";
import project from "assets/image/project.png";
import logo from "assets/image/mylogo.svg";

import "assets/scss/navbar.scss";

const NavBar = () => {
  return (

      <nav className="nav-container">
        <div className="nav-item-container">
          <NavLink to="/" className="logo">
            <img className="w-16" src={logo} loading="lazy" />
          </NavLink>

          <div className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <div className="flex items-center">
                <img className="mx-2 w-12 " src={home} loading="lazy"/>
                <span className="ml-4 uppercase">home</span>
              </div>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-item active " : "nav-item"
              }
            >
              <div className="flex items-center ">
                <img className="mx-2 w-12 h-12 rounded-full " src={about} loading="lazy" />
                <span className="ml-4 uppercase">About</span>
              </div>
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "nav-item active " : "nav-item"
              }
            >
              <div className="flex items-center">
                <img className="mx-2 w-12" src={project} loading="lazy" />
                <span className="ml-4 uppercase">projects</span>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>

  );
};

export default NavBar;
