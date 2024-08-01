import Nav from '../../layout/nav/nav'
import style from '../home/PageHome.module.css'
import NossaHistoria from '../nossa Historia/NossaHistoria'




function PageHome(){
    return(
        <div>
           <footer><Nav/></footer>
           <main>
            <section className={style.imgInicio}></section>
            <section className='text-center'>
                <NossaHistoria/>
            </section>
           </main>
        </div>
    )
}

export default PageHome