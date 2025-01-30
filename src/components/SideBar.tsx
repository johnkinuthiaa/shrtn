import "./styles/Sidebar.css"
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LinkIcon from '@mui/icons-material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router";
const SideBar =()=>{
    const sidebarStyles ={
        width:"220px",
        height:"100vh",
        position:"fixed",
        left:"0",
        top:"0",
        color: "rgb(20,99,255)"
    }
    return (
        <aside className={"sidebar"} style={sidebarStyles}>
            <div className={"logo"}>
                <h1>Shrtn</h1>
            </div>
            <div className={"aside__container"}>
                <div className={"dashboard"}>
                    <AnalyticsIcon/>
                    <h3><Link to={"/dashboard"}>Dashboard</Link></h3>
                </div>
                <div className={"links"}>
                    <LinkIcon/>
                    <h3><Link to={"/links"}>Links</Link></h3>
                </div>
                <div className={"settings"}>
                    <SettingsIcon/>
                    <h3><Link to={"/settings"}>Settings</Link></h3>
                </div>
                <div className={"log_out"}>
                    <div>
                        <LogoutIcon/>
                    </div>
                    <h3>Log Out</h3>
                </div>
            </div>

        </aside>
    )
}
export default SideBar