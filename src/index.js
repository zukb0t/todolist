import addProject from './projectproperties.js';
import addTask from './taskproperties.js';
import displayProjects, {displayDefault} from './interface.js';
import addProjectList, {checkToday,checkWeek} from './eventhandlers.js';
import {add, lightFormat} from 'date-fns';
import './style.css';

//addProject("Runescape");
//addTask(0,"colosseum","sub-16",lightFormat(new Date(), 'yyyy-MM-dd'),"high");
//addTask(0,"cox cm trios", "sub-19", lightFormat(new Date(), 'yyyy-MM-dd'),"high");
//addTask(0,"inferno", "sub-45",lightFormat(add(new Date(), {days:5}), 'yyyy-MM-dd'),"high");
//addTask(0,"theatre of blood", "duos",lightFormat(add(new Date(), {days:24}), 'yyyy-MM-dd'),"high");
displayDefault();
addProjectList();
checkToday();
checkWeek();

//localstorage
