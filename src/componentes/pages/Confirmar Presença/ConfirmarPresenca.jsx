import { useState } from "react";
import style  from "../Confirmar Presença/ConfirmarPresenca.module.css";
import { MdVerified } from "react-icons/md";

function ConfirmarPresenca() {
    const [name , setName] = useState('')
    const [convidado, setConvidado] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const phoneNumber = '5511951285687'; // Substitua com seu número
        const formattedMessage = `Olá, meu nome é *${name}*. Quero Confirmar a Minha Presença no Casamento da Laís e Eliabe, sou Convidado ${convidado}`;
        const encodedMessage = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
        window.open(whatsappUrl, '_blank');
      }

      console.log(name,convidado)
   return(
    <div className={`col-sm-8 offset-sm-2 rounded-5 shadow text-center p-3 ${style.ConfirmarPresenca}`}>
        <span className="fs-1"><MdVerified/></span>
        <h1 className={style.txtConfirmar}>Confirme sua Presença</h1>
        <form onSubmit={handleSubmit}>
            <div className="col-md-4 offset-md-4">
                <label htmlFor="nomeUser" className="form-label">Digite Seu Nome</label>
                <input type="text" className="form-control" id="nomeUser" placeholder="Digite Seu Nome Aqui" required onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="col-md-4 offset-md-4 mt-3">
                <label >Você é Convidado:</label>
                <select className="form-select" aria-label="Default select example" onChange={(e) => setConvidado(e.target.value)} required>
                    <option >Selecione Uma Opção</option>
                    <option value="da Noiva">Laís - Noiva</option>
                    <option value="do Noivo">Eliabe - Noivo</option>
                </select>
            </div>

            <button className={`col-md-3 mt-4 ${style.btnConfirmar}`}>
                Confirmar Presença
            </button>
        </form>
    </div>
   )
}

export default ConfirmarPresenca