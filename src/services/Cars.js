import { axiosInstance } from './AxiosService';

class CarsService {

    async getAll() {
        const response = await axiosInstance.get('/cars');
        return response.data;
    }

    add(request) {
        const newRequest = axiosInstance.post('/cars', request);
        return newRequest;
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
}

export default new CarsService();