import React from 'react';
import Tasks from './tasks.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
injectTapEventPlugin();

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

var TaskList = ({tasks, handleTaskListEntryClick}) => (
  <div className="tasklist">
      {dummytasks.map((task) =>
        <div>
          <Tasks
            task={task}
            handleTaskListEntryClick={handleTaskListEntryClick}
          />
          <br></br>
        </div>
      )}
    <div className="inputTasks">
      <TextField
        ref='taskname'
        hintText="The hint text can be as long as you want, it will wrap."
      /><br />
      <FloatingActionButton mini={true} style={style} onClick={addToTaskList}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </div>
);

// TaskList.propTypes = {
//   task: React.PropTypes.array.isRequired
// };

module.exports = TaskList;

