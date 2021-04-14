import React, { Component, createRef } from 'react';
import './Tasks.css';

export default class Tasks extends Component {
  constructor(props) {
    super(props);

    // Referencing to the current task
    this.myRef = createRef();

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
      this.setState({ task: this.myRef.current.value });
    }
  };

  // Delete the tasks
  deleteComponent = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      this.state.show && (
        <div>
          <form onSubmit={e => e.preventDefault()}>
            <li style={{ display: 'inline' }}>
              <input
                readOnly={this.state.readOnly}
                placeholder={this.state.task}
                ref={this.myRef}
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
