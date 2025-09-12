import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import home from "assets/image/homepiece.svg";
import about from "assets/image/pxfuel.jpg";
import project from "assets/image/project.png";
import logo from "assets/image/mylogo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md shadow-md w-full relative z-50">
      <div className="flex justify-between items-center px-4 py-2 sm:px-6 md:px-8 lg:px-12">
        <NavLink
          to="/"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
        >
          <img className="w-8 sm:w-16" src={logo} loading="lazy" />
        </NavLink>

        <div className="hidden md:flex md:items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-white bg-gradient-to-r from-gray-800 to-blue-500 px-3 py-2 rounded-md"
                : "flex items-center text-white px-3 py-2 rounded-md hover:bg-gradient-to-r from-gray-800 to-blue-500 transition"
            }
          >
            <img className="w-8 mr-2" src={home} loading="lazy" />
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-white bg-gradient-to-r from-gray-800 to-blue-500 px-3 py-2 rounded-md"
                : "flex items-center text-white px-3 py-2 rounded-md hover:bg-gradient-to-r from-gray-800 to-blue-500 transition"
            }
          >
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={about}
              loading="lazy"
            />
            About
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-white bg-gradient-to-r from-gray-800 to-blue-500 px-3 py-2 rounded-md"
                : "flex items-center text-white px-3 py-2 rounded-md hover:bg-gradient-to-r from-gray-800 to-blue-500 transition"
            }
          >
            <img className="w-8 mr-2" src={project} loading="lazy" />
            Projects
          </NavLink>
        </div>

        {/* Mobile dropdown */}
        <div className="relative md:hidden" ref={menuRef}>
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu />
          </button>

          {isOpen && (
            <div className="absolute z-[9999] right-0 mt-2 w-56 bg-gradient-to-r from-gray-800 to-blue-500 rounded-lg shadow-lg overflow-hidden">
              <NavLink
                to="/"
                className="flex items-center px-4 py-3 text-white hover:bg-gray-700 transition"
                onClick={() => navigate("/")}
              >
                <img className="w-8 mr-3" src={home} loading="lazy" />
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => navigate("/about")}
                className="flex items-center px-4 py-3 text-white hover:bg-gray-700 transition"
              >
                <img
                  className="w-8 h-8 rounded-full mr-3"
                  src={about}
                  loading="lazy"
                />
                About
              </NavLink>
              <NavLink
                to="/project"
                className="flex items-center px-4 py-3 text-white hover:bg-gray-700 transition"
              >
                <img className="w-8 mr-3" src={project} loading="lazy" />
                Projects
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
