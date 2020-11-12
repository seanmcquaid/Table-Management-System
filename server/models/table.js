'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Table.init({
    username: DataTypes.STRING,
    seats: DataTypes.INTEGER,
    isAvailable: DataTypes.BOOLEAN,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};