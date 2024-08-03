import Nav from '../../layout/nav/nav'
import style from '../home/PageHome.module.css'
import NossaHistoria from '../nossa Historia/NossaHistoria'
import imgHistoria1 from '../../../img/imgHistoria1.jpg'
import imgHistoria2 from '../../../img/imgHistoria2.jpg'
import imgHistoria3 from '../../../img/imgHistoria3.jpg'
import Contagem from '../../contagem/Contagem'





function PageHome(){
    return(
        <div id='home'>
           <footer className='fixed-top opacity-75' ><Nav/></footer>
           <main>
            <section className={style.imgInicio} ></section>
            <section id='nossaHistoria' className={`${style.sectionNossaHistoria} text-center `}>
                <Contagem/>
                <h1 className={`py-5 ${style.txtNossaHistoria}`}>Nossa História</h1>
                <NossaHistoria
                    txtNossaHistoria="Nossa Hitória"
                    imgDireita={imgHistoria1}
                    mensagem="  Tudo começou através dos amigos Ketura e Ederson, que quiseram
                                apresentar Laís e Eliabe. Após tomar coragem, Eliabe enviou a
                                primeira mensagem para Laís no dia 20 de outubro de 2020, logo
                                após ela postar uma foto. Embora tenha ficado 14 dias sem resposta,
                                no dia 7 de novembro aconteceu o primeiro beijo entre os dois.
                                A partir daí, começaram a se conhecer melhor e oraram pedindo
                                a direção de Deus para o namoro."
                />
                <NossaHistoria
                    imgEsquerda={imgHistoria2}
                    mensagem="No dia 4 de julho de 2021,
                              Eliabe conversou com o pai de Laís, pedindo a mão dela em namoro,
                              o que foi aprovado pelas famílias, iniciando uma grande história
                              de amor entre eles. Depois de um ano e seis meses de namoro,
                              Eliabe e Laís decidiram dar o próximo passo. Assim, começaram
                              a orar a Deus, pedindo direção para esse novo momento."
                />

                <NossaHistoria
                    imgDireita={imgHistoria3}
                    mensagem="É com grande alegria, Laís e Eliabe anunciam o tão aguardado momento de dizer 'sim' perante o altar. Rodeados por familiares e amigos, eles estão prontos para dar o próximo passo em sua jornada de amor, iniciando um novo capítulo em suas vidas."
                />
                
            </section>
           </main>
        </div>
    )
}

export default PageHome