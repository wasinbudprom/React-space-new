import React, { useState } from 'react'
import My_Navbar from '../navbar/My_Navbar'
import '../../../dist/output.css'
import './Login.css'
import axios from 'axios';
import Validation from './LoginValidation';
import { Link,useNavigate} from 'react-router-dom';

function Login() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errors, setErrors]=useState({})

    // const handleSubmit2 =(event)=>{
    //   event.preventDefault();
    //     setErrors(Validation(values));
    // }

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        setErrors(Validation(email,password));
        axios.post('http://localhost:3001/login', {email,password})
        .then(res => console.log(res))
        .catch(err=>console.log(err));
    } 


    // const handleSubmit=(event)=>{
    //    event.preventDefault();
    //     setErrors(Validation(email,password));
    //      if(errors.email === "" && errors.password === ""){
    //       axios.post('http://localhost:3001/login',email,password)
    //       .then(res => {
    //         if(res.data === "Success"){
    //           navigate('/');
    //         }else{
    //           alert("No record existed");
    //         }
    //       })
    //       .catch(err => console.log(err));
    //     }
    // }


        // if(errors.email === "" && errors.password === ""){
        //   axios.post('http://localhost:3001/login',{email,password})
        //   .then(res => {
        //     if(res.data === "Success"){
        //       navigat('/');
        //     }else{
        //       alert("No record existed");
        //     }
        //   })
        //   .catch(err => console.log(err));
        // }

        
    //     axios.post('http://localhost:3001/login', {email,password})
    //     .then(res => console.log(res))
    //     .catch(err=>console.log(err));
    // } 

  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <div id="title" class='gird-login'>
      <header class="page-header absolute top-0 left-0 right-0 bg-black">
         <My_Navbar />
      </header>    
        <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 page-main-login">
        <div class="w-full sm:max-w-md p-5 mx-auto">
            <h2 class="mb-12 text-center text-5xl font-extrabold">WELCOME</h2>
            <form onSubmit={handleSubmit}>
            <div class="mb-4">
                <label class="block mb-1" for="email">Email-Address</label>
                <input id="email" type="text" onChange={e=>setEmail(e.target.value)} name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                {errors.email && <span className='text-red-600'>{errors.email}</span>}
            </div>
            <div class="mb-4">
                <label class="block mb-1" for="password">Password</label>
                <input id="password" type="password" onChange={e=>setPassword(e.target.value)} name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                {errors.password && <span className='text-red-600'>{errors.password}</span>}
                
            </div>
            <div class="mt-6 flex items-center justify-between">
                <div class="flex items-center">
                <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
                </div>
                <a href="#" class="text-sm"> Forgot your password? </a>
            </div>
            <div class="mt-6">
                <button  class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
            </div>
            <div class="mt-6 text-center">
                <a href="Register" class="underline">Sign up for an account</a>
            </div>
            </form>
        </div>
        </div>
      <footer class="page-footer-login c bg-black">
        <p>asdasd</p>
      </footer> 
    </div>
    </html>
  )
}

export default Login