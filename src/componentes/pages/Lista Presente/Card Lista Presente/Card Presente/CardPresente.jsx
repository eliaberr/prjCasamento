import React, { useState } from 'react';
import style from './CardPresente.module.css';
import Button from 'react-bootstrap/Button';
import ModalListaPresente from '../../Modal Lista Presente/ModalListaPresente';

function CardListaPresente({ urlDaImg, nomeDoPresente, preco, id }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className={`card col-10 offset-1 mb-4 offset-sm-0 col-sm-3 ${style.cardTamanho}`}>
      <img src={urlDaImg} className="card-img-top" alt="presente" />
      <div className="card-body">
        <h5 className="card-title">{nomeDoPresente}</h5>
        <p className="card-text">{preco}</p>
        <Button variant="primary" onClick={handleShow}>
          Escolher Presente
        </Button>
      </div>
      {/* Passando informações do presente e controle da modal */}
      <ModalListaPresente
        show={showModal}
        handleClose={handleClose}
        id={id}
        nomePresente={nomeDoPresente}
        preco={preco}
      />
    </div>
  );
}

export default CardListaPresente;
