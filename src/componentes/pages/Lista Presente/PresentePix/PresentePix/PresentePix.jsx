import { Button } from 'react-bootstrap'
import imgPixLogo from '../../../../../img/imgPixLogo.png'
import style from './PresentePix.module.css'
import { useState } from 'react'
import CurrencyInput from 'react-currency-input-field'

function PresentePix(params) {
    const [fazerPix, setFazerPix] = useState(false)
    const [pix, setPix] = useState('')

    

    return(
        <section className="mb-5 bg-light p-3 col-12">
            <div className="d-flex">
                <div className="col-4 d-none d-md-grid">
                    <img src={imgPixLogo} className="w-75"  alt="imgPixLogo"/>
                </div>
                <div className="col-12 col-md-8">
                    <h3 className={`${style.txtPresentePix} col-12 col-md-8 offset-md-2 mb-3`}>Presentei os Noivo com Um PIX 😍</h3>
                    <Button variant="primary" onClick={() => setFazerPix(true)}>
                        Presentear Com PIX
                    </Button>
                </div>
            </div>
            
        </section>
    )
}

export default PresentePix