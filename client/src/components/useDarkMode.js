import { useState, useEffect } from "react";

export default function useDarkMode(){
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === false ? 'dark' : 'light';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // Save theme to localStorage
        localStorage.setItem('theme', theme);
        //log for safety
        console.log('toggled theme');
        console.log(`colorTheme = ${colorTheme}`);
        console.log(`theme = ${theme}`);
        console.log(`localStorage.theme = ${localStorage.theme}`);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}