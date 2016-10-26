import React from 'react';
// import ReactDOM from 'react-dom';
import Calendar from './Calendar.jsx';
import TaskList from './tasklist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="calApp">
        <Calendar />

        <TaskList />
      </div>
    )
  }
}

export default App;