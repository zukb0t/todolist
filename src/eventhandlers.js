import addProject from './projectproperties.js';
import displayProjects, {displayTodayOrWeek} from './interface.js';
import projectList from './projectlist.js';
import {lightFormat, add} from 'date-fns';

function addProjectList(){
    const add  = document.querySelector('.Add');
    const modal = document.querySelector('#add-project');
    const accept = document.querySelector('.accept');
    const project = document.querySelector('#project');

    add.addEventListener("click", () => {
        modal.showModal();
    });

    accept.addEventListener("click", (event) => {
        event.preventDefault();
        modal.close(project.value);
    });

    modal.addEventListener("close", () => {
        if(modal.returnValue===''){                                  
            return;
        }
        else{
            const title = modal.returnValue;
            addProject(title);
            displayProjects();
        }
    });
};

function checkToday(){
    let list = [];
    const today = document.querySelector('.Today');
    today.addEventListener("click", () => {
        const currentDay = lightFormat(new Date(), 'yyyy-MM-dd');
        projectList.forEach((project) => {
            const tasks = project.tasks;     //[{...}, {...}]
            const todayTasks = tasks.filter((task) => task.dueDate === currentDay);
            todayTasks.forEach((task) => list.push(task));
        });

        displayTodayOrWeek(list);
        list = [];
    });
};

function checkWeek(){
    let list = [];
    const week = document.querySelector('.Weekly');
    week.addEventListener("click", () => {
        const startDate = lightFormat(new Date(), 'yyyy-MM-dd');
        const endDate = lightFormat(add(new Date(), {days:7}), 'yyyy-MM-dd');
        projectList.forEach((project) => {
            const tasks = project.tasks;
            const weekTasks = tasks.filter((task) => task.dueDate >= startDate && task.dueDate <= endDate);
            weekTasks.forEach((task) => list.push(task));
        });

        displayTodayOrWeek(list);
        list = [];
    });
};

export default addProjectList;
export {checkToday,checkWeek};