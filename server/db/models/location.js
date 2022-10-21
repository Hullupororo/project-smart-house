const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.Room, {
        foreignKey: 'loc_id',
      });
    }
  }
  Location.init({
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};