import React, { useState } from 'react'

const Todo = () => {
    const [taskVal, setTaskVal] = useState('');
    const [tasks, setTasks] = useState([]);
    const deleteTaskHandler = (index) =>{
        setTasks((tasks) => tasks.filter((task, i) => i !== index));
    };
    const addTask= () =>{
        if(taskVal.length > 0){
            setTasks((prevTaks) => {
                return [...prevTaks, taskVal];
            });
            setTaskVal(''); 
        }else{
            window.alert("enter the task");
        }
        
    }
    const taskChangeHandler = (e) => {
        setTaskVal(e.target.value);
    }
  return (
    <div>
      <input type='text' placeholder='Enter the Task' value={taskVal} onChange={taskChangeHandler} />

      <button onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map((task, index )=> {
            return (
                <li key={index}>
                    {task} 
                    <button onClick={() => {deleteTaskHandler(index)}} >Delete</button>
                 </li>
                 )
                })
            }
        </ul>
    </div>
  )
}

export default Todo
