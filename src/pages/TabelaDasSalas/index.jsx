import React, { useState, useEffect } from "react";

function TabelaDasTurmas() {
  const [turmas, setTurmas] = useState({});

  useEffect(() => {
    // Faça uma requisição ao seu banco de dados para obter os dados das turmas
    fetch("/api/turmas")
      .then(response => response.json())
      .then(data => setTurmas(data));
  }, []);

  const series = ["6º", "7º", "8º", "9º", "1º", "2º", "3º"];
  const turmasLetras = ["A", "B", "C", "D", "E", "F"];

  return (
    <div id="TabelaDasTurmas">
      <h2>Tabela das Turmas</h2>
      <table>
        <thead>
          <tr>
            <th>Série</th>
            {turmasLetras.map(letra => (
              <th key={letra}>{letra}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {series.map(série => (
            <tr key={série}>
              <td className="serie">{série}</td>
              {turmasLetras.map(letra => (
                <td key={letra} className={turmas[`${série}${letra}`] ? "turma" : "vazio"}>
                  {turmas[`${série}${letra}`] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaDasTurmas;