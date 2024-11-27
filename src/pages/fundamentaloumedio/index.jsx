import React from 'react';
import './fundamentaloumedio.css';

function EscolhaSerie() {
  const handleFundamentalClick = () => {
    window.location.href = '/fundamental';
  };

  const handleMedioClick = () => {
    window.location.href = '/medio';
  };

  return (
    <div className="container">
      <div className="header">Escolha Da Série</div>
      <div className="button-containerE">
        <button className="buttonE" id="Fundbutton1" onClick={handleFundamentalClick}>
          Ensino Fundamental
        </button>
        <button className="buttonE" id="Medbutton2" onClick={handleMedioClick}>
          Ensino Médio
        </button>
      </div>
    </div>
  );
}

export default EscolhaSerie;