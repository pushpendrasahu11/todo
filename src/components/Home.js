
import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'

import testdata from '../utilities/data.json'
import '../style/Home.css';


function Home() {
  const [data,setData] = useState({title:"",body:""});
  const [dataArray,setDataArray] = useState([]);

  useEffect(() => {
    function handleClickOutside(event) {
      const container = document.getElementsByClassName('newtask-container')[0];
      if (!container.contains(event.target)) {
        hide();
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const change = (e)=>{
    const {name,value} = e.target;
    setData({...data,[name]:value});
  }

  const show=()=>{
      document.getElementById("bodyinput").style.display = "block";
      document.getElementById("button").style.display = "block";
      document.getElementById("titleinput").placeholder = "Add Title";
  }

  const hide=()=>{
    document.getElementById("bodyinput").style.display = "none";
    document.getElementById("button").style.display = "none";
    document.getElementById("titleinput").placeholder = "Add New Task";
  }

  const submit=()=>{
    console.log(dataArray);
    setDataArray([...dataArray,data]);
    setData({title:"",body:""})

  }

  return (
    <div className='home-container'>
        <div className="home-top">
        <div className='newtask-container'>
          <div className="newtask-content">
            <input 
            className="inputs"
              type="text" 
              placeholder="Add New Task" 
              onClick={show}
              id="titleinput"
              name="title"
              value={data.title}
              onChange={change}
              />
            <textarea 
            className="inputs" 
            type="text"  
            placeholder="Add Description" 
            id="bodyinput"
            name="body"
            value={data.body}
            onChange={change}
            />
              <div className="newtask-button" ><button id="button" onClick={submit}>Add</button>
            </div>
            </div>
            
        </div>
        </div>
        <div className="home-body">
        {
          testdata.todos.map( (task)=>(
            <TaskCard title={task.title} body={task.body}></TaskCard>
            
            ))    
        }
        <div className="empty"></div>
        </div>
    </div>
  )
}

export default Home