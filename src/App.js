import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksPage from './components/TaskPage';

const App = props => (
  <div className="main-content">
    <TasksPage tasks={props.tasks} />
  </div>
)

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(App);
