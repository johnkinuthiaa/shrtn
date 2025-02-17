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
import Modal from "../components/Modal.tsx";
import InfoIcon from "@mui/icons-material/Info";
import {Error} from "@mui/icons-material";

interface UrlProps{
    shortUrl:string,
    originalUrl:string,
    id:number,
    createdOn:string,
    clicks:{
        clicks:number
    }
}

const DashBoard =()=>{
    const USER_ID =1
    const CREATE_URL =import.meta.env.VITE_CREATE_SHORTURL
    const[longUrl,setLongUrl] =useState<string>("")
    const [iframeImage] =useState("https://i.pinimg.com/236x/f8/bf/67/f8bf670258af7e018ebba54a5b446aa4.jpg")
    const[shortURL,setShortUrl] =useState<string>("")
    const[allUrls,setAll] =useState<UrlProps[]>([])
    const [totalLinks,setTotalLinks] =useState<number>(0)
    const[showModal,setShowModal] =useState(false)
    const myHeaders =new Headers();
    const[error,setError] =useState("")
    const[modalMessage,setModalMessage] =useState<string>("")
    const[totalClicks,setTotalClicks] =useState(0)

    const CLICKS_URL =`http://localhost:8080/api/v1/shrtn/total-clicks/${USER_ID}`


    myHeaders.append("Content-Type","application/json")
    const date =new Date();

    const expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/gi;
    const regex = new RegExp(expression);

    useEffect(()=>{

    },[showModal])

    const createNewShortUrl =(async ()=>{
        if(longUrl.match(regex)){
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
                setModalMessage("New short url created")
                setTimeout(()=>{
                    setShowModal(false)
                    setModalMessage("")
                },3000)
                // window.location.reload();
            }else{
                console.log("error creating a short url")
            }
        }else{
            setError("Url should not be empty!")
            setTimeout(()=>{
                setError("")
            },3000)
        }

    })
    const getAllUrlsByUser =(async ()=>{
        const response =await fetch(`http://localhost:8080/api/v1/shrtn/${USER_ID}/all-urls`)
        if(response.ok){
            const data =await response.json()
            setAll(data?.urlModels)
            setTotalLinks(data?.urlModels.length)
            fetchClicks()

        }else{
            console.log("error creating a short url")
        }
    })
    const fetchClicks=(async ()=>{
        const response =await fetch(CLICKS_URL)
        const data =await response.json()
        setTotalClicks(data?.clicks)
    })
    const {data,isLoading} =useSWR(`http://localhost:8080/api/v1/shrtn/${USER_ID}/all-urls`,getAllUrlsByUser)
    if(isLoading){
        return <div>Loading...</div>
    }
    if(data){
        setAll(data?.urlModels)
    }


    return(
        <div className={"dashboard__container"}>
            <Header title={""}/>
            <div className={"body__container"}>
                <div className={"analytics__container"}>
                    <h4>PERFORMANCE</h4>
                    <div className={"total__clicks"}>
                        <div className={"click__container"}>
                            <AssessmentIcon/>
                            <div>
                                <p>Total clicks</p>
                                <h4>{totalClicks}</h4>
                            </div>
                        </div>
                        <div className={"click__container"}>
                            <LinkIcon/>
                            <div>
                                <p>Total links created</p>
                                <h4>{totalLinks}</h4>
                            </div>
                        </div>
                    </div>
                    <div className={"all_links"}>
                        <h4>ENGAGEMENT ALL TIME</h4>
                        {allUrls?.length>0?
                            allUrls?.map(({shortUrl,originalUrl,id,createdOn,clicks},key:number)=>(
                                <LinkHolder
                                    key={key}
                                    shortLink={shortUrl}
                                    originalUrl={originalUrl}
                                    id={id}
                                    date={createdOn}
                                    clicks={clicks?.clicks}/>
                            )
                        ):<div>No content</div>}

                    </div>
                </div>
                {error &&<Modal text={error} icon={<Error/>}/>}
                {
                    showModal&&<Modal text={modalMessage} icon={<InfoIcon/>}/>
                }
                <div className={"create__new"}>
                    <h4>CREATE NEW LINK <LinkIcon/></h4>
                    <p>Create,short and manage your links</p>
                    <form className={"url__input__form"} onSubmit={(e)=>{
                        e.preventDefault()
                        createNewShortUrl()
                        setLongUrl("")

                    }} >
                        <input type={"url"} className={"link__input"} onChange={(e)=>{
                            setLongUrl(e.target.value)
                        }}/>
                        <button className={"create__link__button"} type={"submit"}>Create Link</button>
                    </form>

                    <div className={"view__iframe"}>
                        <iframe src={longUrl?longUrl.match(regex)?longUrl:iframeImage:iframeImage} width="100%" height="280px" ></iframe>

                        <p>shortened Url:</p>
                        <div className={"show_formed__link"}>
                            <h4><button onClick={()=> {
                                setShowModal(true)
                                setModalMessage("Link copied to clipboard")
                                setTimeout(()=>{
                                    setShowModal(false)
                                    setModalMessage("")
                                },3000)
                                navigator.clipboard.writeText(shortURL)
                            }} className={"copy__to__clipboard"} ><LinkIcon/></button> {shortURL}</h4>
                        </div>
                    </div>
                    <div className={"qrcode__gen"}>
                        <div className={"download_qr"}>
                            <h4>QR CODE</h4>
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


