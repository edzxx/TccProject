import React, { useState, useEffect } from "react";

function Recebimento() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    // Simulando uma requisição ao banco de dados
    const dados = {
      numero: 123, // Substitua com a sua lógica de requisição ao banco de dados
    };
    setNumero(dados.numero);
  }, []);

  return (
    <div className="container">
      <div className="header">Quantidade total de alunos:</div>
      <div className="content">
        <div id="quantidadetotal">{numero}</div>
      </div>
      <div className="footer">
        <button id="buttonRecebimento" onClick={() => { window.location.href = "/TabelaDasSalas"; }}>Detalhes</button>
      </div>
    </div>
  );
}

export default Recebimento;
