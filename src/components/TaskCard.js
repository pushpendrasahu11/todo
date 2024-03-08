import React from 'react'
import { MdOutlineCheckBox } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import '../style/TaskCard.css'

function TaskCard({title,body}) {
  return (
    <div className='taskcard-container'>
        <div className="taskcard-title">
            <h2>{title} </h2>
        </div>
        <div className="taskcard-body">
            <p>{body}</p>
        </div>
        <div className="taskcard-options">
            <div className='edit'><MdEdit/><span>Edit</span></div>
            <div className='delete'><MdDelete/> <span>Update</span></div>
            <div className='compeleted'><MdOutlineCheckBox /><span>Completed</span></div>
        </div>
    </div>
  )
}

export default TaskCard