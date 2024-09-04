import { useEffect } from "react"
import { useRef } from "react"
import QRCode from 'qrcode'

function QrCodePix({pix}) {
    const canvasRef = useRef

    useEffect(()=>{
        QRCode.toCanvas(canvasRef.current, pix, (error) =>{
            console.log(error);
        })
    },[pix])


    return(
        <div>
            <canvas ref={canvasRef} id="canvas"></canvas>
        </div>
    )
}

export default QrCodePix