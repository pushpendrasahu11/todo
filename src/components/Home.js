import React from 'react'
import TaskCard from './TaskCard'
import NewTask from './NewTask';

import data from '../utilities/data.json'
import '../style/Home.css';

function Home() {
  return (
    <div className='home-container'>
        <div className="home-top">
        <div className="home-create-task">
            <NewTask>

            </NewTask>
        </div>
        </div>
        <div className="home-body">
        {
          data.todos.map( (task)=>(
            <TaskCard title={task.title} body={task.body}></TaskCard>
            
            ))    
        }
        <div className="empty"></div>
        </div>
    </div>
  )
}

export default Home