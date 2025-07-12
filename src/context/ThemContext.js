import React, { createContext,useEffect,useState } from 'react';

export const themes={
    light: "light",dark: "dark"
}
export const ThemContext = createContext({});
// main function
const ThemeProvider =({children})=>{

    const [theme, setTheme] = useState(localStorage.getItem('theme' || themes.dark));
    
    useEffect(()=>{
        document.body.classList.remove(themes.dark,themes.light)
        document.body.classList.add(theme);
    },[theme])

    const themeToggle = ()=>{
        const newTheme = theme === themes.dark ? themes.light : themes.dark;
        setTheme(newTheme);
        localStorage.setItem("theme",newTheme);//save the theme to local storage
        // setTheme(prevTheme =>(prevTheme === themes.dark ? themes.light : themes.dark))
    }
    return (
        <ThemContext.Provider value={{theme,themeToggle}}>
            {children}
        </ThemContext.Provider>
    );
}
export default ThemeProvider;



