import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";


export default function LogoutPage() {
    const history = useHistory();

    const response = authService.logout();
    if (response) {
        history.push('/login');
        console.log(response);
        return response;
    }
    history.push('/cars');
}