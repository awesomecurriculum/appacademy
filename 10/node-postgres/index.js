const { sequelize, City } = require('./models');

async function main() {
  console.log(City.toString());
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log('Database connection failure.');
    console.log(e);
    return;
  }

  console.log('Database connection success!');
  console.log('Sequelize is ready to use!');

  const city = await City.findOne({ where: { city: 'Portland' } });
  console.log(await city);

  console.log(await city.toJSON());
  await sequelize.close();
}

main();
