// https://sequelize.org/v5/manual/associations.html

User.findAll({
  include: [
    {
      model: Project,
      through: {
        attributes: ['createdAt', 'startedAt', 'finishedAt'],
        where: { completed: true },
      },
    },
  ],
});

const { Pet, Owner, PetType, sequelize } = require('./models');

async function query() {
  // eager loading
  const owner = await Owner.findByPk(1, {
    include: {
      model: Pet,
      include: PetType,
    },
  });
  console.log(owner.id, owner.firstName, owner.lastName);

  console.log('pets');
  for (let pet of owner.Pets) {
    console.log(pet.id, pet.name, pet.age, pet.PetType.type);
  }
}
