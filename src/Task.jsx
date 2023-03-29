import React, { useState } from 'react'

const Task = ({title,description,deleteTask,index}) => {


  return (
    <div className='task'>
        <div>
        <p>{title}</p>
        <span>{description}</span>
        </div>
    <button type="reset" onClick={()=> {
      deleteTask(index)
    }}>  - </button>
    </div>
  )
}

export default Task