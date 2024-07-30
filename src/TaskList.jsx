function TaskListComponent(tasks,setTasks) {

    const handleToggleCompletes =(index)=>{
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }
}