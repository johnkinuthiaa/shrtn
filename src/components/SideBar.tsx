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
                    <h4><Link to={"/dashboard"} onClick={()=>setActive(true)}>Dashboard</Link></h4>
                </div>
                <div className={"links"}>
                    <LinkIcon/>
                    <h4><Link to={"/links"}>Links</Link></h4>
                </div>
                <div className={"links"}>
                    <QrCode2Icon/>
                    <h4><Link to={"/qr-code"}>Qr code</Link></h4>
                </div>
                <div className={"settings"}>
                    <SettingsIcon/>
                    <h4><Link to={"/settings"}>Settings</Link></h4>
                </div>
                <div className={"log_out"}>
                    <div>
                        <LogoutIcon/>
                    </div>
                    <h4>Log Out</h4>
                </div>
            </div>

        </aside>
    )
}
export default SideBar