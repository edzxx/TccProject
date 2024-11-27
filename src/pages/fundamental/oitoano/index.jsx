import React, {useState} from "react";

function Modal({turma, quantidade, setQuantidade, handleClose, handleAbrirConfirmacao}) {
    return (
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
    );
}

function Confirmacao({turma, quantidade, handleEditar, handleAdd}) {
    return (
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
    );
}

function oitoano() {
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
        <div className="container">
            <div className="header">Escolha Da Turma</div>
            <div className="button-container-serie">
                <button id="Bumano" className="button-serie" onClick={handleClick}>8ºA</button>
                <button id="Bumano" className="button-serie" onClick={handleClick}>8ºB</button>
                <button id="Bumano" className="button-serie" onClick={handleClick}>8ºC</button>
                <button id="Bumano" className="button-serie" onClick={handleClick}>8ºD</button>
                <button id="Bumano" className="button-serie" onClick={handleClick}>8ºE</button>
                <button id="Bumano" className="button-serie" onClick={handleClick}>8ºF</button>
            </div>
            {modal && <Modal 
                turma={turma} 
                quantidade={quantidade} 
                setQuantidade={setQuantidade} 
                handleClose={handleClose} 
                handleAbrirConfirmacao={handleAbrirConfirmacao} />}
            {confirmacao && <Confirmacao 
                turma={turma} 
                quantidade={quantidade} 
                handleEditar={handleEditar} 
                handleAdd={handleAdd} />}
        </div>
    );
}

export default oitoano;