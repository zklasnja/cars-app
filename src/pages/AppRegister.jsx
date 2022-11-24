import React, { useState } from "react";
import AppRegisterComponent from "../components/AppRegisterComponent";
import { authService } from "../services/AuthService";
import { useHistory } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

export default function RegisterPage() {
    const history = useHistory();
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const { user, register } = useAuth();


    const handleOnRegister = async (e) => {
        e.preventDefault();
        try {
            if (newUser.password === confirmPassword) {
                await register(newUser);
            } else {
                alert("Password and confirm password are not matching!");
            }
        } catch (error) { }
    }

    return <div>
        <AppRegisterComponent
            newUser={newUser}
            setNewUser={setNewUser}
            handleOnRegister={handleOnRegister}
            setConfirmPassword={setConfirmPassword}
            confirmPassword={confirmPassword}
        />
    </div>
}