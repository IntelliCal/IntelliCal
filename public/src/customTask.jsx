import React from 'react';
import Request from 'react-http-request'
import 'whatwg-fetch'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import TextField from 'material-ui/TextField';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// injectTapEventPlugin();
var today = new Date();
var month = today.getMonth();
var date = today.getDate();
var datePadding = date < 10 ? ('0' + date) : date;
var monthPadding = (month < 10) ? ('0' + month + 1) : month + 1;
var fullDate = today.getFullYear() + '-' + monthPadding + '-' + datePadding;

class CustomTask extends React.Component {
  constructor(props){
    super(props)
    this.tasks = [];
    // this.currentId=0;
    this.state ={
      title:'',
      description:'',
      day: fullDate
    }
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  handleChange1(event){
    this.setState({title: event.target.value})
  }

  handleChange2(event){
    this.setState({description: event.target.value})
  }

  handleChange3(event){
    this.setState({day: event.target.value})
  }

  handleChange4(event){
    this.setState({endTime: event.target.value})
  }

  addTask(event){
    event.preventDefault();
    var task = {
      title: this.state.title,
      description: this.state.description,
      day: this.state.day,
      userId: '1'
    };

    // this.currentId++;
    this.tasks.push(task);
    this.props.newClick(task);
    //console.log('the array of tasks is: ',this.tasks);
      //need to adjust the next line to properly place information in the right place... getting a 404 not found error
    fetch('/api/tasks',{
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      method:'POST',
      //not sure this needs to be json.stringified, I think it does need to be though
      body:JSON.stringify(task)
    })
    .then(()=>{
      // this.props.handleNewEntryClick(task);
      console.log('test');
    })
    .catch((error) => {
      console.log(error);
    })

    this.setState({
      title:'',
      description:'',
      day: fullDate
    });


  }

  render () {
    return (
      <div className='inputForm righttasks'>
        <form>
          <h2> Add a Task: </h2>
          <label>Title:</label>
          <input
            type='text'
            required={true}
            placeholder='Title'
            minLength='9'
            maxLength='12'
            value={this.state.title}
            onChange={this.handleChange1}
          /><br />
          <label>Description:</label>
          <input
            type='text'
            placeholder='Description'
            required={true}
            value={this.state.description}
            onChange={this.handleChange2}
          /><br />
          <label>Select Day:</label>
          <input
            type='date'
            required={true}
            value={this.state.day}
            onChange={this.handleChange3}
          /><br />
          <button onClick={this.addTask}>
            SUBMIT!
          </button>
          <br />
        </form>
      </div>
    )
  }
}

export default CustomTask