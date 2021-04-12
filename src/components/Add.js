import React, { Component } from 'react';
import Tasks from './Tasks';

export default class Add extends Component {
  state = {
    id: 0,
    task: '',
    children: [],
    presentChildren: []
  };

  // deleteComponent = index => {
  //   var children = [...this.state.children];
  //   // var index = children.indexOf(e.target.value);
  //   if (index !== -1) {
  //     children.splice(index, 1);
  //     this.setState({ children: children });
  //   }
  // };

  appendChildren = () => {
    this.setState({
      children: [
        ...this.state.children,
        <Tasks key={this.state.id} task={this.state.task}></Tasks>
      ],
      id: this.state.id + 1
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Enter Task"
              onChange={e => {
                this.setState({ task: e.target.value });
              }}
            ></input>
            <button onClick={this.appendChildren}>Add</button>
          </div>
        </form>
        {this.state.children.map(child => child)}
      </div>
    );
  }
}
