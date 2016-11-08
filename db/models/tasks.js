"Use strict"

module.exports = function(sequelize, DataTypes){
  return tasks = sequelize.define("tasks", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      autoIncrement: !0,
      primaryKey: !0
    },
    title: {
      type: DataTypes.STRING,
      field: "title"
    },
    description: {
      type: DataTypes.STRING,
      field: "description"
    },
    day: {
      type: DataTypes.STRING,
      field: "day"
    },
    // calendarDay: {
    //   type: DataTypes.DATE,
    //   field: "assignedDate"
    // },
    userId: {
      type: DataTypes.INTEGER,
      field: "userId"
    }},
    {
       tableName: 'tasks'
    });
};

