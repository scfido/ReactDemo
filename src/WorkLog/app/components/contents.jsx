import React, { Component, PropTypes } from 'react'
import NewTaskForm from '../components/tasks/newTaskForm'
import TaskList from '../components/tasks/taskList'

class Contents extends Component {
    render() {
        return (
          <div className="myCss-content">
              <NewTaskForm />
              <br />
              <TaskList />
              <p className="text-muted">33个任务已完成</p>
          </div>
        )
    }
    }

export default Contents