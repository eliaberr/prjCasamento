import imgHistoria1 from '../../../img/imgHistoria1.jpg'
import imgHistoria2 from '../../../img/imgHistoria2.jpg'
import imgHistoria3 from '../../../img/imgHistoria3.jpg'
import style from '../nossa Historia/NossaHistoria.module.css'

function NossaHistoria({txtNossaHistoria, mensagem, imgDireita, imgEsquerda}) {
    return(
        <div className={` pt-5 ${style.nossaHistoria}`}>
            {txtNossaHistoria ? <h1 className={`py-5 ${style.txtNossaHistoria}`}>{txtNossaHistoria}</h1>
            :<></> }
            
                <div className={` mt-5 d-flex justify-content-between p-5 container gap-5 shadow mt-3 rounded-5`}>
                    {imgEsquerda ? <div>
                        <img src={imgEsquerda} alt="imagem1" className='rounded-3 shadow'/>
                    </div> : <></> }
                    
                    <p className={`${style.boxNossaHistoria} align-content-center`}>
                        {mensagem}
                    </p>
                    {imgDireita ? <div>
                        <img src={imgDireita} alt="imagem1" className='rounded-3 shadow'/>
                    </div> : <></> }
                </div>
        </div>
    )
}

export default NossaHistoria