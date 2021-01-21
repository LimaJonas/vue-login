import { ApiService } from "./ApiService.js";

const userService = new ApiService("auth");

export async function login(email, password){
    const userRequest = await userService.login({email: email, password: password});
    localStorage.setItem('token', userRequest.token);
    console.log("User connected");
}