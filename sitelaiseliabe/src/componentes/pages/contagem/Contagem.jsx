import style from '../contagem/Contagem.module.css'

function Contagem (){

    
        const date = new Date('2024-10-19').getTime() 
        const dateNow = new Date().getTime()

        const intervalo = date - dateNow
    

        /*console.log(dateNow)
        console.log(date)
        console.log(intervalo)*/

        const segundos = 1000
        const minutos = segundos * 60
        const hora = minutos * 60
        const dia = hora * 24

        const diaCerto = Math.ceil(intervalo / minutos)
        console.log(diaCerto)
    

    

    return (
        <div>
            <h1 className='pt-5'>
                O Grande Dia Está Chegando
            </h1>
            <div className="d-flex justify-content-center gap-5 mt-4">
                <div className='text-center'>
                    <input type="text" disabled value="20" />
                    <br/>
                    <label htmlFor="" >Dias</label>
                </div>
                <div className='text-center'>
                    <input type="text" disabled value="17" />
                    <br/>
                    <label htmlFor="" >Horas</label>
                </div>
                <div className='text-center'>
                    <input type="text" disabled value="07"  />
                    <br/>
                    <label htmlFor="" >Minutos</label>
                </div>
                <div className='text-center'>
                    <input type="text" disabled value="03"  />
                    <br/>
                    <label htmlFor="" >Segundos</label>
                </div>
            </div>
        </div>
    )
}

export default Contagem