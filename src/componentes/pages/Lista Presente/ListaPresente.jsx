import imgPresente from '../../../img/imgPresentes.png'
import style from './ListaPresente.module.css'

function ListaPresente(){
    return(
       <section className={`${style.body} text-center`}>
            <header>
                <img src={imgPresente} alt="" className='col-12 '/>
            </header>
            <main>
                <h1>Lista De Presente</h1>
            </main>
       </section>
    )
}

export default ListaPresente