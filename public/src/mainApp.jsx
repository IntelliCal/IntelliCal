import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Calendar from './Calendar.jsx';
import TaskList from './tasklist.jsx';
import CustomTask from './customTask.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div id="calApp">
          <Calendar />

          <div className='calTasks'>
            <TaskList />

            <CustomTask />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;