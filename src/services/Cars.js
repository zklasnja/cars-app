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

    async edit(id, request) {
        try {
            const newRequest = await this.axiosInstance.patch(`/cars/${id}`, {
                brand: request.brand,
                engine: request.engine,
                is_automatic: request.is_automatic,
                max_speed: request.max_speed,
                model: request.model,
                number_of_doors: request.number_of_doors,
                year: request.year,
            });
            return newRequest;
        } catch (error){
            alert(JSON.stringify([{ Error: error.message }, { Message: error.response.data.message }]))
        }
    }

    async delete(id) {
        const request = await this.axiosInstance.delete(`/cars/${id}`)
        return request;
    }
}

export default new CarsService();