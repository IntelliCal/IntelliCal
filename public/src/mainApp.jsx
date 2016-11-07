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
      taskList: [],
      event: {}
    };

  }

  transferTask(task) {
    if (typeof task.id === "number") {
      fetch('/api/tasks/' + task.id, {
        method: 'GET'
      })
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({event: json});
        console.log('this is new event', this.state.event);
        $('.tasklist').show();
      })
    }
  }

  handleClick(task) {
    console.log(task)
    $('.tasklist').hide();
    // this.state.task.push(task);
    // var b = this.state.task;
    // console.log(b);
    // this.setState({task: b});
  }

  newClick(task) {
    var allTasks = this.state.taskList;
    var newTask = this.state.task;
    allTasks.push(task);
    newTask.push(task);
    this.setState({event: task, task: newTask, taskList: allTasks});
    $('.tasklist').show();
  }

  deleteATask(task) {
    if (typeof task.id === "number") {
      fetch('/api/tasks/' + task.id, {
        method: 'DELETE'
      })
      .then(response => {
        return response.json();
      })
      .then(this.componentDidMount())
      .catch(error => {
        console.err('error');
      })
    }
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
          <Calendar taskList={this.state.taskList} transferTask={this.transferTask.bind(this)}/>

          <div id='calTasks'>
            <TaskList handleClick={this.handleClick.bind(this)}
                      event={this.state.event}/>

            <CustomTask newClick={this.newClick.bind(this)}/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;