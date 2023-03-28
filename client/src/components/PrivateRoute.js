import React from 'react'
import {useToken} from "../hooks/useToken";
import {Navigate, Outlet} from "react-router-dom";
import {useUser} from "../hooks/useUser";

export const PrivateRoute = () => {
    const [token] = useToken()
    const [user] = useUser()
    if (!token || !user) return <Navigate to="/login" replace/>

    return <Outlet/>;
}