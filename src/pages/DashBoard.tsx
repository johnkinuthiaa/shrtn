import "./styles/Dashboard.css"
import LinkIcon from "@mui/icons-material/Link";
import AssessmentIcon from '@mui/icons-material/Assessment';
import LinkHolder from "../components/LinkHolder.tsx";
import Header from "../components/Header.tsx";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {useState} from "react";
import useSWR from "swr";

const DashBoard =()=>{
    const CREATE_URL =import.meta.env.VITE_CREATE_SHORTURL
    const GET_ALL =import.meta.env.VITE_GET_ALL
    const[longUrl,setLongUrl] =useState<string>("")
    const[site,setSite] =useState<string>("")
    const [iframeImage,setIframeImage] =useState("https://i.pinimg.com/236x/f8/bf/67/f8bf670258af7e018ebba54a5b446aa4.jpg")
    const[shortURL,setShortUrl] =useState<string>("")
    const[allUrls,setAll] =useState<string[]>([])

    const myHeaders =new Headers();
    myHeaders.append("Content-Type","application/json")

    const createShortUrl =(async ()=>{
        const response =await fetch(CREATE_URL,{
            method:"POST",
            body:JSON.stringify({
                originalUrl: longUrl,
                userId: "1",
            }),
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode ==200){
                setShortUrl("http://localhost:8082/api/v1/shrtn/redirect/"+data.urlModel.shortUrl)
            }
        }
    })
    const fetchAllUrls =(async ()=>{
        const response =await fetch(GET_ALL)
        if(response.ok){
            const data =await response.json()
            setAll(data.urlModels)
        }
    })
    const {isLoading,error} =useSWR(GET_ALL,fetchAllUrls)


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
                        {allUrls.map((urls)=>(
                            <LinkHolder shortLink={urls.shortUrl} originalUrl={urls.originalUrl} id={urls.id} date={urls.createdOn}/>
                        ))}

                    </div>
                </div>
                <div className={"create__new"}>
                    <h1>CREATE NEW LINK <LinkIcon/></h1>
                    <p>Create,short and manage your links</p>
                    <form className={"url__input__form"} onSubmit={(e)=>{
                        e.preventDefault()
                        createShortUrl()
                    }} >
                        <input type={"url"} className={"link__input"} onChange={(e)=>{
                            setLongUrl(e.target.value)
                        }}/>
                        <button className={"create__link__button"} type={"submit"}>Create Link <ArrowRightAltIcon/></button>
                    </form>
                    <div className={"view__iframe"}>
                        <iframe src={longUrl?longUrl:iframeImage} width="100%" height="280px" ></iframe>

                        <p>shrtnd Url:</p>
                        <div className={"show_formed__link"}>
                            <h3><LinkIcon/> {shortURL}</h3>
                        </div>
                    </div>
                    <div className={"qrcode__gen"}>
                        <div className={"download_qr"}>
                            <h2>QR CODE</h2>
                            <button className={"download__qr__button"}>Download PNG</button>
                        </div>
                        <div className={"actual_qr_image"}>
                            <img src={"https://i.pinimg.com/736x/01/48/1d/01481d0e8aaaf684a6f61efb75923dcd.jpg"} className={"qr_code__image"} alt={"qr code"}/>
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


