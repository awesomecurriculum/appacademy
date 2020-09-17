// https://sequelize.org/v5/manual/models-definition.html#validations
class User extends Model {}
User.init(
  {
    username: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [5, 10],
      },
    },
  },
  { sequelize }
);
