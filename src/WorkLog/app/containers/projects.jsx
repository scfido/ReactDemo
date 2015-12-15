import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddProjectButton from '../components/projects/addProjectButton'
import NewProjectForm from '../components/projects/newProjectForm'
import ProjectList from '../components/projects/projectList'
import * as Actions from '../actions/projects'

class Projects extends Component {
    componentWillMount() {
        this.tryLoad(this.props, this.state);
    }

    tryLoad() {
        this.props.actions.getProjects();
    }

    render() {
        return (
          <div className="container">
             <ProjectList projects={this.props.project.projects} />
             <NewProjectForm onSubmit={this.props.actions.newProject} />
             <AddProjectButton />
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