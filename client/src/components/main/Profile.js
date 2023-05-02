import { useAuth0 } from "@auth0/auth0-react"
import JSONPRetty from "react-json-pretty"
import { useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";

const Profile = () => {

    const {user, isAuthenticated} = useAuth0();
    const nav = useNavigate()

    return (
        
        isAuthenticated 
        ?
        (
            <div>
                <button onClick = {() => {
                    nav("/")
                }}>
                    Home
                    </button>            
                <img src={user.picture} alt ={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <JSONPRetty data={user} />
             </div>
        )
        : <LoginButton />

    )
}

export default Profile