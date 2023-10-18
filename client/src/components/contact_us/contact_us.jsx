import React, { useEffect } from 'react'
import My_Navbar from '../navbar/My_Navbar'
import '../../../dist/output.css'
import './contact_us.css'
import Footer from '../footer/Footer.jsx'
import Axios from 'axios'
import { useState } from 'react'
import axios from 'axios'

function Contact_us() {

    const [usersList, setUsersList] = useState([]);
    const [loading,setLoading]= useState(true);

    // const getUsers = async ()=>{
        
    //     const fecth = await Axios.get('http://localhost:3001/users').then((response)=>{


    //         // data=response.data;
    //         setUsersList(response.data);
    //         setLoading(false);
    //         console.log(usersList);
    //     });

    // }

    useEffect(()=>{
      const getUsers = async ()=>{
        
        const fecth = await axios.get('http://localhost:3001/users').then((response)=>{
            // data=response.data;
            setUsersList(response.data);
            setLoading(false);
            console.log(usersList);
        });

        return fecth;
    };
    getUsers();
    },[]);


    useEffect(()=>{

    },[usersList]);


    


    // {usersList.map((val, key)=>{
    //                     return(
    //                         <p>{val.name}</p>
    //                     )
    //                 })}
    
  return (
    
    <>
    <div id="title" class='gird-contact-us'>
      <header class="page-header-contact-us absolute top-0 left-0 right-0 bg-black">
         <My_Navbar />
      </header>    
        <div class="flex items-center justify-center min-h-screen bg-gray-900 page-main-contact-us">
	<div class="col-span-12 ">
		<div class="overflow-auto lg:overflow-visible ">
			<table class="table text-gray-400 border-separate space-y-6 text-sm">
				<thead class="bg-gray-800 text-gray-500">
					<tr >
						<th class="p-3">Admin</th>
						<th class="p-3 text-left">Address</th>
						<th class="p-3 text-left">Phones</th>
						<th class="p-3 text-left">Action</th>
					</tr>
				</thead>
				<tbody>
          {usersList.map(val => (
					<tr class="bg-gray-800" key={val}>
						<td class="p-3">
							<div class="flex align-items-center">
								<img class="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/>
								<div class="ml-3">
									<div class="">{val.name}</div>
									<div class="text-gray-500">{val.email}</div>
								</div>
							</div>
						</td>
						<td class="p-3">
							
						</td>
						<td class="p-3 font-bold">
							
						</td>
						<td class="p-3 ">
							<a href="#" class="text-gray-400 hover:text-gray-100  mx-2">
								<i class="material-icons-outlined text-base">edit</i>
							</a>
						</td>
					</tr>
            ))}
				</tbody>
        {/* <tbody>
          {usersList.map(val => (
            <tr key={val.name}>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody> */}
			</table>
		</div>
	</div>
</div>
      <footer class="page-footer-contact-us bg-black">
        <Footer />
      </footer> 
    </div>
    </>
  )
}

export default Contact_us