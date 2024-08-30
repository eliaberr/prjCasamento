import style from './CardListaPresente.module.css'
import imgPresente from '../../../../img/imgPresente.webp'
import ModalListaPresente from '../Modal Lista Presente/ModalListaPresente'

function CardListaPresente() {
    return(
        <div className={`card col-10 offset-1 mb-4 offset-sm-0 col-sm-3 ${style.cardTamanho}`}>
            <img src={imgPresente} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Liquidificador</h5>
                    <p className="card-text">R$ 56,87</p>
                    <ModalListaPresente/>
            </div>
        </div>
    )
}

export default CardListaPresente