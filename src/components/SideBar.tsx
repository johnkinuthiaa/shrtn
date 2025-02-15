import "./styles/Sidebar.css"
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LinkIcon from '@mui/icons-material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import {Link} from "react-router";
import {useState} from "react";
const SideBar =()=>{

    const[active,setActive] =useState<boolean>(false)
    return (
        <aside className={"sidebar"} >
            <div className={"logo"}>
                <h1 className={"logo__name"}><span className={"link__icon__logo"}><LinkIcon /></span>Shrtn</h1>
            </div>
            <div className={"aside__container"}>
                <div className={"dashboard"}>
                    <AnalyticsIcon/>
                    <h2><Link to={"/dashboard"} onClick={()=>setActive(true)}>Dashboard</Link></h2>
                </div>
                <div className={"links"}>
                    <LinkIcon/>
                    <h2><Link to={"/links"}>Links</Link></h2>
                </div>
                <div className={"links"}>
                    <QrCode2Icon/>
                    <h2><Link to={"/qr-code"}>Qr code</Link></h2>
                </div>
                <div className={"settings"}>
                    <SettingsIcon/>
                    <h2><Link to={"/settings"}>Settings</Link></h2>
                </div>
                <div className={"log_out"}>
                    <div>
                        <LogoutIcon/>
                    </div>
                    <h2>Log Out</h2>
                </div>
            </div>

        </aside>
    )
}
export default SideBar