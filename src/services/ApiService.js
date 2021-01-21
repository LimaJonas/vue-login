import { axios } from "@/plugins/axios";

export class ApiService {
    constructor(Resource){
        this.Resource = Resource;
    }

    // Login
    async login(data){
        const response = await axios.post(this.Resource, data);
        return await response.data;
    }
}