import React from 'react';
// import ReactDOM from 'react-dom';

var Tasks = ({task, handleTaskListEntryClick}) => (
  <div className="tasks">
    <div className="tasks-body">
      <div onClick={() => handleTaskListEntryClick(task)}>
        {task.title}
      </div>
      <div className="tasks-description">{task.description}</div>
    </div>
  </div>
);

// Tasks.propTypes = {
//   tasks: React.PropTypes.object.isRequired
// };

module.exports = Tasks;
