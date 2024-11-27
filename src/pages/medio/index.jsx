import React from "react";
import "./medio.css";

function medio() {
    const handleClickum = () => {
        window.location.href = '/umano';
    }
    const handleClickdois = () => {
        window.location.href = '/doisano';
    }
    const handleClicktres = () => {
        window.location.href = '/tresano';
    }
    
    return (
        <div className="container">
            <div className="header">Escolha Da Série</div>
            <div className="button-container">
                <button id="Bmedio" className="button" onClick={handleClickum}>1° Ano</button>
                <button id="Bmedio" className="button" onClick={handleClickdois}>2° Ano</button>
                <button id="Bmedio" className="button" onClick={handleClicktres}>3° Ano</button>
            </div>
        </div>
    );
}

export default medio;