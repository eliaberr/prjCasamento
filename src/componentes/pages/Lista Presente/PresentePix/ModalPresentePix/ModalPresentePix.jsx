import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import imgPixLogo from '../../../../../img/imgPixLogo.png'
import InputMask from 'react-input-mask';
import { NumericFormat } from 'react-number-format';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QrCodePix from '../../Modal Lista Presente/QrCode/QrCodePix';
import { createStaticPix} from 'pix-utils';
import style from './ModalPresentePix.module.css'

function ModalPresentePix() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [digitarValor, setDigitarValor] = useState(true);
  const [telefoneUser, setTelefoneUser] = useState("")
  const [confirmacao, setConfirmacao] = useState(true);
  const [copiado, setCopiado] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const salvarNumero = () =>{
    fetch(`https://eliabe.discloud.app/pixpresente`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        numeroDoUser:telefoneUser,
        valorPix:value

      }),
    }).then(response =>{
      if (!response.ok){
        throw new Error("Erro ao Atulizar")
      } return response.json();
    }).then(data =>{
      console.log("atualizado", data);
            
    });
  }

  const pix = createStaticPix({
    merchantName: 'Eliabe Rodrigues',
    merchantCity: 'Itu',
    pixKey: 'eliabe859@gmail.com',
    infoAdicional: `Pix Presnete`,
    transactionAmount: parseInt(value) ,
  });

    
  const brCode = pix.toBRCode();
  


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Presentear com Pix
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Presenteie com um PIX</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center d-grid col-12'>
            <img src={imgPixLogo} alt="PIX" className='col-6 offset-3' />
          
            {digitarValor ? (<div className='mt-1'>
                                <h4 className='mt-5'>Digite o Valor Desejado</h4>
                        
                                <NumericFormat
                                  value={value}
                                  onChange={e => setValue(e.target.value)}
                                />

                                <Button variant="primary" className='col-4 offset-4 mt-5' onClick={() => setDigitarValor(false)} >
                                  Avançar
                                </Button>
                              </div>
                  ) :(<>
                  {confirmacao ? (
                    <div className='mt-5'>
                      <form onSubmit={() => setConfirmacao(false)}>
                        
                      <InputMask
                            mask="(99) 99999-9999"
                            type="text"
                            className="form-control"
                            placeholder="Digite o número do seu telefone aqui com o DDD"
                            onChange={e => setTelefoneUser(e.target.value)}
                            required>
                        </InputMask>
                    
                        <button className={`col-sm-4 mt-3 ${style.btnEscolha}  `} onClick={salvarNumero} ><span></span>Confirmar Presente</button>
                      </form>
                    </div>
                  ):(
                    <>
                          <h2 className='mt-2'>Faça o Pix para os Noivo.</h2>
                          <p>Valor do Pix R${value},00</p>
                          <div className='d-grid '>
                            <QrCodePix
                              pix={brCode}
                            />
                            <div className={`${style.divPix} mt-3 col-10 offset-1  text-wrap`}>
                              {brCode}
                            </div>
                            <CopyToClipboard className='mt-4' text={brCode} onCopy={() => setCopiado(true) }>
                              <Button variant="primary col-4 offset-4">
                                  Copiar Pix
                              </Button>
                            </CopyToClipboard>
                            {copiado === true ?(
                              <p className=' text-success mt-1' >Pix Copiado!</p>
                            ):(<></>)}
                            <p className='mt-4'>Caso deseje trocar o presente ou encontrar uma forma diferente de presentear os noivos, clique em "procurar presente" e faça a troca ou entre em contato diretamente com os noivos para realizar a troca.</p>
                          </div>
                          
                        </>
                  )}
                    
                  </>)}
            
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