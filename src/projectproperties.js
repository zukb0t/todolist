import Project from './project.js';
import projectList from './projectlist.js';
import {updateDisplay} from './interface.js';


function addProject(title){
    projectList.push(Project(title));
}

function removeProject(index){
    projectList.splice(index,1);
}

export default addProject;
export {removeProject};
