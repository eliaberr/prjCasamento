import { useState } from "react";
import style  from "../Confirmar Presença/ConfirmarPresenca.module.css";

function ConfirmarPresenca() {
    const [name , setName] = useState('')
    const [convidado, setConvidado] = useState('')

    /*const handleSubmit = (e) => {
        e.preventDefault();
    
        const phoneNumber = '5511951285687'; // Substitua com seu número
        const formattedMessage = `  Olá, meu nome é ${name}. Quero Confirmar 
                                    a Minha Presença no Casamento da Laís e Eliabe
                                    sou Convidado ${convidado}`;
        const encodedMessage = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
        window.open(whatsappUrl, '_blank');
      };*/

      console.log(name,convidado)
   return(
    <div className={`col-sm-8 offset-sm-2 rounded-5 shadow text-center p-3 ${style.ConfirmarPresenca}`}>
        <h1>Confirme sua Presença</h1>
        <div class="col-md-4">
            <label for="nomeUser" class="form-label">Digite Seu Nome</label>
            <input type="text" class="form-control" id="nomeUser" placeholder="Digite Seu Nome Aqui" required onChange={(e) => setName(e.target.value)}/>
        </div>
        <div class="col-md-4">
            <label htmlFor="">Você é Convidado da:</label>
            <select class="form-select" aria-label="Default select example" onChange={(e) => setConvidado(e.target.value)}>
                <option selected>Selecione Uma Opção</option>
                <option value="da Noiva">Laís - Noiva</option>
                <option value="do Noivo">Eliabe - Noivo</option>
            </select>
        </div>

    </div>
   )
}

export default ConfirmarPresenca