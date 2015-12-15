import React, { Component, PropTypes } from 'react'
import NewTaskForm from '../components/tasks/newTaskForm'
import TaskList from '../components/tasks/taskList'

class Contents extends Component {
    render() {
        return (
          <div className="container">
              <NewTaskForm />
              <TaskList />
              <hr />
              <TaskList />
          </div>
        )
    }
}

export default Contents