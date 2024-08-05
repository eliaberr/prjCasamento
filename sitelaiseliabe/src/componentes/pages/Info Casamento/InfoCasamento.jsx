import { FaLocationDot } from "react-icons/fa6";
import style from '../Info Casamento/InfoCasamento.module.css'

function InfoCasamento() {
    return (
        <div className={`d-grid ${style.boxLocalizacao}`}>
            <FaLocationDot/>
            <h1>Bellas festas</h1>
            <p className="col-4">O Casamento Acontecera as 17h na Estr. da Servidão, 73 - Ana Maria, Sorocaba - SP, 18052-887</p>
            <button className={`col-2 ${style.btnLocalizar}`}>Abrir no Waze</button>
            <button className="col-2">Abrir no Maps</button>
        </div>
    )
}

export default InfoCasamento