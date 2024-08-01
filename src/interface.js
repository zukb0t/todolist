import projectList from './projectlist.js';
import {removeTask} from './taskproperties.js';

function displayProjects(){
    const sidebar = document.querySelector('.sidebar');
    const projects = document.createElement('ul');
    projects.classList.add('project');
    projects.textContent = '';
    projectList.forEach((currentProject,index) => {
        const project = document.createElement('li');
        project.setAttribute('data-project-index',index);
        project.textContent = currentProject.project;
        projects.appendChild(project);
    });
    
    sidebar.appendChild(projects);
    projects.addEventListener("click",function(event){
        const projectIndex = event.target.dataset.projectIndex;
        displayTasks(projectList[projectIndex].tasks);
    })
};

function displayTasks(taskList){
    console.log(taskList);
    const content = document.querySelector('.content');
    content.textContent = '';
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
        const changePrio= document.createElement('button');

        title.textContent = "Task: " + currentTask.title;
        description.textContent = "Description: " + currentTask.description;
        dueDate.textContent = "Due date: " + currentTask.dueDate;
        priority.textContent = "Priority: " + currentTask.priority;

        remove.textContent = "Remove";
        edit.textContent = "Edit";
        changePrio.textContent = "Priority";

        tasks.appendChild(title);
        tasks.appendChild(description);
        tasks.appendChild(dueDate);
        tasks.appendChild(priority);

        buttons.appendChild(remove);
        buttons.appendChild(edit);
        buttons.appendChild(changePrio);

        card.appendChild(tasks);
        card.appendChild(buttons);

        content.appendChild(card);
        remove.addEventListener("click", function(){
            const taskIndex = card.dataset.taskIndex;
            removeTask(taskList,taskIndex);    
        });
    });
}


export default displayProjects;
export {displayTasks};