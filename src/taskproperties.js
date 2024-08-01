import projectList from './projectlist.js';
import Task from './task.js';
import {displayTasks} from './interface.js';

function addTask(index,title,description,dueDate,priority){
    projectList[index].tasks.push(Task(title,description,dueDate,priority));
}

function removeTask(tasks,taskIndex){
    tasks.splice(taskIndex, 1);
    console.log(tasks);
    displayTasks(tasks);
}

function editTask(){
    
}

export default addTask;
export {removeTask};