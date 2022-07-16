import React from 'react'
import Navbar from './Navbar'
import { useEffect, useState } from "react";
const Perdayfrontend = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
      const fetchUsers = async () => {
        const res = await fetch('http://localhost:8000/admin');
        const data = await res.json();
        setUsers(data);
       
      };
      fetchUsers();
    }, []);
  
  return (
    <div>
    <Navbar/>
    <h1 className='text-center m-2'>দিনের উপর ভিত্তি করে</h1>
    <div className='m-2'>
<div className="row">

      {
        users && users.filter((user)=>{
          if(user.basis=="Per Day"){
            return users
          }
          
          // else if(hospital.state.toLowerCase().includes(searchstate.toLocaleLowerCase()) ){
          //   console.log(hospital.state.toLowerCase().includes(searchstate.toLocaleLowerCase()))
          //      return hospital
          // }
        }).map((user) => (
        <div className="col-md-3" key={user._id}>



        <div class="card mt-4" style={{width:"18rem"}}>
        <img src={user.avatar} class="card-img-top" alt="..."/>
        <hr/>
        <div class="card-body">
          
        <h4 className="card-title">{user.name}</h4>
        <p class="card-text">{user.description}</p>
        <p class="card-text">{user.phnumber}</p>
          <p class="card-text">{user.basis}</p>
          <p class="card-text">{user.timedu}</p>
          <p class="card-text">{user.compensation}</p>
         
        </div>
      </div>
        </div>
      ))
        
    
    }
        
      </div>
      </div>
    
    
    </div>
  )
}

export default Perdayfrontend