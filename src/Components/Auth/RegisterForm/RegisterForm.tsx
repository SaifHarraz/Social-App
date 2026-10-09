
import { Button, Input, RadioGroup,Radio, toast, Spinner } from '@heroui/react';
import {useForm} from "react-hook-form";
import type { RegisterFormData } from '../../../interface/register';
import { zodResolver } from '@hookform/resolvers/zod';
import {   registerSchema, type RegisterFormSchema} from '../../../Schema/register';
import { signUp } from '../../../Services/auth.service';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function RegisterForm() {
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors,isValid,isSubmitting
}}= useForm<RegisterFormSchema>({
  mode:'onChange' ,
  defaultValues:{
    name:"",
    username:"",
    email:"",
    gender:"male",
    password:"",
    rePassword:"",
    dateOfBirth:"",
  },

  resolver:zodResolver(registerSchema)
})
 async function onSubmit(data:RegisterFormData) {
    console.log("success",data);
    try {
     const {message,token} =await signUp(data)  
     console.log(message,token);
     toast.success(message);
     navigate("/auth/login")
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
  <h2 className="auth-title">Create a new account</h2>

  <p className="auth-description">It is quick and easy.</p>

  <form onSubmit={handleSubmit(onSubmit,onSubmitFail)} className="space-y-4">
    <Input
    {...register("name"
  )}
      aria-label="Full Name"
      fullWidth
      placeholder="Enter your name"
    />
    {errors?.name &&<p className='text-danger text-sm  mt-1'>{errors.name.message}</p>}
    <Input
    {...register("username")}
      aria-label="Username"
      fullWidth
      placeholder="Enter your username"
    />
      {errors?.username &&<p className='text-danger text-sm  mt-1'>{errors.username.message}</p>}
    <Input
    {...register("email")}
      aria-label="Email"
      fullWidth
      placeholder="Enter your email"
      type="email"
    />
       {errors?.email &&<p className='text-danger text-sm  mt-1'>{errors.email.message}</p>}
    <Input
    {...register("dateOfBirth")}
      aria-label="Date of Birth"
      fullWidth
      placeholder="Enter your birthday"
      type="date"
    />
      {errors?.dateOfBirth &&<p className='text-danger text-sm  mt-1'>{errors.dateOfBirth.message}</p>}
    <Input
    {...register("password")}
      aria-label="Password"
      fullWidth
      placeholder="Enter your password"
      type="password"
    />
       {errors?.password &&<p className='text-danger text-sm  mt-1'>{errors.password.message}</p>}
    <Input
    {...register("rePassword")}
      aria-label="Confirm Password"
      fullWidth
      placeholder="Enter confirm password"
      type="password"
    />
      {errors?.rePassword &&<p className='text-danger text-sm  mt-1'>{errors.rePassword.message}</p>}
    <div className="flex flex-col gap-4">
      <RadioGroup name="gender" orientation="horizontal">
        <Radio  {...register("gender")} value="male">
          <Radio.Content>
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            Male
          </Radio.Content>
        </Radio>

        <Radio  {...register("gender")} value="female">
          <Radio.Content>
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            Female
          </Radio.Content>
        </Radio>
      </RadioGroup>
        {errors?.gender &&<p className='text-danger text-sm  mt-1'>{errors.gender.message}</p>}
    </div>

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
          {isPending ? " Creating Account..." : " Create New Account"}  
        </>
      )}
      
    </Button>
  </form>
</>
  )
}
