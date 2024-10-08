import { FaLocationDot } from "react-icons/fa6";
import { FaRoute } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
import { FaWaze } from "react-icons/fa";
import { FaGifts } from "react-icons/fa";
import style from '../Info Casamento/InfoCasamento.module.css'
import { Link } from "react-router-dom";


function InfoCasamento() {
    const maps = "https://maps.app.goo.gl/xwWZxDCvNfR8nR5r6"
    const waze = "https://ul.waze.com/ul?place=ChIJt4JkW_eJxZQRCwSF7RjrmL4&ll=-23.57856940%2C-47.50592800&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"

    return (
        <div className={`d-sm-flex col-sm-8 offset-sm-2 rounded-5 shadow text-center p-3 ${style.boxLocalizacao}`}>
            <div className="col-12 col-md-6">
                <span className="fs-1"><FaRoute/></span>
                <h1>Bellas festas</h1>
                <div className="col-sm-6 offset-sm-3">
                    <p>O casamento acontecerá às 17h na Estr. da Servidão, 73 - Ana Maria, Sorocaba - SP, 18052-887.</p>
                </div>
                <div>
                    <a href={maps} target="_blank" rel="noreferrer">
                        <button className={`col-sm-4 me-3  ${style.btnLocalizar}`}><span className="align-content-center text-dark"><FaLocationDot/></span> Abrir no Maps</button>
                    </a>

                    <a href={waze} target="_blank" rel="noreferrer">
                        <button className={`col-sm-4 me-3 align-content-center ${style.btnLocalizar}`}><span className="align-content-center text-dark"><FaWaze/></span> Abrir no Waze</button>
                    </a>
                </div>
            </div>
            <div className="col-12 col-md-6 mt-md-0 mt-5">
                <span className="fs-1"><FaGifts/></span>
                <h1>Lista De Presente</h1>
                <div className="col-sm-8 offset-sm-2">
                    <p> 
                        Escolha o presente ideal para os noivos.
                        Você pode levar o presente no dia do casamento
                        ou fazer um PIX para os noivos.
                    </p>
                </div>
                <Link to="/listaPresentes">
                    <button className={`col-sm-5 ${style.btnLocalizar}`}><IoIosGift className=" text-black me-1 mb-1" />Escolher Presente</button>
                </Link>

            </div>
        </div>
    )
}

export default InfoCasamento