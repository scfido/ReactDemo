import { combineReducers } from 'redux'
import projectReducer from './projects'
import tasks from './tasks'

const rootReducer = combineReducers({
    project : projectReducer,
    task : tasks
})

export default rootReducer
