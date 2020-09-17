// ./models/cat.js

'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'City',
    {
      name: DataTypes.STRING,
      state: DataTypes.STRING,
      population: DataTypes.INTEGER,
      landarea: DataTypes.INTEGER,
      populationdensity: DataTypes.INTEGER,
    },
    {}
  );
  City.associate = function (models) {
    // associations can be defined here
  };
};
