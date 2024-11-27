import React from 'react';
import './GlobalStyles.css';
import './home.css';
function HomePage() {
  const handleClick = () => {
    window.location.href = '/fundamentaloumedio';
  };

  return (
    <div className="container-homepage">
      <header className="header-homepage">
        <h1>Contador de Alunos</h1>
        <p>Otimiza e mantem organizada a gestão de alimentos.</p>
      </header>

      <div className="content-homepage">
        <section className="presentation-homepage">
          <h2>Como funciona?</h2>
          <p>Nosso sistema facilita a contagem da quantidade de alunos presentes diariamente, permitindo um planejamento preciso das refeições e evitando o desperdício de alimentos.</p> 
        </section>

        <section className="features-homepage">
          <h2>Benefícios</h2>
          <ul>
            <p>Menor desperdício</p>
            <p>Melhora na qualidade das refeições</p>
            <p>Maior controle sobre o estoque</p>
            <p>Facilidade de uso</p>
          </ul>
        </section>
      </div>

      <button className="start-button-homepage" onClick={handleClick}>
          Iniciar
      </button>
    </div>
  );
}
export default HomePage;

