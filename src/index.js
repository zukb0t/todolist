import {displayDefault} from './interface.js';
import addProjectList, {checkToday,checkWeek} from './eventhandlers.js';
import './style.css';

displayDefault();
addProjectList();
checkToday();
checkWeek();
