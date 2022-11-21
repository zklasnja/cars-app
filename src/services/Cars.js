import { axiosInstance } from './AxiosService';

class CarsService {

    async getAll() {
        const response = await axiosInstance.get('/cars');
        return response.data;
    }

    async add(request) {
        try {
            const newRequest = await axiosInstance.post('/cars', request);
            return newRequest;
        } catch (error) {
            alert(error.message)
        }
    }

    async get(id) {
        const request = await axiosInstance.get(`/cars/${id}`)
        if (request) {
            return request.data;
        }
    }

    edit(id, request) {
        const newRequest = axiosInstance.patch(`/cars/${id}`, request);
        return newRequest;
    }

    async delete(id) {
        const request = await axiosInstance.delete(`/cars/${id}`)
        return request;
    }
}

export default new CarsService();