import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import "./styles/LinkHolder.css"
import DeleteIcon from '@mui/icons-material/Delete';
import useSWR from "swr";
interface LinkHolderProps{
    shortLink: string,
    originalUrl :string,
    date :string,
    id:number
}
const LinkHolder =({shortLink,originalUrl,date,id}:LinkHolderProps)=>{
    const DELETE_URL = import.meta.env.VITE_DELETE_URL
    const deleteById =(async ()=>{
        const response =await fetch(DELETE_URL+id,{
            method:"DELETE"
        })
        if(response.ok){
            const data =await response.json()
            console.log(data.message)
        }
    })

    return(
        <div className={"link__holder"} id={id}>
            <div className={"link__holder__left"}>
                <h3>{shortLink}</h3>
                <p>{originalUrl}</p>
            </div>
            <div className={"link__holder_right"}>
                <button ><ContentCopyIcon/></button>
                <button onClick={()=>{
                    deleteById()
                }}><DeleteIcon/></button>
            </div>
            {/*<div>{date}</div>*/}
        </div>
    )
}
export default LinkHolder