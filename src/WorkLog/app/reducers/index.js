import { combineReducers } from 'redux'
import projects from './projects'
import tasks from './tasks'

const rootReducer = combineReducers({
    project : projects,
    task : tasks
})

export default rootReducer
