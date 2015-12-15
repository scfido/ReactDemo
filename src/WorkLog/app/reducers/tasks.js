import ActionTypes from '../constants/actionTypes'

const initialState = [
  {
      text: 'Use Redux',
      completed: false,
      id: 0
  }
]

export default function tasks(state = initialState, action) {
    return state;

    //switch (action.type) {
    //    case ADD_WORKLOG:
    //        return [
    //          {
    //              id: state.reduce((maxId, worklog) => Math.max(worklog.id, maxId), -1) + 1,
    //              completed: false,
    //              text: action.text
    //          }, 
    //          ...state
    //        ]

    //    case DELETE_WORKLOG:
    //        return state.filter(worklog =>
    //            worklog.id !== action.id
    //        )

    //    case EDIT_WORKLOG:
    //        return state.map(worklog =>
    //            worklog.id === action.id ?
    //              Object.assign({}, worklog, { text: action.text }) :
    //              worklog
    //        )

    //    case COMPLETE_WORKLOG:
    //        return state.map(worklog =>
    //            worklog.id === action.id ?
    //              Object.assign({}, worklog, { completed: !worklog.completed }) :
    //              worklog
    //        )

    //    case COMPLETE_ALL:
    //        const areAllMarked = state.every(worklog => worklog.completed)
    //        return state.map(worklog => Object.assign({}, worklog, {
    //            completed: !areAllMarked
    //        }))

    //    case CLEAR_COMPLETED:
    //        return state.filter(worklog => worklog.completed === false)

    //    default:
    //        return state
    //}
}