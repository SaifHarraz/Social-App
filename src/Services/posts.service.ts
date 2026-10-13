import { useState } from "react";
import { useAuth } from "../context/authContext";
// import type { PostsLoginFormSchema } from "../Schema/posts";
import axios from 'axios';


const baseUrl = "https://route-posts.routemisr.com"
const postsEndpoint = `posts`
export async function getAllPosts(token: string | null) {

    // console.log(token);
    
    const {data,data:{meta:{pagination}}, data:{message,data:{posts}} } = await axios.get(`${baseUrl}/${postsEndpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
          
        },
    });
       
     console.log("from posts service",data);
     console.log("from posts service",pagination);
      
    return {posts,message,pagination,data}
}
