import React, { Component, createRef } from 'react';
import './Tasks.css';

export default class Tasks extends Component {
  constructor(props) {
    super(props);

    // Referencing to the current task
    this.inputRef = createRef();

    this.state = {
      task: props.task,
      readOnly: true,
      buttonName: 'Edit',
      render: true,
      show: true
    };
  }

  // Helps to edit the tasks
  readOnlyHandle = () => {
    if (this.state.readOnly === true) {
      this.setState({ readOnly: false, buttonName: 'Done' });
    } else {
      this.setState({ readOnly: true, buttonName: 'Edit' });
      this.setState({ task: this.inputRef.current.value });
    }
  };

  // Delete the tasks
  deleteComponent = () => {
    this.setState({ show: false });
  };

  // Method to cut the text of the tasks that are done
  onFocus = e => {
    if (this.state.buttonName === 'Edit') {
      if (e.target.style.textDecoration !== 'line-through') {
        e.target.style.textDecoration = 'line-through';
      } else {
        e.target.style.textDecoration = 'none';
      }
    }
    e.target.blur();
  };

  render() {
    return (
      this.state.show && (
        <div>
          <form onSubmit={e => e.preventDefault()} id="taskForm">
            <li style={{ display: 'inline' }}>
              <input
                readOnly={this.state.readOnly}
                placeholder={this.state.task}
                onFocus={this.onFocus}
                ref={this.inputRef}
                id="taskList"
              ></input>
              <button onClick={this.readOnlyHandle}>
                {this.state.buttonName}
              </button>
              <button onClick={this.deleteComponent}>X</button>
            </li>
          </form>
        </div>
      )
    );
  }
}
