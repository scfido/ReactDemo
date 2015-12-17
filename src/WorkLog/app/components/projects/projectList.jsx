import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import ProjectEditForm from './projectEditForm'
import ProjectItem from './projectItem'

class ProjectList extends Component {
    static propTypes = {
        projects: PropTypes.array.isRequired,
        onNewProject: PropTypes.func,
        onSubmitNewProject: PropTypes.func,
        onEditProject: PropTypes.func,
        onSubmitEditProject: PropTypes.func,
}
    handleNewProject(){
        this.props.onNewProject(true)
    }

    handleCancelNew(){
        this.props.onNewProject(false)
    }

    handleSubmitNewProject(title){
        this.props.onSubmitNewProject(title)
    }

    handleEditProject(id){
        this.props.onEditProject(id)
    }

    handleCancelEdit(id){
        this.props.onEditProject(id, true)
    }

    handleSubmitEditProject(project){
        this.props.onSubmitEditProject(project)
    }


    render() {
        return (
            <ul className="myCss-left-meu">
            <li>
                <ProjectEditForm onSubmit={this.handleSubmitNewProject.bind(this)} onCancel={this.handleCancelNew.bind(this)} />
            </li>
            {this.props.projects.map( p=>
                <ProjectItem
                 project={p}
                onSubmit={this.handleSubmitEditProject.bind(this)}
                onEdit={this.handleEditProject.bind(this)}
                onCancel={this.handleCancelEdit.bind(this)}
               />)
            }
            </ul>
        )
            }
            }

export default ProjectList