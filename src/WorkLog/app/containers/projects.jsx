import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddProjectButton from '../components/projects/addProjectButton'
import ProjectList from '../components/projects/projectList'
import * as Actions from '../actions/projects'

class Projects extends Component {
    componentWillMount() {
        this.tryLoad(this.props, this.state);
    }

    tryLoad() {
        this.props.actions.getProjects();
    }

    handleNewProject(cancel){
        this.props.actions.newView(cancel)
    }

    handleEditProject(id, cancel){
        if(cancel)
            this.props.actions.endEdit(id)
        else
            this.props.actions.beginEdit(id)
    }

    render() {
        return (
            <div className="my-sidebar">
                <div className="myCss-left-float-bg"></div>
                <div className="myCss-left-float">
                    <ProjectList 
        projects={this.props.project.projects} 
        onNewProject={this.handleNewProject.bind(this)}
        onSubmitNewProject={this.props.actions.newProject}
        onEditProject={this.handleEditProject.bind(this)}
        onSubmitEditProject={this.props.actions.editProject}
                    />
                </div>
                <div className="myCss-left-float-foot">
                    <AddProjectButton />
                </div>
            </div>
        )
    }
}

//const initialState = {
//    loading:false,
//    editingId : -1,
//    newProjectView : false,
//    editProjectView : false,
//    projects:[
//        {
//            name: 'VGS II',
//            tasks: 32,
//            id: 0
//        }
//    ]
//}

function mapStateToProps(state) {
    return {
        project: state.project
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)