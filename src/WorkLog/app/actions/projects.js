import ActionTypes from '../constants/actionTypes'
import fetch from 'isomorphic-fetch'

//视图
export function newView(show = true) {
    return { type: ActionTypes.Project.NEW_VIEW, show:show }
}

export function beginEdit(id) {
    return { type: ActionTypes.Project.BEGIN_EDIT, id:id}
}

export function endEdit(id) {
    return { type: ActionTypes.Project.END_EDIT, id:id}
}

    //服务端操作
export function getProjects() {
    return function (dispatch) {

        return fetch("api/project")
              .then(response => response.json())
              .then(json =>
                  dispatch(setProjectItems(json))
              )
    }
}

export function postProject(project) {
    return { type: ActionTypes.Project.PUT_PROJECT, project:project }
}

export function putProject(id, title) {
    return {
        type: ActionTypes.Project.UPDATE_PROJECT, 
        id:id,
        title:title 
    }
}

export function deleteProject(id) {
    return { type: ActionTypes.Project.DELETE_PROJECT, id:id }
}

    //客户端
export function newProject(title) {
    let project = {
        title:title,
        taskCount:0,
        syncing:true,
    }

    return function (dispatch) {

        dispatch(insertProjectItem(project))

        return fetch('api/project', {
            method: 'post',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)
            }).then(response => {
                    project.syncing = false;
                    dispatch(updateProjectItem(project));
            }
          )

        // 在实际应用中，还需要
        // 捕获网络请求的异常。
    }
}

export function editProject(project) {
    project.syncing = true;
    project.editing = false;
    dispatch(updateProjectItem(project))

    return fetch('api/project', {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(project)
        }).then(response => {
            project.syncing = false;
            dispatch(updateProjectItem(project));
        }
      )
}

export function setProjectItems(projects) {
    return { type: ActionTypes.Project.SET_PROJECT_ITEMS, projects }
    }

export function insertProjectItem(project) {
    return { type: ActionTypes.Project.INSERT_PROJECT_ITEM, project }
    }

export function updateProjectItem(project) {
    return { 
        type: ActionTypes.Project.UPDATE_PROJECT_ITEM, 
        project: project
    }
}

export function removeProjectItem(id) {
    return { type: ActionTypes.Project.REMOVE_PROJECT_ITEM, id }
    }
