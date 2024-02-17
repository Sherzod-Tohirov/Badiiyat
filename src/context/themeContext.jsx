import { createContext, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");
    localStorage.setItem("theme", theme);
    return (<themeContext.Provider value={{theme, setTheme}}>
        {children}
    </themeContext.Provider>)
}