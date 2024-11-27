import React, {useState, useEffect} from "react";

function recebimento() {
  const [valor, setValor] = useState("");
  useEffect(() => {
    // Chama a API para pegar o valor do banco de dados
    const getValor = async () => {
      const response = await fetch("https://meu-banco-de-dados.com/valor");
      const data = await response.json();
      setValor(data.valor);
    };
    getValor();
  }, []);
  return (
    <div>
      <p>Valor recebido: {valor}</p>
    </div>
  );
}

export default recebimento;
