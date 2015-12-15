import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class NewTaskForm extends Component {

    render() {
        return (
            <div>
                <input type="text" placeholder="添加任务..." />
            </div>
        )
    }
}

export default NewTaskForm