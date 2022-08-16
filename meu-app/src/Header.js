import React from 'react'
import './App.css'
function Header(props){
    return(
        <header className="header">
            <h1>{props.name}</h1>
            <ul className="menu">
                <li>teste 1</li>
                <li>teste 2</li>
            </ul>
        </header>
    );

}
export default Header;