import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Tasks extends Component {

    render() {
        return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
       <input type="checkbox" />
        <a data-toggle="collapse" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
          三化三达标对接
        </a>
       <div className="pull-right">
        <span>0H</span>
        </div>
      </h4>
        </div>
        <div id="collapseTwo" className="panel-collapse collapse">
          <div className="panel-body">
            <ul className="myCss-list">
              <li>
                <i></i>
                <span className="divP-1">今天</span>
                <div className="divP">
                  <p>
                    <span className="divP-2"><input className="form-control input-sm" type="text" placeholder="H" /></span>
                    <span className="divP-3"><input className="form-control input-sm" type="text" placeholder="工作内容" /></span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>        )
    }
}

export default Tasks