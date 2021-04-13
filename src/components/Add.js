import React, { Component, createRef } from 'react';
import Tasks from './Tasks';

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.myRef = createRef();

    this.state = {
      id: 0,
      task: '',
      children: []
    };
  }

  appendChildren = () => {
    this.setState({
      children: [
        ...this.state.children,
        <Tasks
          key={this.state.id}
          id={this.state.id}
          task={this.state.task}
        ></Tasks>
      ],
      id: this.state.id + 1
    });
    this.myRef.current.value = '';
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
              ref={this.myRef}
            ></input>
            <button onClick={this.appendChildren}>Add</button>
          </div>
        </form>
        {this.state.children.map(child => child)}
      </div>
    );
  }
}
