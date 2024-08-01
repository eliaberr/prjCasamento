import imgHistoria1 from '../../../img/imgHistoria1.jpg'
import imgHistoria2 from '../../../img/imgHistoria2.jpg'
import imgHistoria3 from '../../../img/imgHistoria3.jpg'
import style from '../nossa Historia/NossaHistoria.module.css'

function NossaHistoria() {
    return(
        <div className={` ${style.nossaHistoria}`}>
            <h1 className={style.txtNossaHistoria}>Nossa História</h1>
            <div className="d-flex justify-content-center shadow mt-3">
                <div>
                    <img src={imgHistoria1} alt="imagem 1" className='shadow rounded-2'/>
                </div>
                <div>
                <p className={style.boxNossaHistoria}>
                    Tudo começou através dos nossos amigos Ketura e Ederson, que,
                    após se conhecerem, quiseram nos apresentar. Logo depois de o
                    noivo Eliabe tomar coragem, ele mandou a primeira mensagem para
                    Laís, logo após ela postar uma foto, pois tinha acabado de tirar
                    o siso no dia 20 de outubro de 2020. Eliabe decidiu mandar a mensagem
                    para Laís, iniciando uma conversa. No entanto, segundo relatos dos
                    noivos, ele ficou 14 dias no vácuo por ela. Porém, depois disso,
                    no dia 7 de novembro, aconteceu o primeiro beijo entre os dois. Assim,
                    começou uma linda história de amor. Logo após o primeiro beijo, começaram
                    a se conhecer melhor e, após algum tempo, eles começaram a orar, pedindo
                    a direção de Deus para o seu namoro. No dia 4 de julho de 2021, Eliabe
                    tomou coragem e foi conversar com o pai de Laís. Chegando lá, ele pediu
                    a mão dela em namoro para o pai. Sendo assim, o namoro foi aprovado pelos
                    pais da noiva e pelos pais de Eliabe.
                    Ali, começou uma grande história de amor entre Laís e Eliabe.
                </p>
                </div>
            </div>
        </div>
    )
}

export default NossaHistoria