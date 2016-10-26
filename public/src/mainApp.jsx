class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    <div id="calApp">
      <Calendar />

      <TaskList />
    </div>
  }
}

export default App;