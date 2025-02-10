import {React, useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";



const SignInForm = () => {
  
    const [message, setMessage] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); 

   
    const onSubmit = async (data) => {
        try {
            const response =
                await axios.post('http://localhost:3001/user/loginUser', data);
                console.log('Successfully logged In', response.data);
            setMessage(response.data.message);
            if(response.data.success){
                localStorage.setItem("accessToken", response.data.accessToken); 
                localStorage.setItem("refreshToken", response.data.refreshToken);  

            }
        } catch (error) {
            console.log('Error logging in:', error);
            setMessage('An error occurred');
        }
    }; 
    
    return (
        <div className="h-screen flex items-center justify-center">
  
  <form onSubmit={handleSubmit(onSubmit)} className="bg-yellow-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <h4 className="text-2xl font-bold mb-6 text-center">Sign In</h4> 
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
        Sign In
      </button>

    
    
  </form>
  
</div>
        
    );
}
export default SignInForm;
