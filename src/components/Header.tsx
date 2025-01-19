import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu on mobile
    }
  };

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm flex items-center justify-between px-6 py-3">
      <nav className="mx-auto flex items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          <a
            onClick={() => handleSmoothScroll("#home")}
            className="cursor-pointer"
          >
            <img
              src={isDarkMode ? "/srikanth-dark.png" : "/srikanth.png"}
              alt="Profile"
              className="w-28 h-14"
            />
          </a>
        </motion.div>

        <div className="hidden md:flex items-center space-x-6 ml-auto">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              onClick={() => handleSmoothScroll(`#${item.toLowerCase()}`)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-6"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        <div className="flex md:hidden items-center space-x-4 relative">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
            )}
          </button>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-lg py-2 z-40"
            >
              <ul className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      onClick={() =>
                        handleSmoothScroll(`#${item.toLowerCase()}`)
                      }
                      className="block px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          <button
            onClick={toggleDarkMode}
            className=" rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

const menuItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Education",
  "Projects",
  "Contact",
];

export default Header;
