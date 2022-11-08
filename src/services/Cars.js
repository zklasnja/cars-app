import { axiosInstance } from './AxiosService';

class CarsService {

    async getAll() {
        const response = await axiosInstance.get('/cars');
        return response.data;
    }
}

export default new CarsService();