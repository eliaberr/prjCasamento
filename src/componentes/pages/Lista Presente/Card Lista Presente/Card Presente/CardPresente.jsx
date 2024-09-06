import React, { useState } from 'react';
import style from './CardPresente.module.css';
import Button from 'react-bootstrap/Button';
import ModalListaPresente from '../../Modal Lista Presente/ModalListaPresente';

function CardPresente({ id, nomeDoPresente, corPreferencia, preco, urlCompra, formaPagamento, urlDaImg, telefone }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  console.log(telefone);
  
  console.log(urlDaImg);
  return (
    <div className={`card col-10 mb-4 ${style.cardTamanho}`}>
      <img src={urlDaImg} className="card-img-top" alt="presente" />
      <div className="card-body">
        <h5 className="card-title">{nomeDoPresente}</h5>
        <p className="card-text">R$ {preco},00</p>
        {
          telefone === 'null' ? (
            <Button variant="primary" onClick={handleShow}>
              Escolher Presente
            </Button>
          )
        :(
            <Button variant="secondary" >
            Indisponível
          </Button>
        )}
        
      </div>
      {/* Passando informações do presente para a modal */}
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
