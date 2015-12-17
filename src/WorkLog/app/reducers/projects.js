import ActionTypes from '../constants/actionTypes'

const initialState = {
    loading:false,
    editingId : -1,
    newProjectView : false,
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

        case ActionTypes.Project.BEGIN_EDIT :
            return Object.assign({}, state, {...state, projects: state.projects.map(project =>
                     Object.assign({}, project, {editing: (project.id === action.id )})
                )}
            );

        case ActionTypes.Project.END_EDIT :
            return Object.assign({}, state, {...state, projects: state.projects.map(project =>
                     Object.assign({}, project, {editing: false})
                )}
            );

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
                let newId = state.projects.reduce((minId, p) => {
                    let id = isNaN(p.id) ? 0 : p.id;
                    let b=0;
                    return Math.min(id, minId)}, 9999999);
                newId -=1;
                action.project.id = newId;
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

    function _updateProjectWhere(projectByID, where, updates) {
        const newProjectsByID = {...projectByID};
        const updatedProjects = _.filter(projectByID, where)
          .map(project => ({...project, ...updates}))
          .forEach(project => newProjectsByID[project.id] = project);

        return newProjectsByID;
    }
}