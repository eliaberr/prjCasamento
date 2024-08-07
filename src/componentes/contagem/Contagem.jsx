import { useState } from 'react'
import style from './Contagem.module.css'

function Contagem (){

    const [dia , setDia] = useState()
    const [hora , setHora] = useState()
    const [minutos , setMinutos] = useState()
    const [segundos , setSegundos] = useState()

    function contagemRegressiva() {
        const countdown = () => {
            const date = new Date('2024-10-19').getTime() 
            const dateNow = new Date().getTime()

            const intervalo = date - dateNow
        
            const segundos = 1000
            const minutos = segundos * 60
            const hora = minutos * 60
            const dia = hora * 24

            const dateDia = Math.ceil(intervalo / dia)
            const dateHora = Math.ceil((intervalo % dia)/hora)
            const dateMinutos = Math.ceil((intervalo % hora) / minutos)
            const dateSegundos = Math.ceil((intervalo % minutos) / segundos)

            setDia(dateDia)
            setHora(dateHora)
            setMinutos(dateMinutos)
            setSegundos(dateSegundos)
        }

        setInterval (countdown, 1000)
    }
    
    contagemRegressiva()
    
    return (
        <div className="col-12  col-sm-6 offset-sm-3 ">
            <h1 className={`col-10 offset-1 pt-5 ${style.txtContagem}`}>
                O Grande Dia Está Chegando
            </h1>
            <div className="d-flex justify-content-center mt-4">
                <div className='text-center col-2 col-sm-2 '>
                    <input type="text" disabled value={dia} className={`col-10 col-sm-5 ${style.numerosContagem}`}/>
                    <br/>
                    <label htmlFor="" >Dias</label>
                </div>
                <div className='text-center col-2 col-sm-2 '>
                    <input type="text" disabled value={hora} className={`col-10 col-sm-5  ${style.numerosContagem}`}/>
                    <br/>
                    <label htmlFor="" >Horas</label>
                </div>
                <div className='text-center col-2 col-sm-2'>
                    <input type="text" disabled value={minutos} className={`col-10 col-sm-5  ${style.numerosContagem}`}/>
                    <br/>
                    <label htmlFor="" >Minutos</label>
                </div>
                <div className='text-center col-2 col-sm-2 '>
                    <input type="text" disabled value={segundos} className={`col-10 col-sm-5  ${style.numerosContagem}`}/>
                    <br/>
                    <label htmlFor="" >Segundos</label>
                </div>
            </div>
        </div>
    )
}

export default Contagem