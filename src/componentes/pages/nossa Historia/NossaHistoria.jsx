
import style from '../nossa Historia/NossaHistoria.module.css'

function NossaHistoria({mensagemDireita, mensagemEsquerda,  imgDireita, imgEsquerda}) {
    return(
        
                <div className={` d-blok d-sm-flex  mt-5 col-12 col-sm-8 container shadow rounded-5 ${style.nossaHistoria}`}>
                    {imgEsquerda ? <div className='col-sm-4 col-12'>
                        <img src={imgEsquerda} alt="imagem1" className='rounded-3 shadow w-100'/>
                    </div> : <></> }
                    
                    {mensagemEsquerda ? <p className={`${style.boxNossaHistoria} ${style.msgEsquerda} offset-sm-0 col-12 col-sm-5 align-content-center`}>
                        {mensagemEsquerda}
                    </p> : <></> }
                    
                    {imgDireita ? <div className='col-sm-4 col-12'>
                        <img src={imgDireita} alt="imagem1" className='rounded-3 shadow w-100 offset-sm-9'/>
                    </div> : <></> }
                    
                    {mensagemDireita ? <p className={`${style.boxNossaHistoria} ${style.msgDireita} col-12 col-sm-5 offset-sm-3 align-content-center`}>
                        {mensagemDireita}
                    </p> : <></> }
                    
                </div>
     
    )
}

export default NossaHistoria