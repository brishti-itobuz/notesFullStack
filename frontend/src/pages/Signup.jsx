import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = yup.object({
  username: yup
    .string()
    .trim()
    .required("Username is Required")
    .min(4,"Username must be at least 4 characters"),
  email: yup
    .string()
    .matches(emailRegex,"Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include at least one uppercase letter")
    .matches(/[a-z]/, "Must include at least one lowercase letter")
    .matches(/\d/, "Must include at least one number")
    .matches(/\W/, "Must include at least one special character"),
});



const SignupForm = () => {
const {register,handleSubmit, formState: { errors }} =useForm({resolver: yupResolver(userSchema)})


  const onSubmit = async (data) => {
    
    

    try {
      const response = await axios.post('http://localhost:3001/user/addUser', data);
      console.log('User added successfully:',response.data);
    } catch (error) {
      console.log('Error adding User:', error);
      
    }
  }

  



 return (
      
<div className="h-screen flex items-center justify-center">
  
  <form onSubmit={handleSubmit(onSubmit)} className="bg-yellow-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <h4 className="text-2xl font-bold mb-6 text-center">Sign Up</h4>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"  name="username" {...register("username")} />
      <p className="text-red-600">{errors.username?.message}</p>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email Address
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" name="email" {...register("email")}/>
      <p className="text-red-600">{errors.email?.message}</p>
    </div>
    
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name="password" {...register("password")}/>
      <p className="text-red-600">{errors.password?.message}</p>
    </div>

    
 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign Up
      </button>
    
    
  </form>
  
</div>
) }

export default SignupForm;