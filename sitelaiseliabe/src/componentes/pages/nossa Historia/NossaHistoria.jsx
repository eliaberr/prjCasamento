
import style from '../nossa Historia/NossaHistoria.module.css'

function NossaHistoria({txtNossaHistoria, mensagem, imgDireita, imgEsquerda}) {
    return(
        
                <div className={` mt-5 d-flex justify-content-between p-5 container gap-5 shadow mt-3 rounded-5 ${style.nossaHistoria}`}>
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
     
    )
}

export default NossaHistoria