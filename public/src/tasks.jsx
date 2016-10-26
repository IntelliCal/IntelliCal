
var Tasks = ({tasks, handleTaskListEntryClick}) => (
  <div className="tasks">
    <div className="tasks-body">
      <div onClick={() => handleTaskListEntryClick(tasks)}>
        {tasks.title}
      </div>
      <div className="tasks-description">{tasks.description}</div>
    </div>
  </div>
);

Tasks.propTypes = {
  tasks: React.PropTypes.object.isRequired
};

window.Tasks = Tasks;
