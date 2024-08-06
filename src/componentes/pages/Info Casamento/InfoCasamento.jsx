import { FaLocationDot } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { FaWaze } from "react-icons/fa";
import style from '../Info Casamento/InfoCasamento.module.css'


function InfoCasamento() {
    const maps = "https://www.google.com.br/maps/dir//Bellas+festas+%26+eventos,+Estr.+da+Servid%C3%A3o,+73+-+Ana+Maria,+Sorocaba+-+SP,+18052-887/@-23.5785477,-47.5883307,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94c589f75b6482b7:0xbe98eb18ed85040b!2m2!1d-47.505926!2d-23.5785661?entry=ttu _blank"
    const waze = "https://waze.com/ul/h6gy1ygwcq"

    return (
        <div className={`col-8 offset-2 rounded-5 shadow text-center p-3 ${style.boxLocalizacao}`}>
            <span className="fs-1"><FaLocationDot/></span>
           
            <h1>Bellas festas</h1>
            <div className="col-4 offset-4">
                <p>O casamento acontecerá às 17h na Estr. da Servidão, 73 - Ana Maria, Sorocaba - SP, 18052-887.</p>
            </div>
            <div>
                <a href={maps} target="_blank" rel="noreferrer">
                    <button className={`col-2 me-3  ${style.btnLocalizar}`}><span className="align-content-center text-dark"><FaLocationDot/></span> Abrir no Maps</button>
                </a>

                <a href={waze} target="_blank" rel="noreferrer">
                    <button className={`col-2 me-3 align-content-center ${style.btnLocalizar}`}><span className="align-content-center text-dark"><FaWaze/></span> Abrir no Waze</button>
                </a>
            </div>
        </div>
    )
}

export default InfoCasamento