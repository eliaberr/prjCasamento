import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalListaPresente() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Escolher Presente
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informações do Presente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Liquidificador</h4>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalListaPresente;