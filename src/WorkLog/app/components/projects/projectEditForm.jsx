import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class ProjectEditForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
        style: PropTypes.object,
        }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            const text = e.target.value.trim()
            this.props.onSubmit(text)
            e.target.value =""
        }
        else if(e.key === "Escape"){
            this.props.onCancel()
        }
    }

    componentDidMount() {
        this.refs.text.focus()
    }

    render() {
        let title = this.props.project ? this.props.project.title : ""
        return (
            <div className="padding-sm">
                <input 
                    className="form-control input-sm"
                    ref="text"
                    type="text"
                    placeholder="项目名称..."
                    onKeyDown={this.handleKeyDown.bind(this)}
                    defaultValue={title}
                />
            </div>
        )
    }
}

export default ProjectEditForm