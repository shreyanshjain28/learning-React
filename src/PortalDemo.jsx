import React, { useContext } from "react";
import ReactDOM from "react-dom";
import usercontext from "./Context";

export default function PortalDemo(){

    const name = useContext(usercontext)
    return ReactDOM.createPortal(

        <>
            <h2>PORTALS DEMO</h2>
            <h1>
               
                hello - "{name}" from context api  
            </h1>
            button 
        </>
        ,
        document.getElementById('portal-root')
    )
}