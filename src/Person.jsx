import React from 'react'
import { useContext } from 'react'
import { Themebutton } from './themeButton'
import { ThemeContext } from './contexts/darkmodeContext'

function Person({person}){
    const { isDarkTheme } = useContext(ThemeContext)
    
    return (
        <>
            <div className={`App ${isDarkTheme ? 'darkTheme' : 'lightTheme'}`}>
                    <h2>
                        i am {person.name}, My age - {person.age}
                    </h2>
                    <Themebutton/>
            </div>
        </>

    )




}
export default Person