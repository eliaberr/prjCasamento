import PresentePix from "../../PresentePix/PresentePix"
import CardPresente from "../Card Presente/CardPresente"
import { useEffect, useState } from "react"



function ListarCardPresente() {

    const [data, setData] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() =>{
        fetch('http://localhost:3001/presentes').then(
            response => response.json(),
        ).then(data => {
            setData(data)
            setCarregando(false)
        }).catch(error => {
            console.log(error);
            setCarregando(false)
            
        })
    },[])

    if (carregando) {
        return <p>Carregando...</p>
    }
   
    const presentesComTresNaLinha = []

    for (let i =0; i< data.length; i+=3){
        presentesComTresNaLinha.push(data.slice(i,i+3))
    }
    

    return(
        <div className="container mt-5">
            <PresentePix/>
            {   
                presentesComTresNaLinha.map((group, index) => (
                    <div className="row mb-4" key={index}>
                        {
                            group.map(item => (
                                <div className="col-md-4 d-flex justify-content-center" key={item.id}>
                                    <CardPresente
                                        id={item.id}
                                        nomeDoPresente={item.nomePresente}
                                        corPreferencia={item.corDePreferencia}
                                        preco={item.price}
                                        urlCompra={item.link}
                                        formaPagamento={item.entrega}
                                        urlDaImg={item.urlImagem}
                                        telefone={item.telefoneDoUser}
                                    />
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>

        
    )
}

export default ListarCardPresente