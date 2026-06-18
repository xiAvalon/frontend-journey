import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <nav className="p-5 flex items-center max-w-150 my-0 mx-auto border-b border-divider">
            <h1 className="text-3xl text-brand font-bold">My Blog</h1>
            <div className="flex gap-4 ml-auto">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/create' className="nav-link">New Blog</Link>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:shadow-md dark:hover:shadow-none dark:hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
