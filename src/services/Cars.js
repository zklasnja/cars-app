import { axiosInstance } from './AxiosService';

class CarsService {

    async getAll() {
        const response = await axiosInstance.get('/cars');
        return response.data;
    }

    add(request) {
        const newRequest = axiosInstance.post('/cars', {
            brand: request.brand,
            model: request.model,
            year: request.year,
            maxSpeed: request.maxSpeed,
            numberOfDoors: request.numberOfDoors,
            isAutomatic: request.isAutomatic,
            engine: request.engine,
        });
        return newRequest;
    }
}

export default new CarsService();