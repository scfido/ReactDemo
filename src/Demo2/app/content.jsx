import React, { Component } from 'react';

export default class Content extends Component {
    
    render() {
        return (
            <div>
          <h1>Hello, {this.props.name}.</h1>
          <span>this is hoddd图 oK{this.props.name + "test"}</span>
          </div>
      );
    }
}
