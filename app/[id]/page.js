"use client"
import axios from 'axios'
import React ,{useState,useEffect} from 'react'
const page = ({params}) => {
const {id}=params;
 const [users, setusers] = useState([])
  const getUsers=async ()=>{
    
    const {data}= await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
   setusers(data)
  }
  getUsers()
  useEffect(() => {
    getUsers()
  }, [])

  return<>{JSON.stringify(users)}</>;

};

export default page

