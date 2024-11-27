import React, {useState} from "react";

function NoveanoModal({turma, quantidade, fecharModal, enviarDados}) {
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>{turma}</h2>
                </div>
                <div className="modal-body">
                    <label>Quantidade de Alunos Presentes:</label>
                    <input type="number" value={quantidade} onChange={(e) => enviarDados(e.target.value)} />
                </div>
                <div className="modal-footer">
                    <button onClick={fecharModal}>Fechar</button>
                    <button onClick={() => enviarDados(quantidade)}>Enviar</button>
                </div>
            </div>
        </div>
    );
}

function NoveanoConfirmacaoModal({turma, quantidade, editarDados}) {
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
                    <button onClick={editarDados}>Editar</button>
                    <button onClick={() => alert(`Obrigado por registrar a quantidade de alunos na turma ${turma}!`)}>Enviar</button>
                </div>
            </div>
        </div>
    );
}

function noveano() {
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

    const handleAdd = (quantidade) => {
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
                    <button id="Bumano" className="button-serie" onClick={handleClick}>9ºA</button>
                    <button id="Bumano" className="button-serie" onClick={handleClick}>9ºB</button>
                    <button id="Bumano" className="button-serie" onClick={handleClick}>9ºC</button>
                    <button id="Bumano" className="button-serie" onClick={handleClick}>9ºD</button>
                    <button id="Bumano" className="button-serie" onClick={handleClick}>9ºE</button>
                    <button id="Bumano" className="button-serie" onClick={handleClick}>9ºF</button>
                </div>
            </div>
            {modal && <NoveanoModal turma={turma} quantidade={quantidade} fecharModal={handleClose} enviarDados={handleAdd} />}
            {confirmacao && <NoveanoConfirmacaoModal turma={turma} quantidade={quantidade} editarDados={handleEditar} />}
        </>
    );
}

export default noveano;
