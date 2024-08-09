import Project from './project.js';
import projectList from './projectlist.js';
import addProjectToLocalStorage from './localstorage.js';


function addProject(title){
    projectList.push(Project(title));
    addProjectToLocalStorage();

}

function removeProject(index){
    projectList.splice(index,1);
    addProjectToLocalStorage();
}

export default addProject;
export {removeProject};
