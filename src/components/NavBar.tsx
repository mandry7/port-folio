import { useState, useRef, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import home from "assets/image/homepiece.svg";
import about from "assets/image/pxfuel.jpg";
import project from "assets/image/project.png";
import logo from "assets/image/m.png";

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

  // theme toggle
  const [isDark, setIsDark] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="bg-gradient-to-r from-gray-100 to-[#344F1F]/90 dark:bg-gradient-to-r dark:from-gray-900 dark:to-[#344F1F] backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 py-2 sm:px-6 md:px-8 lg:px-12">
        <NavLink
          to="/"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white hover:cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
        >
          <img className="w-12 sm:w-16" src={logo} loading="lazy" />
        </NavLink>

        <div className="hidden md:flex md:items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-gray-900 dark:text-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-[#344F1F] bg-gray-100 px-3 py-2 rounded-md"
                : "flex items-center text-gray-900 dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gradient-to-r dark:from-gray-800 dark:to-[#344F1F] transition"
            }
          >
            <img className="w-8 mr-2" src={home} loading="lazy" />
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-gray-900 dark:text-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-[#344F1F] bg-gray-100 px-3 py-2 rounded-md"
                : "flex items-center text-gray-900 dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gradient-to-r dark:from-gray-800 dark:to-[#344F1F] transition"
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
                ? "flex items-center text-gray-900 dark:text-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-[#344F1F] bg-gray-100 px-3 py-2 rounded-md"
                : "flex items-center text-gray-900 dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gradient-to-r dark:from-gray-800 dark:to-[#344F1F] transition"
            }
          >
            <img className="w-8 mr-2" src={project} loading="lazy" />
            Projects
          </NavLink>
        </div>

        <label className="ml-3 md:ml-6 inline-flex items-center cursor-pointer select-none">
          <input
            type="checkbox"
            className="sr-only"
            checked={isDark}
            onChange={() => setIsDark((v) => !v)}
            aria-label="Toggle dark mode"
          />
          <div className="relative w-12 h-6">
            <div
              className={`absolute inset-0 rounded-full transition-colors duration-200 ${
                isDark
                  ? "dark:bg-gradient-to-r dark:from-gray-900 dark:to-[#344F1F]"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 flex items-center justify-center ${
                isDark ? "translate-x-6" : ""
              }`}
            >
              {isDark ? (
                <MdDarkMode size={12} className="text-[#344F1F]" />
              ) : (
                <MdLightMode size={12} className="text-[#F4991A]" />
              )}
            </div>
          </div>
          <span className="ml-2 text-sm text-gray-900 dark:text-white">
            {isDark ? "Dark" : "Light"}
          </span>
        </label>

        {/* Mobile dropdown */}
        <div className="relative md:hidden" ref={menuRef}>
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu size={24} />
          </button>

          {isOpen && (
            <div className="absolute z-[9999] right-0 mt-2 w-56 bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-[#344F1F] rounded-lg shadow-lg overflow-hidden">
              <NavLink
                to="/"
                className="flex items-center px-4 py-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                onClick={() => navigate("/")}
              >
                <img className="w-8 mr-3" src={home} loading="lazy" />
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => navigate("/about")}
                className="flex items-center px-4 py-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
                className="flex items-center px-4 py-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
