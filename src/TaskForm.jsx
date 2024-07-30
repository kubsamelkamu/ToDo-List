import { useState } from "react";
import PropTypes from 'prop-types';


function TaskManager({setTasks}){
    const[input,setInput] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (input.trim === '') {
            return;
        }
        setTasks(prevTasks => [...prevTasks,{text:input,completed:false}]);
        setInput('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="tasks" value={input} 
            placeholder="Enter tasks ..." onChange={(e)=>e.target.value}/>
            <button type="submit">ADD</button>
        </form>
    )
}