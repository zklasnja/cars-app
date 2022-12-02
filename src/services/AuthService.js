import { httpService } from "./HttpService";

class AuthService {
  constructor() {
    this.axiosInstance = httpService.axiosInstance;
    this.setAxiosAuthorisationHeader();
  }

  setAxiosAuthorisationHeader(tokenParam = null) {
    try {
      let token = tokenParam ? tokenParam : localStorage.getItem("token");
      if (token) {
        this.axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
      }
    } catch (error) {}
  }

  async register(data) {
    try {
      let response = await this.axiosInstance.post("/register", data);
      if (response.data) {
        localStorage.setItem("token", response.data.authorisation.token);
        this.setAxiosAuthorisationHeader(response.data.authorisation.token);
        return response;
      }
    } catch (error) {
      alert(
        JSON.stringify([
          { Error: error.message },
          { Message: error.response.data.message },
        ])
      );
    }
  }

  async login(data) {
    try {
      let response = await this.axiosInstance.post("/login", data);
      if (response.data) {
        localStorage.setItem("token", response.data.authorisation.token);
        this.setAxiosAuthorisationHeader(response.data.authorisation.token);
        return response;
      }
    } catch (error) {
      alert(
        JSON.stringify([
          { Error: error.message },
          { Message: error.response.data.message },
        ])
      );
    }
  }

  async logout() {
    try {
      const response = await this.axiosInstance.post("/logout");
      return response;
    } catch (error) {}
  }

  async refresh() {
    try {
      const response = await this.axiosInstance.post("/refresh");
      if (response.data) {
        localStorage.setItem("token", response.data.authorisation.token);
        this.setAxiosAuthorisationHeader(response.data.authorisation.token);
      }
      return response;
    } catch (error) {}
  }
}

export const authService = new AuthService();
