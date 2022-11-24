import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { authService } from "../services/AuthService";


export default function LogoutPage() {
    const history = useHistory();
    const { handleLogout } = useAuth();

    // useEffect(() => {
    //    handleLogout;
    // }, []);


}