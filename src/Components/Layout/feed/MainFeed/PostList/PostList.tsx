import  { useEffect, useState } from "react";
// import type { Post } from "../../../../../interface/feed";
import { getAllPosts } from "../../../../../Services/posts.service";
import { useAuth } from "../../../../../context/authContext";
import { toast } from "@heroui/react";
import axios from "axios";
import type { Post } from "../../../../../interface/post";
import PostCard from "./PostCard/PostCard";
import ErrorMessage from "../../../../Shared/ErrorMessage/ErrorMessage";
import FeedSkeleton from "../FeedSkeleton/FeedSkeleton";



export  default function PostList()  {
  const { token } = useAuth();
  const  [posts, setPosts] = useState<Post[]|null>();
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function getPosts() {
    setIsLoading(true) 
     try {
         const {posts,message,pagination } =await getAllPosts(token)  
         console.log(message,posts);
         setPosts(posts)
        } catch (error:unknown) { 
         if (axios.isAxiosError(error)) {
           setError(error?.response?.data.message??"somthing went  wrong in getting posts in postlist ")
           console.log(error?.response?.data.message);
          }else{
           toast.danger("something went  wrong ") 
          } 
           
        }finally{
          setIsLoading(false)
        } 

      }
      useEffect(() => {
        getPosts()
      }, [])
  return (
    <div className="space-y-4">
      {isLoading && <FeedSkeleton/>}
         {error && <ErrorMessage  status="danger" error={error} />}
        {posts&&posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {/* if no posts yet add skeleton from heroUI */}
      <div className="flex min-h-10 items-center justify-center">
        {/* conditions of pagination  should be here */}
        <span className="text-xs font-semibold text-slate-400">You reached the end</span>  
      </div>
    </div>
  );
};