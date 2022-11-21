import { httpService } from "./HttpService";

class CarsService {
    constructor() {
        this.axiosInstance = httpService.axiosInstance;
    }

    async getAll() {
        const response = await this.axiosInstance.get('/cars');
        return response.data;
    }

    async add(request) {
        try {
            const newRequest = await this.axiosInstance.post('/cars', request);
            return newRequest;
        } catch (error) {
            alert(JSON.stringify([{ Error: error.message }, { Message: error.response.data.message }]))
        }
    }

    async get(id) {
        const request = await this.axiosInstance.get(`/cars/${id}`)
        if (request) {
            return request.data;
        }
    }

    edit(id, request) {
        const newRequest = this.axiosInstance.patch(`/cars/${id}`, request);
        return newRequest;
    }

    async delete(id) {
        const request = await this.axiosInstance.delete(`/cars/${id}`)
        return request;
    }
}

export default new CarsService();