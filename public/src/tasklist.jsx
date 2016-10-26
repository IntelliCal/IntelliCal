var TaskList = ({tasks, handleTaskListEntryClick}) => (
  <div className="tasklist">
    {task.map((task) =>
      <Tasks
        task={task}
        handleTaskListEntryClick={handleTaskListEntryClick}
      />
    )}
  </div>
);

TaskList.propTypes = {
  tasks: React.PropTypes.array.isRequired
};

window.TaskList = TaskList;

