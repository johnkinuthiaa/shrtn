import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import "./styles/LinkHolder.css"
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from "react";
import InfoIcon from '@mui/icons-material/Info';
import Modal from "./Modal.tsx";

interface LinkHolderProps{
    shortLink: string,
    originalUrl :string,
    date :string,
    id:number,
    clicks:number
}
const LinkHolder =({shortLink,originalUrl,date,id,clicks}:LinkHolderProps)=>{
    const USER_ID =1
    const DELETE_URL = `http://localhost:8080/api/v1/shrtn/delete?urlId=${id}&userId=${USER_ID}`
    const[copy,setCopied] =useState<boolean>(false)
    const[deleted,setDeleted] =useState<boolean>(false)

    const deleteById =(async ()=>{
        const response =await fetch(DELETE_URL,{
            method:"DELETE"
        })
        if(response.ok){
            const data =await response.json()
            console.log(data.message)
        }
    })

    return(
        <div className={"link__holder"} >
            <div className={"link__holder__left"}>
                <a href={`http://localhost:8080/api/v1/shrtn/redirect/${shortLink}`} target={"_blank"} className={"navigation__link"}>{shortLink}</a>
                <p className={"link__holder__originalUrl"}>{originalUrl}</p>
                <div><h4 style={{color:"rgb(0,0,0,0.7)",marginTop:"8px"}}>Clicks : <span>{clicks}</span></h4></div>
                <div><h4 style={{color:"rgb(0,0,0,0.7)"}}>Created on : <span >{date}</span></h4></div>

            </div>
            <div className={"link__holder_right"}>
                <button onClick={()=>{
                    navigator.clipboard.writeText(`http://localhost:8080/api/v1/shrtn/redirect/${shortLink}`)
                    setCopied(true)
                    setTimeout(()=>{
                        setCopied(false)
                    },3000)
                }}><ContentCopyIcon/></button>
                <button onClick={()=>{
                    deleteById()
                    setDeleted(true)
                    setTimeout(()=>{
                        setDeleted(false)
                    },3000)
                }}><DeleteIcon/></button>
            </div>
            {copy &&
                <Modal text={"Link Copied link to clipboard!"} icon={<InfoIcon/>} />
            }
            {deleted &&
                <Modal text={"url successfully deleted"} icon={<InfoIcon/>} />
            }

        </div>
    )
}
export default LinkHolder