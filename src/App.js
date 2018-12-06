import React, { Component } from 'react';
import TasksPage from './components/TaskPage';
import db from './db';

const App = () => (
  <div className="main-content">
    <TasksPage tasks={db} />
  </div>
)

export default App;
