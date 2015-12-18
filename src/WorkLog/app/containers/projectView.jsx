import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NewProject from '../components/projects/newProject'
import ProjectList from '../components/projects/projectList'
import * as Actions from '../actions/projects'

class Projects extends Component {
    componentWillMount() {
        this.tryLoad(this.props, this.state);
    }

    tryLoad() {
        this.props.actions.getProjects();
    }

    handleNewProject(){
        this.props.actions.newView()
    }

    handleCancelNew(){
        this.props.actions.newView(false)
    }

    handleSubmitNewProject(title){
        this.props.actions.newProject(title)
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
        projects={this.props.projects}
        onEditProject={this.handleEditProject.bind(this)}
        onSubmitEditProject={this.props.actions.editProject}
                    />
                </div>
                <div className="myCss-left-float-foot">
                    <NewProject
                showEditor={this.props.newProjectFrom}
                onNewProject={this.handleNewProject.bind(this)}
                onCancel={this.handleCancelNew.bind(this)}
                onSubmit={this.handleSubmitNewProject.bind(this)}
                    />
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
    return {...state.project}
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