import React from "react";
import { useState } from "react";

import './Treino.css'
function Treino(){

    const [text, setText]=useState("");
    const [items, setItems] = useState([]);
    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }
function addItem(event){
    event.preventDefault();
    if(text){
        setItems([...items,text])
        setText(""); 
    }
    
}

    return(<div className="container">
            <h1> Treino</h1>
            <form>
                <input onChange={handleChange} type="text" value={text}></input>
                <button onClick={addItem}>Enviar</button>
            </form>
            <ul>
               {items.map(item =><li>{item}</li>)}
            </ul>
           </div>)
}

export default Treino