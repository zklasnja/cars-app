import React from "react";
import { authService } from "../services/AuthService";

export const handleRefresh = async () => {
    await authService.refresh();
};

