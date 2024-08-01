import projectList from './projectlist.js';
import addProject, {removeProject} from './projectproperties.js';
import addTask, {removeTask} from './taskproperties.js';
import displayProjects from './interface.js';
import './style.css';


addProject("Runescape");
addProject("TheOdinProject");
addTask(0,"colosseum","sub-16","7/7/2024","high");
addTask(0,"cox cm trios", "sub-19", "7/31/2024", "high");
addTask(0,"inferno", "sub-45","7/31/2024","high");
displayProjects();