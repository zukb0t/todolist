import projectList from './projectlist.js';
import Task from './task.js';
import {displayTasks} from './interface.js';
import {lightFormat} from 'date-fns';
import addProjectToLocalStorage from './localstorage.js';

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
        displayTasks(index);
    }

    submitEdit.addEventListener("click" , addATask);
}


function addTask(index,title,description,dueDate,priority){
    projectList[index].tasks.push(Task(title,description,dueDate,priority));
}

function removeTask(projectIndex,taskIndex){
    projectList[projectIndex].tasks.splice(taskIndex, 1);
    addProjectToLocalStorage();
}

function editTask(projectIndex, taskIndex){
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
        projectList[projectIndex].tasks[taskIndex].title = updateTask.value;
        projectList[projectIndex].tasks[taskIndex].description = updateDescription.value;
        projectList[projectIndex].tasks[taskIndex].dueDate = updateDueDate.value;
        projectList[projectIndex].tasks[taskIndex].priority = updatePriority.value;
        modal.close();
        addProjectToLocalStorage();
        displayTasks(projectIndex);
    }

    update.addEventListener("click" , edit);
}  

export default addTask;
export {addTaskForm,removeTask,editTask};