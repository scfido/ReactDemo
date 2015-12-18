import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import ProjectEditForm from './projectEditForm'

class Projects extends Component {
    static propTypes = {
    }

    handleNewProject(){
        this.props.onNewProject()
    }

    handleCancel(){
        this.props.onCancel()
    }

    handleSubmit(title){
        this.props.onSubmit(title)
    }

    renderEditor() {
        return(
           <ProjectEditForm onSubmit={this.handleSubmit.bind(this)} onCancel={this.handleCancel.bind(this)} />
        )
    }

    renderButton() {
        return (
        <div className="input-group">
            <span className="input-group-addon" onClick={this.handleNewProject.bind(this)}><i className="glyphicon glyphicon-plus"></i></span>
        </div>
        )
    }

    render(){
        if(this.props.showEditor)
            return this.renderEditor()
        else
            return this.renderButton()
    }
}

export default Projects