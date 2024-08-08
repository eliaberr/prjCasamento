import style  from "../Confirmar Presença/ConfirmarPresenca.module.css";

function ConfirmarPresenca() {
    convidados = [
        {
            idFamilia: 1,
            nome: "Eliabe Ramos",
            confirmardo: false
        }
    ]

   return(
    <div className={`col-sm-8 offset-sm-2 rounded-5 shadow text-center p-3 ${style.ConfirmarPresenca}`}>
        <h1>Confirme sua Presença</h1>

    </div>
   )
}

export default ConfirmarPresenca