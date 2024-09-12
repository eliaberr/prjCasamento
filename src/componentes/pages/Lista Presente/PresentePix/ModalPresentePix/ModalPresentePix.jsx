import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import imgPixLogo from '../../../../../img/imgPixLogo.png'

function ModalPresentePix() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Presentear com Pix
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Presenteia Com Um PIX</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center d-grid col-12'>
            <img src={imgPixLogo} alt="PIX" className='col-6 offset-3' />
            <h4 className='mt-5'>Digite o Valor Desejado</h4>
            <input type="text" className='col-6 offset-3 mt-2' />
            <Button variant="primary" className='col-4 offset-4 mt-5' onClick={handleClose}>
              Avançar
            </Button>
          </div>
          
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

export default ModalPresentePix;