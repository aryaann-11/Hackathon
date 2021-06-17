import React from "react";
import {useTracker} from "meteor/react-meteor-data";
import ProfileCollection from "../../db/UserProfileCollection";
import {useParams} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const PublicUserProfile = () => {
    const {user_email} = useParams();
    const {isLoading} = useAuth0(); 
    return (
        <>
        </>
    )
}