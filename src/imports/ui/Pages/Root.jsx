import React from "react"
import Navbar from "../Header/Navbar";
import {useAuth0} from "@auth0/auth0-react";
import AllEventsMap from "../Maps/AllEvents";
import Loading from "../Utils/Loading";
export const Root = () => {
    const {isLoading,isAuthenticated} = useAuth0();
    if(isLoading){
        return(
            <>
                <Loading/>
            </>
        )
    }
    if(!isAuthenticated){
        return(
            <>
            <Navbar/>
            <h3>Please login to use this app</h3>
            </>
        )
    }
    return(
        <>
            <Navbar/>
            <AllEventsMap/>
        </>
    )
}
export default Root;