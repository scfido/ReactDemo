import ActionTypes from '../constants/actionTypes'

const initialState = {
    loading:false,
    editingId : -1,
    newProjectView : false,
    editProjectView : false,
    projects:[
        {
            title: 'VGS II',
            tasks: 32,
            id: 0
        }
    ]
}

export default function projects(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.Project.NEW_VIEW :
            return Object.assign({}, state, {newProjectView: action.show});

        case ActionTypes.Project.EDIT_VIEW :
            return Object.assign({}, state, {editProjectView: action.show});

        case ActionTypes.Project.GET_PROJECTS :
            return Object.assign({}, state, {loading: true});
            
        case ActionTypes.Project.POST_PROJECT :
            return Object.assign({}, state, {loading: true});

        case ActionTypes.Project.PUT_PROJECT :
            {
                let nextState = Object.assign({}, state, {loading: false});
                return nextState.projects.map(project =>{
                    if(project.id === action.id)
                        project.title = action.title
                }
                )
            }

        case ActionTypes.Project.DELETE_PROJECT :
            return state.projects.filter(project =>
                project.id !== action.id
        )

        case ActionTypes.Project.INSERT_PROJECT_ITEM :
            let nextState = Object.assign({}, state, ...state);
            if(isNaN(action.project.id)){
                let newId = state.projects.reduce((maxId, p) => {
                    let id = isNaN(p.newId) ? 0 : p.newId;
                    return Math.max(id, maxId)}, -1);
                newId +=1;
                action.project.newId = newId;
            }

            nextState.projects = [action.project, ...nextState.projects];
            return nextState

        case ActionTypes.Project.SET_PROJECT_ITEMS :
            return Object.assign({}, state, {projects:action.projects});

        case ActionTypes.Project.UPDATE_PROJECT_ITEM :
            return {
                projects: state.projects.map(project =>
                    (project.id === action.id || project.newId === action.newId) ?
                      Object.assign({}, project, action.project) :
                      project),
                  ...state
                }
            
        case ActionTypes.Project.REMOVE_PROJECT_ITEM :
            return state.projects.filter(project =>
                project.id !== action.id
        )

        default:
                return state
    }
}