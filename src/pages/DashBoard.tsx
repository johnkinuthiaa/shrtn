import "./styles/Dashboard.css"
import SettingsIcon from "@mui/icons-material/Settings";
import LinkIcon from "@mui/icons-material/Link";
import AssessmentIcon from '@mui/icons-material/Assessment';
import LinkHolder from "../components/LinkHolder.tsx";
import Header from "../components/Header.tsx";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const DashBoard =()=>{
    return(
        <div className={"dashboard__container"}>
            <Header/>
            <div className={"body__container"}>
                <div className={"analytics__container"}>
                    <h2>PERFORMANCE</h2>
                    <div className={"total__clicks"}>
                        <div className={"click__container"}>
                            <AssessmentIcon/>
                            <div>
                                <p>Total clicks</p>
                                <h3>2,3313</h3>
                            </div>

                        </div>
                        <div className={"click__container"}>
                            <LinkIcon/>
                            <div>
                                <p>Total links created</p>
                                <h3>2,3313</h3>
                            </div>

                        </div>

                    </div>
                    <div className={"all_links"}>
                        <h2>ENGAGEMENT ALL TIME</h2>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                        <LinkHolder shortLink={"wertgfdrtegdf"} originalUrl={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} id={1} date={"2022:22"}/>
                    </div>
                </div>
                <div className={"create__new"}>
                    <h1>CREATE NEW LINK <LinkIcon/></h1>
                    <p>Create,short and manage your links</p>
                    <form className={"url__input__form"}>
                        <input type={"url"} className={"link__input"}/>
                        <button className={"create__link__button"}>Create Link <ArrowRightAltIcon/></button>
                    </form>
                    <div className={"view__iframe"}>
                        <iframe src="https://i.pinimg.com/236x/10/ec/d3/10ecd389899f7f53bacdb67d091602b0.jpg" width="100%" height="280px" ></iframe>
                    </div>
                    <div className={"qrcode__gen"}>
                        <div className={"download_qr"}>
                            <h2>QR CODE</h2>
                            <button className={"download__qr__button"}>Download PNG</button>
                        </div>
                        <div className={"actual_qr_image"}>
                            <img src={"https://i.pinimg.com/736x/01/48/1d/01481d0e8aaaf684a6f61efb75923dcd.jpg"}className={"qr_code__image"} alt={"qr code"}/>
                            <div className={"qr__links"}>
                                <div>
                                    <h4> <span><LinkIcon/></span>link</h4>
                                </div>
                                <div>
                                    <h4> <span><CalendarMonthIcon/></span>date</h4>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default DashBoard