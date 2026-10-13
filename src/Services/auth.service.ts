import type { LoginFormSchema } from "../Schema/login";
import type { RegisterFormSchema } from "../Schema/register";
import axios from 'axios';


const baseUrl= "https://route-posts.routemisr.com"
const signUpEndpoint= `users/signup`
const signInEndpoint= `users/signin`


export async function signUp(data:RegisterFormSchema){
    
    const {data:{message,data:{token}}}= await axios.post(
        `${baseUrl}/${signUpEndpoint}`,
        data
    )
    return  {message,token}
    
    }
export async function signIn(data:LoginFormSchema){
    
    const {data:{message,data:{token}}}= await axios.post(
        `${baseUrl}/${signInEndpoint}`,
        data
    )
    return  {message,token}
    
    }
