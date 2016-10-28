import React from 'react';
import Tasks from './tasks.jsx';
import ustomTask from './customTask.jsx';


const style = {
  marginRight: 20,
};



const dummytasks = [{
  id: 1,
  title: "do something",
  description:"do it quickly",
  startTime: '2016-10-24 17:00',
  endTime: '2016-10-24 18:00'
},
{
  id: 2,
  title: "do something different",
  description:"do it a little faster",
  startTime: '2016-10-26 17:00',
  endTime: '2016-10-26 19:00'
}];

  // function handleTaskListEntryClick() {
  //   dummytasks.push({id: });
  // }

function addToTaskList() {
  console.log(this, TextField.value)

}

var TaskList = ({tasks, handleClick}) => (
  <div className="tasklist righttasks">
      <h2> To Do: </h2>
      {dummytasks.map((task) =>
        <div>
          <Tasks
            task={task}
            handleClick={handleClick}
          />
          <br></br>
        </div>
      )}

  </div>
);

// TaskList.propTypes = {
//   task: React.PropTypes.array.isRequired
// };

module.exports = TaskList;

