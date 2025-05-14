import { useTheme } from "@/Providers/Theme";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <header className='sticky top-0 z-50  w-full px-4 py-2 border-b bg-background/95 backdrop-blur'>
      <div className='container mx-auto flex items-center justify-between px-4 h-12'>
        <Link to='/'>
          <img src='/climate.png' alt='Logo' className='h-10' />
        </Link>

        <div>
          <div className={`flex items-center cursor-pointer transition-transform duration-500 ${isDarkMode ? "rotate-180" : "rotate-0"}`}>
            <div onClick={() => setTheme(isDarkMode ? "light" : "dark")} className='cursor-pointer'>
              {isDarkMode ? <Sun className='h-6 w-6 text-yellow-500 rotate-0 transition-all' /> : <Moon className='h-6 w-6 text-blue-500 rotate-0 transition-all' />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
