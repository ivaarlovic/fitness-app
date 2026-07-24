import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() =>{
        document.body.className = theme;
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) =>currentTheme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeContext, ThemeProvider};