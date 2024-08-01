import Nav from '../../layout/nav/nav'
import style from '../home/PageHome.module.css'
import logoLaisEliabe from '../../../img/imgLaisEliabe.png'


function PageHome(){
    return(
        <div>
           <footer><Nav/></footer>
           <main>
            <section className={style.imgInicio} >
                
            </section>
           </main>
        </div>
    )
}

export default PageHome