import "./styles/Links.css"
import Header from "../components/Header.tsx";
import {useEffect, useState} from "react";
import LinkHolder from "../components/LinkHolder.tsx";

interface LinkHolderProps{
    shortLink: string,
    originalUrl :string,
    date :string,
    id:number,
    clicks:number
}
const Links =()=>{
    const [allLinks,setAlLinksForUser] =useState<string[]>([])
    const fetchAllLinks =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/shrtn/1/all-urls",{
            method:"GET"
        })
        if(response.ok){
            const data =await response.json()
            setAlLinksForUser(data.urlModels)
            console.log(allLinks?allLinks:"")
        }else{
            console.log("error fetching data")
        }
    })
    useEffect(() => {
        fetchAllLinks()
    }, []);
    return(
        <div className={"links_container"}>
            <Header title={"Links"}/>
            <main className={"links_content__holder"}>
                <h1>All links ever created by </h1>
                <div>
                    {allLinks.map(({shortUrl,originalUrl,id,createdOn,clicks},key:number)=>(
                        <LinkHolder
                            key={key}
                            shortLink={shortUrl}
                            originalUrl={originalUrl}
                            id={id}
                            date={createdOn}
                            clicks={clicks?.clicks}/>
                    ))}
                </div>

            </main>

        </div>
    )
}
export default Links