import React from "react"
import Navbar from "../Header/Navbar";
import {useAuth0} from "@auth0/auth0-react";
export const Root = () => {
    const {isLoading} = useAuth0();
    if(isLoading){
        return(
            <>
                <h1>Loading, please wait</h1>
            </>
        )
    }
    return(
        <>
            <Navbar/>
            <h1>This is the root page</h1>
        </>
    )
}
export default Root;