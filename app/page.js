"use client"

/*import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import Link from 'next/link'
import Header from './Components/Header'


const page = () => {
  const [num, setnum] = useState(10)
  
  const [users, setusers] = useState([])
  const getUsers=async ()=>{
    
    const data= await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data.data)
  }
  useEffect(() => {
    getUsers()
  }, [])
  getUsers()
  const [username, setUsername] = useState("DFG")
  return (
    <>
   <h1 className="mb-5 text-xl">Enter your Name :</h1>
    <form>
      <input type="text" className="border-2 border-zinc-700 px-4 py-2 text-xl" 
       value={username}
       onChange={(e) =>{
        //two way bindind
         setUsername(e.target.value)
          console.log(username)
        }}

       

       
        
    />
      
      
 
      
    </form>
      
     <h1 className='text-2xl font-bold '>Home Page</h1>
     <a href='/Contact'>Contact</a>

     //dynamic routing
     <div>
     <button onClick={getUsers} className='bg-green-400 text-white rounded px-4 py-2  mt-5'>Get Data</button>
     <div className='p-8 bg-slate-100 mt-5'>
       {users.map((e)=>{
        return <li>{e.username}....<a href={`/${e.id}`}>Explore</a></li>
       })}
     </div>
     </div>

     <Header num ={n}/>
    </>
  )
}

export default page*/
//context api
/*import React,{useContext} from 'react'
import { MyContext } from '@/Helper/Context'
import Header from './Components/Header'


const page = () => {
  
   const user = useContext(MyContext)
   console.log(user)
  return (
    <div>
      {user}
      <Header/>
    </div>
  )
}

export default page*/

//REACT TOSTIFY

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify=()=>{
    toast('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div>
      <button onClick={notify}className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  rounded ">Login</button>
      <ToastContainer />
    </div>
  )
}

export default page


//SERVER SIDE RENDERING

/*import React,{useState} from 'react'
import axios from 'axios'

const page = () => {
  const [num, setnum] = useState(10)
  const getData = () =>{
    const response= axios.get("https://picsum.photos/v2/list?page=2&limit=100")
    console.log(response)
  }
  
  return (
    <div>
     <button onClick={getData} className="bg-green-500 rounded mt-3 ml-4 px-4 py-2">CLick</button>
    </div>
  )
}

export default page*/



