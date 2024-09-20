import React, { useEffect, useState } from 'react';
import style from './CardPresente.module.css';
import Button from 'react-bootstrap/Button';
import ModalListaPresente from '../../Modal Lista Presente/ModalListaPresente';

function CardPresente({ id, nomeDoPresente, corPreferencia, preco, urlCompra, formaPagamento, urlDaImg }) {
  const [showModal, setShowModal] = useState(false);
  const [disponivel, setDisponivel] = useState(true);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Função para buscar dados do presente e atualizar disponibilidade
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    try {
      const response = await fetch(`https://eliabe.discloud.app/presentes/${id}`);
      const result = await response.json();
      setDisponivel(result.telefoneDoUser === "null"); // Atualiza disponibilidade com base no telefone
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = async () => {
    if (disponivel) {
      try {
        const response = await fetch(`https://eliabe.discloud.app/presentes/${id}`);
        const result = await response.json();
        if (result.telefoneDoUser === "null") {
          handleShow();
          await fetch(`https://eliabe.discloud.app/presentes/${id}/escolher`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ telefoneDoUser: 'novoTelefone' }) 
          });
          setDisponivel(false);
        } else {
          setDisponivel(false);
        }
      } catch (error) {
        console.error('Erro ao processar escolha:', error);
      }
    } else {
      alert('Presente já escolhido ou indisponível');
    }
  };

  return (
    <div className={`card col-10 mb-4 shadow ${style.cardTamanho}`}>
      <div className="p-4">
        <img src={urlDaImg} className="card-img-top" alt="presente" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{nomeDoPresente}</h5>
        <p className="card-text">R$ {preco},00</p>
        <Button 
          variant={disponivel ? "primary" : "secondary"} 
          onClick={handleClick}
        >
          {disponivel ? "Escolher Presente" : "Indisponível"}
        </Button>
      </div>
      <ModalListaPresente
        show={showModal}
        handleClose={handleClose}
        id={id}
        nomeDoPresente={nomeDoPresente}
        preco={preco}
        urlDaImg={urlDaImg}
        urlCompra={urlCompra}
      />
    </div>
  );
}

export default CardPresente;
