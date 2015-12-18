import React, { Component, PropTypes } from 'react'
import ProjectEditForm from './projectEditForm'
import Loader from 'halogen/ClipLoader'

class ProjectItem extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
        onEdit: PropTypes.func.isRequired,
        project: PropTypes.object.isRequired,
        }


    handleEdit(id){
        this.props.onEdit(this.props.project.id);
    }

    handleCancel(){
        this.props.onCancel(this.props.project.id)
    }

    handleSubmit(title){
        this.props.onSubmit(this.props.project.id, {title:title})
    }   
    
    getIcon(isSyncing){
        if(isSyncing)
            return <Loader color="#26A65B" size="16px" margin="4px" style="float:left; padding:2px" />
        else
            return <span className="glyphicon glyphicon-briefcase" />
    }

    renderProject(project){
        return(
      <a href="#">
                {this.getIcon(project.syncing)} {project.title}
                <div className="pull-right">
                    <i>{project.taskCount}</i>
                    <span className="glyphicon glyphicon-pencil" onClick={this.handleEdit.bind(this)}></span>
                </div>
            </a>
        )
    }

    renderEditor(project){
        let pros={
            onSubmit:this.handleSubmit.bind(this),
            onCancel:this.handleCancel.bind(this)
        };
        return <ProjectEditForm project={project} {...pros} />
    }

    render() {
        var project = this.props.project

        return (
            <li key={project.id}>
                {project.editing ? this.renderEditor(project) : this.renderProject(project)}
            </li>        
        )
    }
}

export default ProjectItem