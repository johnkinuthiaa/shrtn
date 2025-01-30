import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import "./styles/LinkHolder.css"
import DeleteIcon from '@mui/icons-material/Delete';
interface LinkHolderProps{
    shortLink: string,
    originalUrl :string,
    date :string,
    id:number
}
const LinkHolder =({shortLink,originalUrl,date,id}:LinkHolderProps)=>{
    return(
        <div className={"link__holder"}>
            <div className={"link__holder_left"}>
                <h3>{shortLink}</h3>
                <p>{originalUrl}</p>
            </div>
            <div className={"link__holder_right"}>
                <button><ContentCopyIcon/></button>
                <button><DeleteIcon/></button>
            </div>
            {/*<div>{date}</div>*/}
        </div>
    )
}
export default LinkHolder