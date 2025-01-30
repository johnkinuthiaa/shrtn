import SettingsIcon from "@mui/icons-material/Settings";

const Header =()=>{
    return(
        <header>
            <h1>Url shortener</h1>
            <div className={"header__left"}>
                <SettingsIcon/>
                <div className={"profile"}>
                    <img src={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} alt={"profile image"}/>
                    <h4>Json king</h4>
                </div>
            </div>
        </header>
    )
}
export default Header