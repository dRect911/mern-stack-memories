import { useState } from 'react';
// import { DarkModeSwitch } from 'react-toggle-dark-mode';
// import useDarkMode from './useDarkMode';

export default function Switcher({ dark, setDark }){
    /* const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(colorTheme === "light" ? true : false);

    const toggleDarkMode = () => {
        console.log('toggleDarkMode invoked');
        setTheme(!colorTheme);
        console.log(`colorTheme = ${colorTheme}`);
        setDarkMode(!darkMode);
        console.log(`darkMode = ${darkMode}`);
    }; */

    const toggleTheme = () => {
        console.log('toggled theme');
        console.log();
        setDark(!dark)
    };


    return(
        <>
            {/* <DarkModeSwitch 
                checked={darkMode}
                onChange={toggleDarkMode}
                size={24}
            /> */}

            {/* <div className="flex justify-center">
            <div className="form-check form-switch">
                <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm transition-all" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={dark} onChange={toggleTheme} />
                <label className="form-check-label inline-block dark:text-sky-100 text-slate-600 " htmlFor="flexSwitchCheckDefault"></label>
            </div>
            </div> */}

            <span className="material-icons-outlined hover:material-icons-filled hover:cursor-pointer p-1 rounded-full hover:bg-gray-200 text-slate-700 dark:text-slate-300 dark:hover:bg-gray-800 transition-all" alt="Toggle dark/light theme" onClick={toggleTheme} >{ dark === false ? 'dark_mode' : 'light_mode'}</span>

        </>
    );
}