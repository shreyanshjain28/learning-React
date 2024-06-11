import React, { useContext } from 'react'
import { ThemeContext } from './contexts/darkmodeContext'
import './App.css'

export const Themebutton = () =>{

    const { isDarkTheme, toggleTheme } = useContext(ThemeContext) 
    return(

        //adding onClick Event and the theme custom styles to the button
        <button onClick={toggleTheme} className={`${isDarkTheme ? 'lightBtn' : 'darkBtn'}`}>
          change Theme
        </button>
    
    )
}