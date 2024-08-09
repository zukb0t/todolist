import projectList from './projectlist.js';
import {removeTask,editTask, addTaskForm} from './taskproperties.js';
import {removeProject} from './projectproperties.js';
import { getProjectsFromLocalStorage } from './localstorage.js';

function displayDefault(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    content.textContent = "Welcome";
    displayProjects();

}

function displayProjects(){
    const sidebar = document.querySelector('.sidebar');
    const listContainer = document.querySelector('.listprojects');
    listContainer.innerHTML = '';
    const projects = document.createElement('ul');
    projects.classList.add('project');
    const projectStorage = getProjectsFromLocalStorage();
    projectStorage.forEach((currentProject,index) => {
        const deleteBtn = document.createElement('button');
        const insertTask = document.createElement('button');
        const project = document.createElement('li');
        project.setAttribute('data-project-index',index);
        project.classList.add('projectli');

        deleteBtn.textContent = "Delete";
        project.textContent = currentProject.project;

        insertTask.textContent = "Add Task";

        project.appendChild(insertTask);
        project.appendChild(deleteBtn);
        projects.appendChild(project);

        deleteBtn.addEventListener("click", () => {
            const index = project.dataset.projectIndex;
            removeProject(index);
            displayDefault();
            displayProjects();
        });
     
        insertTask.addEventListener('click', (event) => {
            const index = project.dataset.projectIndex;
            addTaskForm(index);
        });
    });

    listContainer.appendChild(projects);
    sidebar.appendChild(listContainer);

    projects.addEventListener("click",function(event){
        const projectIndex = event.target.dataset.projectIndex;
        displayTasks(projectStorage[projectIndex].tasks);
    });
};

function displayTasks(taskList){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    taskList.forEach((currentTask,index) =>{
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-task-index',index);
        const tasks = document.createElement('ul');
        tasks.classList.add('task');

        const title = document.createElement('li');
        const description = document.createElement('li');
        const dueDate = document.createElement('li');
        const priority = document.createElement('li');

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        const remove = document.createElement('button');
        const edit = document.createElement('button');

        title.textContent = "Task: " + currentTask.title;
        description.textContent = "Description: " + currentTask.description;
        dueDate.textContent = "Due date: " + currentTask.dueDate;
        priority.textContent = "Priority: " + currentTask.priority;
        remove.textContent = "Remove";
        edit.textContent = "Edit";

        tasks.appendChild(title);
        tasks.appendChild(description);
        tasks.appendChild(dueDate);
        tasks.appendChild(priority);

        buttons.appendChild(remove);
        buttons.appendChild(edit);

        card.appendChild(tasks);
        card.appendChild(buttons);

        content.appendChild(card);

        remove.addEventListener("click", function(){
            const taskIndex = card.dataset.taskIndex;
            removeTask(taskList,taskIndex);
            displayTasks(taskList);  
        });

        edit.addEventListener("click", () => {
            const task = taskList[card.dataset.taskIndex];
            editTask(task,taskList);
            
        });
    });

}

function displayTodayOrWeek(taskList){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    taskList.forEach((currentTask,index) =>{
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-task-index',index);

        const tasks = document.createElement('ul');
        tasks.classList.add('task');

        const title = document.createElement('li');
        const description = document.createElement('li');
        const dueDate = document.createElement('li');
        const priority = document.createElement('li');

        title.textContent = "Task: " + currentTask.title;
        description.textContent = "Description: " + currentTask.description;
        dueDate.textContent = "Due date: " + currentTask.dueDate;
        priority.textContent = "Priority: " + currentTask.priority;

        tasks.appendChild(title);
        tasks.appendChild(description);
        tasks.appendChild(dueDate);
        tasks.appendChild(priority);

        card.appendChild(tasks);

        content.appendChild(card);
    });

}


export default displayProjects;
export {displayTasks, displayTodayOrWeek, displayDefault};