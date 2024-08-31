import React, { useEffect, useState, useRef } from 'react';
import style from './ModalListaPresente.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ImCheckboxChecked } from "react-icons/im";
import $ from 'jquery';
import 'jquery-mask-plugin';

function ModalListaPresente({ show, handleClose, id, nomePresente, preco }) {
  const [presente, setPresente] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [presenteEscolhido, setPresenteEscolhido] = useState(true);
  const [confirmacao, setConfirmacao] = useState(true);

  const telefoneInputRef = useRef(null);
  $(telefoneInputRef.current).mask('(00) 00000-0000');

  useEffect(() => {
    const fetchPresente = async () => {
      try {
        setCarregando(true);
        const response = await fetch(`http://localhost:3001/presentes/${id}`);
        if (!response.ok) {
          throw new Error('Presente não encontrado');
        }
        const data = await response.json();
        setPresente(data);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    };

    if (id) {
      fetchPresente();
    }

    
      
    
  }, [id]);

  function statusPresenteEscolhido() {
    setPresenteEscolhido(false);
  }

  function salvarNumeroNoPresente() {
    setConfirmacao(false);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Informações do Presente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {carregando ? (
          <p>Carregando...</p>
        ) : erro ? (
          <p>Erro: {erro}</p>
        ) : (
          presente && (
            <div className='text-center'>
              <h4>{nomePresente}</h4>
              <p>Valor: R${preco}</p>
              <br/>

              {presenteEscolhido ? (
                <>
                  <h4>Como Você Quer Presentear?</h4>
                  <div className='d-flex flex-column gap-4 justify-content-center mt-5'>
                    <button className={`col-sm-6 offset-sm-3 align-content-center ${style.btnEscolha}`} onClick={statusPresenteEscolhido}>Levar o Presente no Dia</button>
                    <button className={`col-sm-6 offset-sm-3 align-content-center ${style.btnEscolha}`} onClick={statusPresenteEscolhido}>Comprar Online</button>
                    <button className={`col-sm-6 offset-sm-3 align-content-center ${style.btnEscolha}`} onClick={statusPresenteEscolhido}>Fazer o Pix</button>
                  </div>
                </>
              ) : (
              
                <div className='mt-4'>
                  {confirmacao ? (
                    <div>
                      <form onSubmit={salvarNumeroNoPresente}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite o número do seu telefone aqui com o DDD"
                          ref={telefoneInputRef}
                          required
                        />
                        <button className={`col-sm-4 mt-3 ${style.btnEscolha}`}><span></span>Confirmar Presente</button>
                      </form>
                    </div>
                  ) : (
                    <div className='mt-3'>
                      <span className='fs-1'><ImCheckboxChecked/></span>
                      <p className='mt-2'>Presente Confirmado</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalListaPresente;
