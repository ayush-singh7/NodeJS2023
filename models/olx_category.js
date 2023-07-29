'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Olx_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Olx_Category.init({
    category_id: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    category_image: DataTypes.BLOB,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Olx_Category',
  });
  return Olx_Category;
};