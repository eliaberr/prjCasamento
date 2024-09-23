import React, { useEffect, useState} from 'react';
import style from './ModalListaPresente.module.css';
import button from 'react-bootstrap/button';
import Modal from 'react-bootstrap/Modal';
import { ImCheckboxChecked } from "react-icons/im";
import { createStaticPix} from 'pix-utils';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QrCodePix from './Qrcode/QrCodePix';
import InputMask from 'react-input-mask';


function ModalListaPresente({ show, handleClose, id, nomeDoPresente, corPreferencia, preco, urlCompra, formaPagamento, urlDaImg, telefone }) {
  const [presente, setPresente] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [presenteEscolhido, setPresenteEscolhido] = useState(0);
  const [confirmacao, setConfirmacao] = useState(true);
  const [telefoneUser, setTelefoneUser] = useState("")
  const [copiado, setCopiado] = useState(false)
 



  useEffect(() => {
    const fetchPresente = async () => {
      try {
        setCarregando(true);
        const response = await fetch(`https://eliabe.discloud.app/presentes/${id}`);
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

 
  const salvarNumero = () =>{
    fetch(`https://eliabe.discloud.app/presentes/${id}`, {
      method: 'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        telefoneDoUser:telefoneUser,
        tipoDeEntrega:presenteEscolhido
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
    infoAdicional: `Pix Presnete${nomeDoPresente}`,
    transactionAmount: preco,
  });
  
  
  const brCode = pix.toBRCode();

  

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closebutton>
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
              <img src={urlDaImg} alt={nomeDoPresente} className='w-50' />
              <h4>{nomeDoPresente}</h4>
              <p>Valor: R${preco},00</p>
              <br/>

              {presenteEscolhido === 0 ? (
                <>
                  <h4>Como Você Quer Presentear?</h4>
                  <div className='d-flex flex-column gap-4 justify-content-center mt-5'>
                    <button className={`col-sm-6 offset-sm-3 align-content-center ${style.btnEscolha}`} onClick={() => setPresenteEscolhido(1)}>Levar o Presente no Dia</button>
                    <button className={`col-sm-6 offset-sm-3 align-content-center ${style.btnEscolha}`} onClick={() => setPresenteEscolhido(2)}>Comprar Online</button>
                    <button className={`col-sm-6 offset-sm-3 align-content-center ${style.btnEscolha}`} onClick={() => setPresenteEscolhido(3)}>Fazer o Pix</button>
                  </div>
                </>
              ) : (            
                <div className='mt-4'>
                  {confirmacao ? (
                    <div>
                      <form onSubmit={() => setConfirmacao(false)}>
                        
                      <InputMask
                            mask="(99) 99999-9999"
                            type="text"
                            className="form-control"
                            placeholder="Digite o número do seu telefone aqui com o DDD"
                            onChange={e => setTelefoneUser(e.target.value)}
                            required>
                        </InputMask>
                    
                        <button className={`col-sm-4 mt-3  ${style.btnEscolha}`} onClick={salvarNumero} ><span></span>Confirmar Presente</button>
                      </form>
                    </div>
                  ) : (
                    <div className='mt-3'>
                      <div>
                        <span className='fs-1 text-success'><ImCheckboxChecked/></span>
                        <p className='mt-2'>Presente Confirmado, Muito Obrigado</p>
                      </div>
                      {presenteEscolhido === 1 ?(
                        <>
                          <h2 className='mt-2'>Leve o presente no dia do casamento.</h2>
                          <p className='mt-4'>Caso deseje trocar o presente ou encontrar uma forma diferente de presentear os noivos, clique em "procurar presente" e faça a troca ou entre em contato diretamente com os noivos para realizar a troca.</p>
                        </>
                      ):(presenteEscolhido === 2 ? (
                        <>
                        <h2 className='mt-2'>Clique no Botão para compar online.</h2>
                        <p className='mt-4'>leve no dia do casamento ou Entregue na casa dos noivos</p>
                          <a href={urlCompra} target='_blank' rel="noreferrer">
                            <button variant="secondary">
                              Comprar Presente Online
                            </button>
                          </a>
                          <p className='mt-4'>Caso deseje trocar o presente ou encontrar uma forma diferente de presentear os noivos, clique em "procurar presente" e faça a troca ou entre em contato diretamente com os noivos para realizar a troca.</p>
                        </>
                      ):(
                        <>
                          <h2 className='mt-2'>Faça o Pix para os Noivo.</h2>
                          <div className='d-grid '>
                            <QrCodePix
                              pix={brCode}
                            />
                            <div className={`${style.divPix} mt-3 col-10 offset-1  text-wrap`}>
                              {brCode}
                            </div>
                            <CopyToClipboard className='mt-4' text={brCode} onCopy={() => setCopiado(true) }>
                              <button variant="primary col-4 offset-4">
                                  Copiar Pix
                              </button>
                            </CopyToClipboard>
                            {copiado === true ?(
                              <p className=' text-success mt-1' >Pix Copiado!</p>
                            ):(<></>)}
                            <p className='mt-4'>Caso deseje trocar o presente ou encontrar uma forma diferente de presentear os noivos, clique em "procurar presente" e faça a troca ou entre em contato diretamente com os noivos para realizar a troca.</p>
                          </div>
                          
                        </>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        )}
      </Modal.Body>
      <Modal.Footer>
      {presenteEscolhido === 0 ? (
            <></>
        ):( <button variant="secondary" onClick={() => setPresenteEscolhido(0)}>
                Voltar
            </button>
        )}
        <button variant="secondary" onClick={() => {handleClose()}}>
          Fechar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalListaPresente;
