import "./styles/Dashboard.css"
import LinkIcon from "@mui/icons-material/Link";
import AssessmentIcon from '@mui/icons-material/Assessment';
import LinkHolder from "../components/LinkHolder.tsx";
import Header from "../components/Header.tsx";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {useEffect, useState} from "react";
import useSWR from "swr";
import QrGen from "../components/QrGen.tsx";
import {styled} from "@mui/material";

const DashBoard =()=>{
    const CREATE_URL =import.meta.env.VITE_CREATE_SHORTURL
    const GET_ALL =import.meta.env.VITE_GET_ALL
    const[longUrl,setLongUrl] =useState<string>("")
    const[site,setSite] =useState<string>("")
    const [iframeImage,setIframeImage] =useState("https://i.pinimg.com/236x/f8/bf/67/f8bf670258af7e018ebba54a5b446aa4.jpg")
    const[shortURL,setShortUrl] =useState<string>("")
    const[allUrls,setAll] =useState<string[]>([])
    const[size,setSize] =useState(0)
    const myHeaders =new Headers();
    myHeaders.append("Content-Type","application/json")

    useEffect(() => {

    }, [size]);

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
            setSize(allUrls.length)
        }
    })
    const {isLoading,error} =useSWR(GET_ALL,fetchAllUrls)

    // url regex
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const regex = new RegExp(expression);

    return(
        <div className={"dashboard__container"}>
            <Header title={""}/>
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
                            <LinkHolder shortLink={urls.shortUrl} originalUrl={urls.originalUrl} id={urls.id} date={urls.createdOn} size={size}/>
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
                        <iframe src={longUrl?longUrl.match(regex)?longUrl:iframeImage:iframeImage} width="100%" height="280px" ></iframe>

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
                            {longUrl.match(regex)?<QrGen url={longUrl}/>:<img src={iframeImage} alt={"placeholder"} style={{height:"190px"}}/>}
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


