import React from 'react'
import Task from './Task'
import { useState } from 'react'

const Home = () => {

  const initialArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")) : [];

  const[tasks,setTasks] = useState([])
  const[title,setTitle] = useState(" ")
  const[description,setDescription]=useState("")
  // console.log(title,description);


  const submit = (e)=>{
    e.preventDefault();
  
    setTasks([
      ...tasks,{
        title,description

      }
    ]
    )
    setTitle("")
    setDescription("")
  }

  const deleteTask = (index)=>{
    const filteredArr = tasks.filter((val,i)=>{
      return i != index;
    }) 
    console.log(filteredArr)
    setTasks(filteredArr)
  }

   

  return (
    <div className='container'>
        <h1 className='heading'>DAILY GOALS</h1>
        <form onSubmit={submit}>
            <input type="text" placeholder= "Title" value={title} onChange = {(e)=>{setTitle(e.target.value)}}/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Description' value={description} onChange = {(e)=>{setDescription(e.target.value)}}></textarea>
            <button type="submit">
                Add
            </button>
            {tasks.map((item,index)=>(

              <Task key={index} title = {item.title} description = {item.description} deleteTask = {deleteTask} index = {index}/>
              ))}
        </form>
    </div>
  )
}

export default Home;