import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Calendar from './Calendar.jsx';
import TaskList from './tasklist.jsx';
import CustomTask from './customTask.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      taskList: []
    };

  }

  handleClick(task) {
    this.state.task.push(task);
    var b = this.state.task;
    console.log(b);
    this.setState({task: b});
  }

  newClick(task) {
    this.state.taskList.push(task);
    this.state.task.push(task);
    var allTasks = this.state.taskList;
    var newTask = this.state.task;
    this.setState({task: newTask, taskList: allTasks});
  }

  componentDidMount() {
    // once again gotta figure out the actual fetch path... comp says 'http://localhost:1337/links' 404'd
    fetch('/api/tasks',{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    .then((response)=> {
      return response.json()
    })
    .then((json) => {
      console.log('json', json);
      // var tasks = json;
      // console.log(tasks);
      this.setState({taskList:json});
      console.log('this.state', this.state)
      // this.render();
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  render() {

    return (
      <MuiThemeProvider>
        <div id="calApp">
          <Calendar tasks={this.state.task}/>

          <div id='calTasks'>
            <TaskList handleClick={this.handleClick.bind(this)}
                      tasks={this.state.taskList}/>

            <CustomTask newClick={this.newClick.bind(this)}/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;