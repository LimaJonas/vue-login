import decode from 'jwt-decode';
import { ApiService } from "./ApiService.js";

const userService = new ApiService("auth");

export async function login(email, password){
    const userRequest = await userService.login({email: email, password: password});
    localStorage.setItem('token', userRequest.result);
    console.log("User connected");
}

// Check if is logged
export function checkAuth() {
    const token = localStorage.getItem('token');
  
    if (!token)
      return false;
  
    try {
      const { exp: expiration } = decode(token);
      const isExpired = !!expiration && Date.now() > expiration * 1000;
  
      if (isExpired) 
        return false; 
  
      return true;
    } catch (_) {   
      return false
    }
}