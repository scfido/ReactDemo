import React, { Component, PropTypes } from 'react'
import WorklogItem from './worklogItem'

class WorklogList extends Component {

    render() {
        return (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>项目</th>
                  <th>内容</th>
                  <th>耗时</th>
                </tr>
                </thead>
                <tbody>
                    <WorklogItem />
                    <WorklogItem />
                    <WorklogItem />
                </tbody>
            </table>
        )
    }
}


export default WorklogList