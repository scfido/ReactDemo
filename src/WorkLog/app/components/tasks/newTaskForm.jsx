import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class NewTaskForm extends Component {

    render() {
        return (
         <div className="input-group">
              <span className="input-group-addon">+</span>
              <input type="text" className="form-control" placeholder="添加任务" />
        </div>        
        )
    }
}

export default NewTaskForm