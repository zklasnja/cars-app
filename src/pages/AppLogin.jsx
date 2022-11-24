import React, { useState } from "react";
import AppLoginComponent from "../components/AppLoginComponent";
import { handleRefresh } from "../helpers/helper";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
    const [newUser, setNewUser] = useState({ email: "", password: "" });

    const { user, login } = useAuth();

    const handleOnLogin = async (e) => {
        e.preventDefault();
        try {
            await login(newUser);
        } catch (error) { }
};

return (
    <AppLoginComponent
        newUser={newUser}
        setNewUser={setNewUser}
        handleRefresh={handleRefresh}
        handleOnLogin={handleOnLogin}
    />
);
}