"Use strict"

module.exports = function(sequelize, DataTypes){
  return users = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      autoIncrement: !0,
      primaryKey: !0
    },
    username: {
      type: DataTypes.STRING,
      field: "username"
    },
    password: {
      type: DataTypes.STRING,
      field: "password"
    }},
    {
       tableName: 'users'
    });
};

