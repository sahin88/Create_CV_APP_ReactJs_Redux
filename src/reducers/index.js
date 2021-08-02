import { combineReducers } from 'redux';

import header from './header'
import education from './education'
import project from './project'
import works from './work'
import skills from './skills'
import softwareTools from './softwaretools'
export default combineReducers({ header, project, works,education, skills, softwareTools });