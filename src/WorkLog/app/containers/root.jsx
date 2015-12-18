import React, { Component, PropTypes } from 'react'
import ProjectView from '../containers/projectView'
import Contents from '../components/contents'

class App extends Component {
    render() {
        return (
          <div>
              <ProjectView />
              <Contents />
          </div>
        )
    }
}

export default App