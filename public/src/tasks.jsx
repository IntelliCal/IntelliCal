import React from 'react';
// import ReactDOM from 'react-dom';

var Tasks = ({task, handleClick}) => (

  <div className="tasks">
    <div className="tasks-body">
      <div onClick={() => handleClick(task)}>
        <div className='singleTask'>
          <label>Task</label>
          {task.title}

        <div className="tasks-description">
          <label>Details</label>
          {task.description}
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
