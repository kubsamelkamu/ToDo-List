function TaskListComponent(tasks,setTasks) {

    const handleToggleCompletes =(index)=>{
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }

    const handleDelete=()=>{
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return(
        <div className="task-list">
            <ul>
                {tasks.map((task,index)=>(
                     <li key={index} className={task.completed ? 'completed' : ''}>
                        <span onClick={() => handleToggleCompletes(index)}>
                        {task.text}
                        </span>
                        <button type="button" onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        
        </div>
    )
}