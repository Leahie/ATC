"use client"
import Image from "next/image"
import { useState } from "react"
import axios from "axios"
import {useRouter} from 'next/navigation'

interface UserProfileProps{
    username: any, 
    name: any, 
    bio: any, 
    image: any
}


export default function profileEdit(props:UserProfileProps){
    const router = useRouter();
    const [user, setUser] = useState({
        name: props.name, 
        bio: props.bio, 
        image: props.image
    })
    const onSave = async (user:any) =>{
        console.log("Here")
        try {
            const response = await axios.post('/api/users/login', user)
            console.log('Login Successful Up', response.data);
            router.push('/user/profile') // Moving the user to the login page
        } catch (error:any) {
            console.log(error.message)
        }
    }

    return(
        <div className={['ProfileSection', 'flex flex-col content-center items-center jusitfy-end'].join(" ")}>
                <div className={["flex flex-col", "UserProfile"].join(' ')}>
            <div className="Image">
                {props.image && props.image!=""? <></> : <Image src='/profile/temp3.png' width={300} height={300} alt="Picture of the author"/>}
            </div>
            <div className="mt-2 flex flex-col">
                <label htmlFor="name">Name</label> 
                <input 
                    type="text" 
                    placeholder="Name" 
                    value = {user.name}
                    onChange = {(e) => setUser({...user, })}
                    id="name"
                />
                <br />
                <label htmlFor="name">Bio</label> 
                <textarea 
                    placeholder="Bio" 
                    value = {user.name}
                    onChange = {(e) => setUser({...user, })}
                    id="bio"
                />
                {props.bio && props.image!="" ?<p>{props.bio}</p> : <></>}
            </div>
            
        </div>
                <div className='flex gap-2 w-[75%]'>
                    <button className="text-center grow" onClick={onSave}>Save</button>                                
                </div>
            </div>
        
    )
}
