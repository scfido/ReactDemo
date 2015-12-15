import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class NewProjectForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        style: PropTypes.object,
        };

    handleSubmit(e) {
        if (e.key === 'Enter') {
            const text = e.target.value.trim()
            this.props.onSubmit(text)
            e.target.value ="";
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="添加项目..."
                    onKeyDown={this.handleSubmit.bind(this)}
                    value={this.props.title}
                />
            </div>
        )
    }
}

export default NewProjectForm