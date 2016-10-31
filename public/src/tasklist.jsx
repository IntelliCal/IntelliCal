import React from 'react';
import Tasks from './tasks.jsx';
import CustomTask from './customTask.jsx';
import Request from 'react-http-request'
import 'whatwg-fetch'


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

// function addToTaskList() {
//   console.log(this, TextField.value)

// }
//I think we need to make this a class instantiation in order to add a componentDidMount and allow rerendering
var TaskList = ({handleClick, tasks}) => (
  // {
  //   // once again gotta figure out the actual fetch path... comp says 'http://localhost:1337/links' 404'd
  //   fetch('/api/tasks',{
  //     method:'GET',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'
  //     }
  //   })
  //   .then((response)=> {
  //     //dont know if I need the parse, but if I am putting it in as a strigified JSON will need this to make objects again
  //     var tasks = JSON.parse(response)
  //     console.log(response)
  //   })
  //   .catch( (error) => {
  //     console.log(error)
  //   })
  // }
  <div className="tasklist righttasks">
    <h2> To Do: </h2>
    {tasks.map((task) =>
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

