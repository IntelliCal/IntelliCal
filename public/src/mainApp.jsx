import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Calendar from './Calendar.jsx';
import TaskList from './tasklist.jsx';
import CustomTask from './customTask.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: []
    }
  }

  handleClick(task) {
    this.state.task.push(task);
    console.log(this.state.task);
  }


  render() {

    return (
      <MuiThemeProvider>
        <div id="calApp">
          <Calendar tasks={this.state.task}/>

          <div id='calTasks'>
            <TaskList handleClick={this.handleClick.bind(this)}/>

            <CustomTask />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;