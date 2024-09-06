import QRCode from 'react-qr-code'

function QrCodePix({pix}) {


    return(
        <div>
            <QRCode
                value={pix}
            />
        </div>
    )
}

export default QrCodePix