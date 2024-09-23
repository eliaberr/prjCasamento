import imgPixLogo from '../../../../../img/imgPixLogo.png'
import style from './PresentePix.module.css'
import ModalPresentePix from '../ModalPresentePix/ModalPresentePix'

function PresentePix() {
    return(
        <section className="mb-5 bg-light p-3 col-12">
            <div className="d-flex">
                <div className="col-4 d-none d-md-grid">
                    <img src={imgPixLogo} className="w-75"  alt="imgPixLogo"/>
                </div>
                <div className="col-12 col-md-8">
                    <h3 className={`${style.txtPresentePix} col-12 col-md-8 offset-md-2 mb-3`}>Presentei os Noivos com Um PIX 😍</h3>
                    <ModalPresentePix/>  
                </div>
            </div>

                    
        </section>
    )
}

export default PresentePix