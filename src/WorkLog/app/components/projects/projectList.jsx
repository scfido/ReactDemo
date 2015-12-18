import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import ProjectItem from './projectItem'

class ProjectList extends Component {
    static propTypes = {
        projects: PropTypes.array.isRequired,
        onEditProject: PropTypes.func,
        onSubmitEditProject: PropTypes.func,
}

    handleEditProject(id){
        this.props.onEditProject(id)
    }

    handleCancelEdit(id){
        this.props.onEditProject(id, true)
    }

    handleSubmitEditProject(id, prop){
        this.props.onSubmitEditProject(id, prop)
    }


    render() {
        return (
            <ul className="myCss-left-meu">
                {this.props.projects.map( p=>
                    <ProjectItem
                    key = {p.id}
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