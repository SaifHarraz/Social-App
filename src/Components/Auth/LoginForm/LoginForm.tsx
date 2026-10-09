import { Button, Input, Spinner, toast } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { LoginFormData } from "../../../interface/Login";
import { loginSchema, type LoginFormSchema } from "../../../Schema/login";
import { signIn } from "../../../Services/auth.service";

export default function LoginForm() {
   const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors,isValid,isSubmitting
}}= useForm<LoginFormSchema>({
  mode:'onChange' ,
  defaultValues:{
    email:"",
    password:"" },

  resolver:zodResolver(loginSchema)
})
 async function onSubmit(data:LoginFormData) {
    console.log("success",data);
    try {
     const {message,token} =await signIn(data)  
     console.log(message,token);
     toast.success(message);
     navigate("/feed")
    } catch (error:unknown) { 
     if (axios.isAxiosError(error)) {
       toast.danger(error?.response?.data.message??"somthing went  wrong ")
       console.log(error?.response?.data.message);
      }else{
       toast.danger("somthing went  wrong ") 
      } 
       
    }
  }
  function onSubmitFail(e:object) {
    console.log("failed");
    console.log("e",e);
    
  }
  return (
<>
  <h2 className="auth-title">Log in to Saif  Posts</h2>

  <p className="auth-description">Log in and continue your social journey.</p>

  <form onSubmit={handleSubmit(onSubmit,onSubmitFail)} className="space-y-4">
    <Input
    {...register("email")}
      aria-label="Email"
      fullWidth
      placeholder="Enter your email"
      type="email"
    />
       {errors?.email &&<p className='text-danger text-sm  mt-1'>{errors.email.message}</p>}
    
    <Input
    {...register("password")}
      aria-label="Password"
      fullWidth
      placeholder="Enter your password"
      type="password"
    />
       {errors?.password &&<p className='text-danger text-sm  mt-1'>{errors.password.message}</p>}

    <Button
      isDisabled={!isValid || isSubmitting}
      isPending={isSubmitting}
      type="submit"
      fullWidth
      className="bg-primary font-extrabold text-white hover:bg-primary-hover"
    >  
    {({isPending}) => (
        <>
          {isPending ? <Spinner color="current" size="sm" />: null}
          {isPending ? " Logging in..." : " Log in "}  
        </>
      )}
      
    </Button>
  </form>
</>
  )}
