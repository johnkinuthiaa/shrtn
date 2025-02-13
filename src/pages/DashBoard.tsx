import "./styles/Dashboard.css"
import LinkIcon from "@mui/icons-material/Link";
import AssessmentIcon from '@mui/icons-material/Assessment';
import LinkHolder from "../components/LinkHolder.tsx";
import Header from "../components/Header.tsx";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState} from "react";
import useSWR from "swr";
import QrGen from "../components/QrGen.tsx";
import Modal from "../components/Modal.tsx";
import InfoIcon from "@mui/icons-material/Info";


const DashBoard =()=>{
    const USER_ID =1
    const CREATE_URL =import.meta.env.VITE_CREATE_SHORTURL
    const[longUrl,setLongUrl] =useState<string>("")
    const [iframeImage,setIframeImage] =useState("https://i.pinimg.com/236x/f8/bf/67/f8bf670258af7e018ebba54a5b446aa4.jpg")
    const[shortURL,setShortUrl] =useState<string>("")
    const[allUrls,setAll] =useState<string[]>([])
    const [totalLinks,setTotalLinks] =useState<number>(0)
    const[showModal,setShowModal] =useState(false)
    const myHeaders =new Headers();

    myHeaders.append("Content-Type","application/json")
    const date =new Date();

    const createNewShortUrl =(async ()=>{
        const response =await fetch(CREATE_URL+1,{
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify({
                originalUrl:longUrl
            })
        })
        if(response.ok){
            const data =await response.json()
            setShortUrl("http://localhost:8080/api/v1/shrtn/redirect/"+data?.urlModel?.shortUrl)
            setShowModal(true)
            setTimeout(()=>{
                setShowModal(false)
            },3000)
        }else{
            console.log("error creating a short url")
        }
    })
    const getAllUrlsByUser =(async ()=>{
        const response =await fetch(`http://localhost:8080/api/v1/shrtn/${USER_ID}/all-urls`)
        if(response.ok){
            const data =await response.json()
            setAll(data?.urlModels)
            setTotalLinks(allUrls?.length)
        }else{
            console.log("error creating a short url")
        }
    })
    const {isLoading} =useSWR(`http://localhost:8080/api/v1/shrtn/${USER_ID}/all-urls`,getAllUrlsByUser)
    if(isLoading){
        return <div>Loading...</div>
    }

    // url regex
    const expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/gi;
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
                                <h3>{totalLinks}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={"all_links"}>
                        <h2>ENGAGEMENT ALL TIME</h2>
                        {allUrls.map(({shortUrl,originalUrl,id,createdOn,clicks},key:number)=>(
                            <LinkHolder
                                key={key}
                                shortLink={shortUrl}
                                originalUrl={originalUrl}
                                id={id}
                                date={createdOn}
                                clicks={clicks?.clicks}/>
                        ))}
                    </div>
                </div>
                <div className={"create__new"}>
                    <h1>CREATE NEW LINK <LinkIcon/></h1>
                    <p>Create,short and manage your links</p>
                    <form className={"url__input__form"} onSubmit={(e)=>{
                        e.preventDefault()
                        createNewShortUrl()

                    }} >
                        <input type={"url"} className={"link__input"} onChange={(e)=>{
                            setLongUrl(e.target.value)
                        }}/>
                        <button className={"create__link__button"} type={"submit"}>Create Link <ArrowRightAltIcon/></button>
                    </form>
                    {
                        showModal&&<Modal text={"New url created successfully!"} icon={<InfoIcon/>}/>
                    }
                    <div className={"view__iframe"}>
                        <iframe src={longUrl?longUrl.match(regex)?longUrl:iframeImage:iframeImage} width="100%" height="280px" ></iframe>

                        <p>shortened Url:</p>
                        <div className={"show_formed__link"}>
                            <h3><button onClick={()=>navigator.clipboard.writeText(shortURL)} className={"copy__to__clipboard"} ><LinkIcon/></button> {shortURL}</h3>
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
                                    <h4> <span><CalendarMonthIcon/></span>date {date.getHours()}{date.getMinutes()} hrs</h4>
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


