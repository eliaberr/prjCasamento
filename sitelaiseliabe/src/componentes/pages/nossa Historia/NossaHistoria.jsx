
import style from '../nossa Historia/NossaHistoria.module.css'

function NossaHistoria({mensagemDireita, mensagemEsquerda,  imgDireita, imgEsquerda}) {
    return(
        
                <div className={` d-flex mt-5 col-8 py-5 container shadow rounded-5 ${style.nossaHistoria}`}>
                    {imgEsquerda ? <div className='col-4'>
                        <img src={imgEsquerda} alt="imagem1" className='rounded-3 shadow w-100'/>
                    </div> : <></> }
                    
                    {mensagemEsquerda ? <p className={`${style.boxNossaHistoria} col-5 align-content-center`}>
                        {mensagemEsquerda}
                    </p> : <></> }
                    
                    
                    {imgDireita ? <div className='col-4 '>
                        <img src={imgDireita} alt="imagem1" className='rounded-3 shadow w-100 offset-9'/>
                    </div> : <></> }
                    
                    {mensagemDireita ? <p className={`${style.boxNossaHistoria} col-5 offset-3 align-content-center`}>
                        {mensagemDireita}
                    </p> : <></> }
                    
                </div>
     
    )
}

export default NossaHistoria