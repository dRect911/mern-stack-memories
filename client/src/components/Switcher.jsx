export default function Switcher({ dark, setDark }){
   

    const toggleTheme = () => {
        console.log('toggled theme');
        console.log(localStorage.theme);
        setDark(!dark)
    };


    return(
        <>
            <span className="material-icons-outlined hover:material-icons-filled hover:cursor-pointer p-1 rounded-full hover:bg-gray-200 text-slate-700 dark:text-slate-300 dark:hover:bg-gray-800 transition-all" alt="Toggle dark/light theme" onClick={toggleTheme} >{ dark === false ? 'dark_mode' : 'light_mode'}</span>
        </>
    );
}