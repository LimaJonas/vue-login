import { axios } from "@/plugins/axios";

export class ApiService {
    constructor(Resource){
        this.Resource = Resource;
        this.Token = { Authorization: `Bearer ${localStorage.getItem("token")}` };
    }

    // Login
    async login(data){
        const response = await axios.post(this.Resource, data);
        return await response.data;
    }
    // Register
    async register(data) {
        const response = await axios.post("user", data);
        return await response.data;
      }
}