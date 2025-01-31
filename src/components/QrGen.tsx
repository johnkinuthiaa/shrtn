import QRCode from "react-qr-code";

interface QrProps{
    url:string
}
const QrGen =({url}:QrProps)=>{
    return(
        <div className={"qrcard__holder"}>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={url}
                viewBox={`0 0 256 256`}
            />
        </div>
    )
}
export default QrGen