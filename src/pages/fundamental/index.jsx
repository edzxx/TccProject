import React from "react";
import "./fundamental.css";

function fundamental() {
    const handleClickseis = () => {
        window.location.href = '/seisano';
    }
    const handleClicksete = () => {
        window.location.href = '/seteano';
    }
    const handleClickoito = () => {
        window.location.href = '/oitoano';
    }
    const handleClicknove = () => {
        window.location.href = '/noveano';
    }
    
    return (
        <div className="container">
            <div className="header">Escolha Da Série</div>
            <div className="button-container">
                <button className="button" onClick={handleClickseis}>6° Ano</button>
                <button className="button" onClick={handleClicksete}>7° Ano</button>
                <button className="button" onClick={handleClickoito}>8° Ano</button>
                <button className="button" onClick={handleClicknove}>9° Ano</button>
            </div>
        </div>
    );
}

export default fundamental;