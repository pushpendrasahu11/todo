import React from 'react'
import '../style/NewTask.css'

function NewTask() {

  const show=()=>{
      document.getElementById("bodyinput").style.display = "block";
  }

  return (
    <div className='newtask-container'>
      <div className="newtask-content">
        <input 
        className="inputs"
          type="text" 
          placeholder="Add Title" 
          onClick={show}
          id="titleinput"
          />
        <textarea 
        className="inputs" 
        type="text"  
        placeholder="Add Description" 
        id="bodyinput"
        />
        </div>
    </div>
  )
}

export default NewTask