import React, { useState } from "react";

function seisano() {
    const [modal, setModal] = useState(false);
    const [confirmacao, setConfirmacao] = useState(false);
    const [turma, setTurma] = useState("");
    const [quantidade, setQuantidade] = useState("");

    const handleClick = (e) => {
        setModal(true);
        setConfirmacao(false);
        setTurma(e.target.textContent);
    }

    const handleClose = () => {
        setModal(false);
        setConfirmacao(false);
    }

    const handleAbrirConfirmacao = () => {
        setModal(false);
        setConfirmacao(true);
    }

    const handleEditar = () => {
        setConfirmacao(false);
        setModal(true);
    }

    const handleAdd = () => {
        // aqui vai a logica para adicionar a quantidade de alunos no banco de dados

        console.log(`Turma: ${turma}, Quantidade: ${quantidade}`);
        setModal(false);
        setConfirmacao(false);
        alert(`Obrigado por registrar a quantidade de alunos na turma ${turma}!`);
    }

    return (
        <>
            <div className="container">
                <div className="header">Escolha Da Turma</div>
                <div className="button-container-serie">
                    <button id="Bumano" className="button-serie" onClick={handleClick}>6ºA</button>
                    <button id="Bumano" className="button-serie" onClick={handleClick}>6ºB</button>
                    <button id="Bumano" className="button-serie" onClick={handleClick}>6ºC</button>
                    <button id="Bumano" className="button-serie" onClick={handleClick}>6ºD</button>
                    <button id="Bumano" className="button-serie" onClick={handleClick}>6ºE</button>
                    <button id="Bumano" className="button-serie" onClick={handleClick}>6ºF</button>
                </div>
            </div>
            {modal && (
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h2>{turma}</h2>
                        </div>
                        <div className="modal-body">
                            <label>Quantidade de Alunos Presentes:</label>
                            <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleClose}>Fechar</button>
                            <button onClick={handleAbrirConfirmacao}>Enviar</button>
                        </div>
                    </div>
                </div>
            )}
            {confirmacao && (
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h2>Confirmacão</h2>
                        </div>
                        <div className="modal-body">
                            <p>Há {quantidade} alunos na turma {turma}.</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleEditar}>Editar</button>
                            <button onClick={handleAdd}>Enviar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default seisano;
