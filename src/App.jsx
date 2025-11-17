import { useEffect, useState } from "react";
import Home from "./view/Home";
import { UnitsProvider } from "./context/UnitsContext";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saveTheme = localStorage.getItem("theme");
    return saveTheme === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevTheme) => !prevTheme);
  };

  return (
    <>
      <UnitsProvider>
        <main className="app max-w-screen mx-auto min-h-screen dark:bg-bg-dark dark:bg-white-bg dark:text-text-dark z-0 @container">
          <Home
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            handleToggle={handleToggle}
          />
        </main>
      </UnitsProvider>
    </>
  );
}

export default App;
