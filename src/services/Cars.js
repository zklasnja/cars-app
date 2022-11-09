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
}

export default new CarsService();