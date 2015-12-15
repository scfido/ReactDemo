import React, { Component, PropTypes } from 'react'
import Projects from '../containers/projects'
import Contents from '../components/contents'

class App extends Component {
    render() {
        return (
          <div className="container">
              <Projects />
              <Contents />
          </div>
        )
    }
}

export default App