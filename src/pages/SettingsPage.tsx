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
    const[userDetails,setUserDetails] =useState<UserProps>({email: "", username: ""})

    const fetchUserById=(async ()=>{
        const response =await fetch(GET_USER)
        const data =await response.json()
        setUserDetails(data?.user)
    })
    useEffect(()=>{
       fetchUserById()
    },[])

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
                    <img src={"https://i.pinimg.com/236x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg"} alt={"profile"}/>
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
                    <button>Edit</button>
                </div>
            </div>

        </div>
    )
}
export default SettingsPage