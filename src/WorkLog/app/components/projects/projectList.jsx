import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class ProjectList extends Component {

    render() {
        return (
            <ul>
                {this.props.projects.map( p=>
                    <li key={p.id}>{p.title}<span>{p.taskCount}</span>{p.syncing ? <span>⟳</span> : ""}</li>
                    )}
            </ul>
        )
    }
}

export default ProjectList