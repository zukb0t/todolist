import projectList from './projectlist.js';

function addProjectToLocalStorage(){
    localStorage.setItem('projects', JSON.stringify(projectList));
}

const getProjectsFromLocalStorage = () => JSON.parse(localStorage.getItem('projects')) || [];



export default addProjectToLocalStorage;
export {getProjectsFromLocalStorage};