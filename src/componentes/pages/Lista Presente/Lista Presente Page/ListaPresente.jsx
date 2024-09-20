import imgPresente from '../../../../img/imgPresentes.png'
import style from './ListaPresente.module.css'
import ListarCardPresente from '../Card Lista Presente/Listar Card Presente/ListarCardPresente'
import Nav from '../../../layout/nav/nav'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ListaPresente(){
    return(
       <section className={`${style.body} text-center`}>
            <header>
                <img src={imgPresente} alt="" className='col-12 '/>
            </header>
            <main className='container mt-3'>
                <section>
                    <h1>Lista De Presente</h1>
                    <p>Escolha o prente ideal para os Noivos</p>
                </section>
                <section>
                    <ListarCardPresente/>
                </section>
            </main>
       </section>
    )
}

export default ListaPresente