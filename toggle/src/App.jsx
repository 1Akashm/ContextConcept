import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-col gap-10 justify-center items-center h-dvh w-full ">
          <h1 className="text-red-200 font-extrabold text-7xl">
            Toggle Theme Context
          </h1>
          <ThemeButton />
          <Card />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
