import react from "react";
import { useState } from "react/cjs/react.production.min";

function  Header (darkMode, onDarkModeClick){

    // const [darkModeClick, setDarkModeClick]=useState()   
    // function onDarkModeClick(){v
    //     setDarkModeClick(darkModeClick ? "Dark" : "Light")

    // }

    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>{darkMode?"Dark":"Light"}
           Mode
        </button>
      </header>
    )
    
}
export default Header;