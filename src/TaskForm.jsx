const { useState } = require("react");

function TaskManager({setTasks}){
    const[input,setInput] = useState('');

    return(
        <form onSubmit={}>
            <input type="text" id="tasks" value={input} 
            placeholder="Enter tasks ..." onChange={(e)=>e.target.value}/>
            <button type="submit">ADD</button>
        </form>
    )
}