import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navigation() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangueTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  return (
    <div className="flex justify-between items-center py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4 dark:text-white">Task App</h1>
      </Link>
      <div className="flex items-center space-x-6">
        <button onClick={handleChangueTheme}>
          <img src="/dark_theme.svg" className="w-10" alt="Toggle Theme" />
        </button>
        <button className="bg-indigo-500 px-3 py-2 rounded-lg text-white">
          <Link to="/tasks-create">Create Task</Link>
        </button>
      </div>
    </div>
  );
}
