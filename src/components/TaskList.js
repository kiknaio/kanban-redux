import React from 'react';
import Task from './Task';

const TaskList = props => (
  <div className="task-list">
    <div className="task-list-title">
      <b>{props.status}</b>
    </div>
    {props.tasks.map(task => (
      <Task key={task.id} task={task} />
    ))}
  </div>
)

export default TaskList;