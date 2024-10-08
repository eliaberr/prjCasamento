import Nav from '../../layout/nav/nav'
import style from '../home/PageHome.module.css'
import NossaHistoria from '../nossa Historia/NossaHistoria'
import Contagem from '../../contagem/Contagem'
import InfoCasamento from '../Info Casamento/InfoCasamento'


import ConfirmarPresenca from '../Confirmar Presença/ConfirmarPresenca'





function PageHome(){
    const imgHome = "https://i.imgur.com/XGPX7Io.png"
    const imgHistoria1 = 'https://i.imgur.com/A6CmBpY.jpeg'
    const imgHistoria2 = 'https://i.imgur.com/vNYXXcp.jpeg'
    const imgHistoria3 = 'https://i.imgur.com/Spu2uoG.jpeg'
    const imgHistoria4 = 'https://i.imgur.com/B9KpNiN.png'

    return(
        <div id='home'>
           <header className='fixed-top opacity-75' ><Nav/></header>
           <main className='d-grid'>
            <section className={`col-md-12`}>
                <img src={imgHome} alt="imgHome" className={`col-12 ${style.imgInicio}`}/>
            </section>
            <section id='nossaHistoria' className={`${style.sectionNossaHistoria} text-center pb-5`}>
                <Contagem/>
                <h1 className={`py-5 ${style.txtNossaHistoria}`}>Nossa História</h1>
                <NossaHistoria
                    txtNossaHistoria="Nossa Hitória"
                    imgDireita={imgHistoria1}
                    mensagemEsquerda="  
                                🤵🏻‍♂️: Tudo começou quando meu amigo Ederson me chamou
                                para quebrar um galho. Logo, ele me apresentou à Laís,
                                e eu me apaixonei. Depois de um tempo,
                                tomei coragem e a chamei ela no instagram, mas, infelizmente,
                                fiquei 14 dias no vácuo. Mas no dia 7 de novembro de 2020,
                                conheci ela pessoalmente na igreja, em um culto de jovens. Depois,
                                fomos comer um lanche kkkk, e foi aí que aconteceu o nosso primeiro
                                beijo."
                />
                <NossaHistoria
                    imgEsquerda={imgHistoria2}
                    mensagemDireita="  👰🏻‍♀️: Depois do primeiro beijo, começamos a nos conhecer melhor, a conversar
                                todos os dias e a nos encontrar para caminhar sempre com nossos amigos.
                                Isso durou 6 meses. Depois disso, começamos a orar, pedindo direção a Deus sobre
                                o nosso namoro. Ficamos 2 meses orando. Certa vez, falei com meu pai sobre
                                namorar, e ele não gostou muito da ideia, mas acabou cedendo. Pedi ao Eliabe que conversasse com
                                ele, foi no dia 4 de julho 2021 que ele veio aqui em casa. Forçei ele a vir, pois o bonitão
                                estava com medo."
                />

                <NossaHistoria
                    imgDireita={imgHistoria3}
                    mensagemEsquerda="  🤵🏻‍♂️: Estava com medo não, é apenas respeito! Logo depois de começarmos a namorar,
                                comecei a conhecer a Laís melhor e a me apaixonar por ela. Ali, decidi
                                que a Laís seria a mulher da minha vida e comecei a pensar na possibilidade
                                de casar, mas ainda era muito cedo kkkk. Depois de 1 ano e 6 meses de namoro,
                                fui conversar com o pai e a mãe dela sobre o casamento. Fui com muito respeito
                                kkkk. Chegando lá, falei com eles, e eles aprovaram. No dia 14 de abril de
                                2023, pedi-a em casamento, bem no dia do seu aniversário."
                />

                <NossaHistoria
                    imgEsquerda={imgHistoria4}
                    mensagemDireita="  👰🏻‍♀️🤵🏻‍♂️: E hoje estamos aqui anunciando o nosso casamento. Não foi fácil chegarmos
                                até aqui, pois enfrentamos muitas dificuldades e pensamos até em desistir. Mas
                                maior é Aquele que está conosco. Nessa nossa nova jornada, estamos rodeados de
                                nossos familiares e amigos para o nosso tão sonhado 'SIM' no altar, uma promessa
                                de Deus em nossas vidas. Estamos empolgados para começar essa nova fase e gratos
                                por ter vocês ao nosso lado neste dia especial."
                />
            </section>
        
            <section className={`pb-5 ${style.sectionInfoCasamento}`}  id='infoCasamento'>
                <InfoCasamento/>
            </section>
            <section className={`pb-5 ${style.confirmarPresenca}`}  id='confirmarPresenca'>
                <ConfirmarPresenca/>
            </section>
           </main>
        </div>
    )
}

export default PageHome