import CardListaPresente from "../Card Presente/CardPresente"
import imgPresenteCard from '../../../../../img/imgPresente.webp'
import { useEffect, useState } from "react"



function ListarCardPresente() {

    const [data, setData] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() =>{
        fetch('http://localhost:3001/presentes').then(
            response => response.json(),
            console.log('iae man3')
        ).then(data => {
            console.log('iae man 2');
            setData(data)
            setCarregando(false)
        }).catch(error => {
            console.log('Erro na Api', error);
            setCarregando(false)
            
        })
    },[])

    if (carregando) {
        return <p>Carregando...</p>
    }
   
    

    return(
        <div className='d-sm-flex gap-5 justify-content-center mt-5'>
            {
                data.map(item => (
                    <CardListaPresente
                        id={item.id}
                        urlDaImg={imgPresenteCard}
                        nomeDoPresente={item.nomePresente}
                        preco={item.price.toFixed(2)}
                    />
                )
                )
            }
           
        </div>

        
    )
}

export default ListarCardPresente