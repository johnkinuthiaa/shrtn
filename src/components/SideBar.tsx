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
        position:"absolute",
        left:"0",
        padding:"10px",
        boxShadow:"5px 5px 7px #1c1d1f, -5px -5px 7px #222527"
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