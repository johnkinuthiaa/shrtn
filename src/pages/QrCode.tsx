import "./styles/Qrcode.css"
import Header from "../components/Header.tsx"
import QRCode from "react-qr-code";

const QrCode =()=>{
    return(
        <div className={"qrcode__container"}>
            <Header title={"Qr code Generator"}/>

        </div>
    )
}
export default QrCode