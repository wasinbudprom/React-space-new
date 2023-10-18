import React from 'react'
import My_Navbar from '../navbar/My_Navbar'
import '../../../dist/output.css'
import { useState } from 'react'
import Axios from 'axios'
import Validation from './RegisterValidation'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

  const [errors, setErrors]=useState({})

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const [usersList, setUsersList] = useState([]);

    const navigate = useNavigate();


    // const addUsers =(event)=>{
    //   event.preventDefault();
    //   setErrors(Validation(name,email,password))
     
    //     if(errors.name === "" && errors.email === "" && errors.password === ""){
    //       axios.post('http://localhost:3001/register',{
    //     name: name,
    //     email: email,
    //     password: password,
    //   })
    //       .then(()=>{
    //         navigat();
    //           },
    //         ]);
    //       })
    //       .catch(err => console.log(err));
    //     };
    //   };



    const addUsers =(event)=>{
      event.preventDefault();
      setErrors(Validation(name,email,password));
      console.log(name,email,password);
      Axios.post('http://localhost:3001/register',{
        name: name,
        email: email,
        password: password,
      }).then (() => {
        
        setUsersList([
          ...usersList,{
          name: name,
          email: email,
          password: password,
        },
        ]);navigate('/Login');
      });
      // window.location.reload();
    };

  return (
    <>
    <div id="title" className='gird-login'>
      <header className="page-header absolute top-0 left-0 right-0 bg-black">
         <My_Navbar />
      </header>    
        <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-10">
          <form>
            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600">Name:</label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-user text-blue-500"></i>
                </div>

                <input
                  type="text"
                  value={name}
                  onChange={(event)=>{
                    setName(event.target.value)
                  }}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your name"
                />
                {errors.name && <span className='text-red-600'>{errors.name}</span>}
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>
                
                <input

                  type="email"
                  value={email}
                  onChange={(event)=>{
                    setEmail(event.target.value)
                  }}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your email"
                />
                {errors.email && <span className='text-red-600'>{errors.email}</span>}
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input

                  type="password"
                  value={password}
                  onChange={(event)=>{
                    setPassword(event.target.value)
                  }}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                />
                {errors.password && <span className='text-red-600'>{errors.password}</span>}
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="button"
                onClick={addUsers}
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span className="mr-2 uppercase">Sign Up</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <a href="#" target="_blank"
          className="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center">
          <span className="ml-2">You have an account?
            <a href="Login"className="text-xs ml-2 text-blue-500 font-semibold">Login here</a></span>
        </a>
      </div>
    </div>
      <footer className="page-footer-login c bg-black">
        <p>asdasd</p>
      </footer> 
    </div>
    </>
  )
}

export default Register