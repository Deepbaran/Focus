import React, { Component, createRef } from 'react';
import './Add.css';
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
    if (this.myRef.current.value !== '') {
      this.setState({
        children: [
          ...this.state.children,
          <Tasks
            key={this.state.id}
            id={this.state.id}
            task={this.state.task}
          ></Tasks>
        ],
        id: this.state.id + 1,
        task: ''
      });
      this.myRef.current.value = '';
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()} id="addForm">
          <div id="heading">FOCUS</div>
          <div id="tasks">
            <input
              type="text"
              placeholder="Enter Task"
              onChange={e => {
                this.setState({ task: e.target.value });
              }}
              ref={this.myRef}
              id="addField"
            ></input>
            <button onClick={this.appendChildren}>Add</button>
          </div>
        </form>
        <ul id="list">{this.state.children.map(child => child)}</ul>
        <div id="footer">Created by Deepbaran Kar</div>
      </div>
    );
  }
}
