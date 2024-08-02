import { useState } from 'react'
import style from '../contagem/Contagem.module.css'

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
        <div>
            <h1 className={`pt-5 ${style.txtContagem}`}>
                O Grande Dia Está Chegando
            </h1>
            <div className="d-flex justify-content-center gap-5 mt-4">
                <div className='text-center'>
                    <input type="text" disabled value={dia} className={style.numerosContagem}/>
                    <br/>
                    <label htmlFor="" >Dias</label>
                </div>
                <div className='text-center'>
                    <input type="text" disabled value={hora} className={style.numerosContagem}/>
                    <br/>
                    <label htmlFor="" >Horas</label>
                </div>
                <div className='text-center'>
                    <input type="text" disabled value={minutos} className={style.numerosContagem}/>
                    <br/>
                    <label htmlFor="" >Minutos</label>
                </div>
                <div className='text-center'>
                    <input type="text" disabled value={segundos} className={style.numerosContagem}/>
                    <br/>
                    <label htmlFor="" >Segundos</label>
                </div>
            </div>
        </div>
    )
}

export default Contagem