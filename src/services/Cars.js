import { httpService } from "./HttpService";

class CarsService {
  constructor() {
    this.axiosInstance = httpService.axiosInstance;
    this.headers = {
      headers: {
        Authorisation: `Bearer ${localStorage.getItem("token")}`,
      },
    };
  }

  async getAll(searchTerm) {
    const response = await this.axiosInstance.get(
      "/cars",
      { params: { searchTerm } },
      this.headers
    );
    return response.data;
  }

  async add(request) {
    try {
      const newRequest = await this.axiosInstance.post(
        "/cars",
        request,
        this.headers
      );
      return newRequest;
    } catch (error) {
      alert(
        JSON.stringify([
          { Error: error.message },
          { Message: error.response.data.message },
        ])
      );
    }
  }

  async get(id) {
    const request = await this.axiosInstance.get(`/cars/${id}`, this.headers);
    if (request) {
      return request.data;
    }
  }

  async edit(id, request) {
    try {
      const newRequest = await this.axiosInstance.patch(
        `/cars/${id}`,
        {
          brand: request.brand,
          engine: request.engine,
          is_automatic: request.is_automatic,
          max_speed: request.max_speed,
          model: request.model,
          number_of_doors: request.number_of_doors,
          year: request.year,
        },
        this.headers
      );
      return newRequest;
    } catch (error) {
      alert(
        JSON.stringify([
          { Error: error.message },
          { Message: error.response.data.message },
        ])
      );
    }
  }

  async delete(id) {
    const request = await this.axiosInstance.delete(
      `/cars/${id}`,
      this.headers
    );
    return request;
  }
}

export default new CarsService();
