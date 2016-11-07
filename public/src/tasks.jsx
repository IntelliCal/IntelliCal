import React from 'react';
// import ReactDOM from 'react-dom';

var Tasks = ({task, handleClick}) => (

  <div className="tasks">
    <div className="tasks-body">
      <div >
        <div className='singleTask'>
          <label>Task</label>
          <span id={task.id} className="task-title">{task.title}</span>

        <div className="tasks-description">
          <label>Details</label>
          <span id={task.id} className="task-desc">{task.description}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Tasks.propTypes = {
//   tasks: React.PropTypes.object.isRequired
// };

module.exports = Tasks;
