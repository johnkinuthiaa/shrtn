import SettingsIcon from "@mui/icons-material/Settings";
import {useNavigate} from "react-router";
import "./styles/Header.css"

interface HeaderProps{
    title:string
}
const Header =({title}:HeaderProps)=>{
    const navigate =useNavigate()
    return(
        <header>

            <h2>{title?title:"Url shortener"}</h2>
            <div className={"header__left"}>
                <div className={"settings__navigator__icon"} onClick={()=>navigate("/settings")}>
                    <SettingsIcon/>
                </div>

                <div className={"profile"}>
                    <img src={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} alt={"profile image"}/>
                    <h4>Json king</h4>
                </div>
            </div>
        </header>
    )
}
export default Header