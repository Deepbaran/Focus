import React, { Component } from 'react';

export default class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: props.task,
      readOnly: true,
      buttonName: 'Edit',
      render: true,
      show: true
    };
  }

  readOnlyHandle = () => {
    if (this.state.readOnly === true) {
      this.setState({ readOnly: false, buttonName: 'Done' });
    } else {
      this.setState({ readOnly: true, buttonName: 'Edit' });
    }
  };

  deleteComponent = () => {
    this.setState({ show: false });
  };

  editTask = e => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      this.state.show && (
        <div>
          <form onSubmit={e => e.preventDefault()} draggable="true">
            <li style={{ display: 'inline' }} draggable="true">
              <input
                readOnly={this.state.readOnly}
                placeholder={this.state.task}
                onChange={this.editTask}
              ></input>
              <button onClick={this.readOnlyHandle}>
                {this.state.buttonName}
              </button>
              <button onClick={this.deleteComponent}>Delete</button>
            </li>
          </form>
        </div>
      )
    );
  }
}
