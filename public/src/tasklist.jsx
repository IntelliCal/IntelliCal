import React from 'react';
import Tasks from './tasks.jsx';
import CustomTask from './customTask.jsx';
import Request from 'react-http-request'
import 'whatwg-fetch'


// const dummytasks = [{
//   id: 1,
//   title: "do something",
//   description:"do it quickly",
//   startTime: '2016-10-24 17:00',
//   endTime: '2016-10-24 18:00'
// },
// {
//   id: 2,
//   title: "do something different",
//   description:"do it a little faster",
//   startTime: '2016-10-26 17:00',
//   endTime: '2016-10-26 19:00'
// }];

  // function handleTaskListEntryClick() {
  //   dummytasks.push({id: });
  // }

// function addToTaskList() {
//   console.log(this, TextField.value)

// }
//I think we need to make this a class instantiation in order to add a componentDidMount and allow rerendering
class TaskList extends React.Component {
  constructor(props) {
    super(props);
  render() {
    var event = this.props.event;
    var closeButton = this.props.handleClick;
    if (event !== null) {
      return (
        <div className="tasklist righttasks">
          <h2> To Do: </h2>
          <button onClick={() => closeButton(event)}>X</button>
          <div className="tasks">
            <div className="tasks-body">
              <div >
                <div className='singleTask'>
                  <label>Task</label>
                  <span className="task-title">{event.title}</span>

                <div className="tasks-description">
                  <label>Details</label>
                  <span className="task-desc">{event.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return(<div></div>)
  }
}

// TaskList.propTypes = {
//   task: React.PropTypes.array.isRequired
// };

module.exports = TaskList;

