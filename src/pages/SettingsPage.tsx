import Header from "../components/Header"
import "./styles/Settings.css"
import {useEffect, useState} from "react";
interface UserProps{
    username:string,
    email:string
}
const SettingsPage =()=>{
    const USER_ID =1
    const GET_USER =`http://localhost:8080/api/v1/users/${USER_ID}/get`
    const UPLOAD_PROFILEPHOTO_URL =`http://localhost:8080/api/v1/users/${USER_ID}/upload-profile`
    const[userDetails,setUserDetails] =useState<UserProps>({email: "", username: ""})
    const[imageSrc,setImageSrc]=useState("")
    const[newImage,setNewImage] =useState("")
    const[editWindow,setEditWindow] =useState(false)

    const fetchUserById=(async ()=>{
        const response =await fetch(GET_USER)
        const data =await response.json()
        setUserDetails(data?.user)

    })
    useEffect(()=>{
       fetchUserById()
        fetchProfilePhoto()
    },[])
    const fetchProfilePhoto =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/users/fetch-profile?userId=1")
        const data =await response.blob()
        const myObject =URL.createObjectURL(data)
        setImageSrc(myObject)
    })
    const changeProfilePhoto =(async ()=>{
        const formData = new FormData();
        formData.append("profilePhoto",newImage)
        const response =await fetch(UPLOAD_PROFILEPHOTO_URL,{
            method:"PUT",
            body:formData
        })
        const data =await response.json()
        console.log(data)
    })

    return(
        <div className={"settings_container"}>
            <Header title={"Settings"}/>
            <div>
                <p style={{marginTop:"85px"}}>Manage your personal details here</p>
                <div >
                    <p>General</p>
                </div>
                <h4>Basics</h4>
                <div className={"profile__photo__container"}>
                    <h4>Photo</h4>
                    <img src={imageSrc} alt={"profile"}/>
                    <button>Edit</button>
                </div>
                <div className={"profile__photo__container"}>
                    <h4>Name</h4>
                    <p>{userDetails.username}</p>
                    <button>Edit</button>
                </div>
                <div className={"profile__photo__container"}>
                    <h4>Email address</h4>
                    <p>{userDetails.email}</p>
                    <button onClick={()=>{
                        setEditWindow(!editWindow)
                    }}>Edit</button>
                </div>
            </div>
            {editWindow&&
                <div className={"edit__window"}>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        changeProfilePhoto()
                    }}>
                        <h2>Change profile photo</h2>
                        <input type={"file"} onChange={(e)=>{
                            setNewImage(e.target.files[0])
                        }}/>
                        <button type={"submit"}>update</button>
                    </form>
                </div>
            }

        </div>
    )
}
export default SettingsPage