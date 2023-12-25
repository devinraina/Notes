import React from "react";

const Header = ({ handleToggleDarkMode }) => {
return(
        <div className="header">
            <h1>Notes</h1>
            <label class="switch">
                <input 
                    onClick={() => 
                        handleToggleDarkMode((previousMode)=> !previousMode)
                    } 
                    type="checkbox" />
                <span class="slider round"></span>
            </label>
        </div>
    )
}

export default Header