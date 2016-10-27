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
    startTime: {
      type: DataTypes.DATE,
      field: "start"
    },
    endTime: {
      type: DataTypes.DATE,
      field: "end"
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "userId"
    }},
    {
       tableName: 'tasks'
    });
};

