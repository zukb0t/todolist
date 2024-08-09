import projectList from './projectlist.js';
import Task from './task.js';
import {displayTasks} from './interface.js';
import addProjectToLocalStorage from './localstorage.js';
import {lightFormat} from 'date-fns';

let edit = null;
let addATask = null;


function addTaskForm(index){
    const modal = document.querySelector('#add-task');
    const submitEdit = document.querySelector('#addtoproject');
    const addTitle = document.querySelector('#addtask');
    const addDescription = document.querySelector('#adddescription');
    const addDueDate = document.querySelector('#addduedate');
    const addPriority = document.querySelector('#addpriority');

    addDueDate.setAttribute('min',lightFormat(new Date(), 'yyyy-MM-dd'));

    modal.showModal();

    if(addATask){
        submitEdit.removeEventListener("click",addATask);
    }

    addATask = (event) => {
        event.preventDefault();
        const title = addTitle.value;
        const description = addDescription.value;
        const dueDate = addDueDate.value;
        const priority = addPriority.value;
        modal.close();
        addTask(index, title, description, dueDate, priority);
        addProjectToLocalStorage();
        displayTasks(projectList[index].tasks);
    }

    submitEdit.addEventListener("click" , addATask);
}


function addTask(index,title,description,dueDate,priority){
    projectList[index].tasks.push(Task(title,description,dueDate,priority));
}

function removeTask(tasks,taskIndex){
    tasks.splice(taskIndex, 1);
}

function editTask(task,taskList){
    const modal = document.querySelector('#edit-task');
    const update = document.querySelector('#update');
    const updateTask = document.querySelector('#task');
    const updateDescription = document.querySelector('#description');
    const updateDueDate = document.querySelector('#duedate');
    const updatePriority = document.querySelector('#priority');
 
    updateDueDate.setAttribute('min',lightFormat(new Date(), 'yyyy-MM-dd'));

    modal.showModal();

    if(edit){
        update.removeEventListener("click",edit);
    }

    edit = (event) => {
        event.preventDefault();
        task.title = updateTask.value;
        task.description = updateDescription.value;
        task.dueDate = updateDueDate.value;
        task.priority = updatePriority.value;
        modal.close();
        addProjectToLocalStorage();
        displayTasks(taskList);
    }

    update.addEventListener("click" , edit);
}  

export default addTask;
export {addTaskForm,removeTask,editTask};