import React, { useState } from "react";
import AppRegisterComponent from "../components/AppRegisterComponent";
import { authService } from "../services/AuthService";
import { useHistory } from 'react-router-dom';


export default function RegisterPage() {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [confirmPassword, setConfirmPassword] = useState();

    const handleOnRegister = async (e) => {
        e.preventDefault();
        if (user.password === confirmPassword) {
            const response = await authService.register(user);
    
            if (response) {
                history.push('/login');
                return response;
            }
        } else {
            alert("Password and confirm password are not matching!");
        }
    }

    return <div>
        <AppRegisterComponent
            user={user}
            setUser={setUser}
            handleOnRegister={handleOnRegister}
            setConfirmPassword={setConfirmPassword}
            confirmPassword={confirmPassword}
        />
    </div>
}