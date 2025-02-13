interface ModalProps{
    text:string
    icon:Element
}

const Modal =({text,icon}:ModalProps)=>{
    return(
        <div className={"copy__modal__holder"}>
            <div className={"copy__modal"}>
                <div className={"success__copy__modal"}>
                    {icon}
                </div>
                <p>{text}</p>
            </div>
            <div className={"time__animation"}></div>
        </div>
    )
}
export default Modal