import React, { Component } from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
      title: '',
      desciption: '',
    }
  }

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  }

  onDescriptionChange = e => {
    this.setState({ description: e.target.value });
  }

  resetForm = () => {
    this.setState({
      showNewCardForm: false,
      title: '',
      description: '',
    })
  }

  onCreateTask = e => {
    e.preventDefault();
    this.props.onCreateTask({
      title: this.state.title,
      description: this.state.desciption,
    });
    this.resetForm();
  }

  toggleForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm });
  }

  renderTaskList = () => {
    const { tasks } = this.props;
    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status);
      return <TaskList key={status} status={status} tasks={statusTasks} />;
    })
  }

  render() {
    return (
      <React.Fragment>
        <button 
          className="button button-default add-task-button"
          onClick={this.toggleForm}
        >
          + New Task
        </button>
        <div className="tasks">
          {this.renderTaskList()}
        </div>
      </React.Fragment>
    )
  }
}

export default TasksPage;