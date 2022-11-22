import React, { useState } from "react";
import { authService } from "../services/AuthService";
import AppLoginComponent from "../components/AppLoginComponent";
import { useHistory } from "react-router-dom";
import { handleRefresh } from "../helpers/helper";

export default function LoginPage() {
    const history = useHistory();
    const [user, setUser] = useState({ email: "", password: "" });

    const handleOnLogin = async (e) => {
        e.preventDefault();
        
        const response = await authService.login(user);
        if (response){
            setUser(user);
            history.push('/cars');
            return response;
        }
    };    

    return (
        <AppLoginComponent 
        user={user}
        setUser={setUser}
        handleRefresh={handleRefresh}
        handleOnLogin={handleOnLogin}
        />
    );
}