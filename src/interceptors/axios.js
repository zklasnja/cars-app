import axios from "axios";
import authService from "../services/AuthService";

axios.defaults.baseUrl = "http://127.0.0.1:8000/api";

let isRefreshed = false;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    const status = error.response ? error.response.status : null;

    if (status === 401 && !isRefreshed) {
      // will loop if refreshToken returns 401
      isRefreshed = true;
      const response = await authService.refresh();

      if (response.status === 200) {
        localStorage.setItem("token", response.token);
        authService.setAxiosAuthorisationHeader(response.token);

        return axios(error.config);
      }
    }
    isRefreshed = false;

    return error;
  }
);
