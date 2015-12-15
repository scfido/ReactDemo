import React, { Component, PropTypes } from 'react'
import ProjectList from '../components/projects/projectList'
import NewProjectForm from '../components/projects/newProjectForm'
import AddProjectButton from '../components/projects/addProjectButton'

class NavBar extends Component {
    render() {
        return (
          <div>
              <ProjectList />
              <NewProjectForm />
              <AddProjectButton />
          </div>
        )
    }
}

export default NavBar