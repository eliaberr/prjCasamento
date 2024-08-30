import imgPresente from '../../../../img/imgPresentes.png'
import Nav from '../../../layout/nav/nav'
import CardListaPresente from '../Card Lista Presente/CardListaPresente'
import style from './ListaPresente.module.css'

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
                <section className='d-sm-flex gap-5 justify-content-center mt-5'>
                <CardListaPresente/>
                <CardListaPresente/>
                <CardListaPresente/>
                </section>
            </main>
       </section>
    )
}

export default ListaPresente