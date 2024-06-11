import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from "react-router-dom";
import PortalDemo from './PortalDemo';
import Message from './message';
import HeroError from './HeroError';
import usercontext from './Context';

import { ThemeProvider } from './contexts/darkmodeContext';
import Person from './person';

const App = () => {
  return (
    <>
      <div className='container'>

        {/* <usercontext.Provider value='JACK'> */}
         
        <ThemeProvider>
            <Person person={{name:'parth', age:28}}/>
           
        </ThemeProvider>
            <h1>Hello from the main page of the app!</h1>
            <h3>Here are some examples of links to other pages</h3>
          

            {/* <HeroError name='BATMAN'/>
            <HeroError name='SUPERMAN'/> */}
            {/* <HeroError name='JOKER'/> */}
            
            <nav>
              <ul>
                <li>
                  <Link to="/profile">Profile page</Link>
                </li>
              </ul>
             </nav>
             
             <PortalDemo/>
        {/* </usercontext.Provider>  */}
      </div>
    </>
  );
};

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  ) 
}   

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}       */

export default App;

