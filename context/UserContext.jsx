import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import {serverUrl} from '../src/constants/Constant'

export const UserContext = createContext({})


export function UserContextProvider({children}){
    const [user, setUser] = useState(null);
    const fetchUserProfile = async () =>{
        try {
            const response = await axios.get(`https://basicloginregistration.onrender.com/api/v1/users/profile`); // server url added
            setUser(response.data);
        } catch (error) {
            // console.error("Error for fetching user profile", error);
            if (error.response) {
                // The request was made and the server responded with a status code outside of the 2xx range
                console.error('Response error:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Request error:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error:', error.message);
            }
            console.error('Config:', error.config);
        }
    }
    useEffect(() =>{
        if(!user){
            fetchUserProfile();
        }
    }, []);
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
