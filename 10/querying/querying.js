async function findAll() {
  // returns array of instances
  const pet = await Pet.findAll();
  console.log(
    'Pets',
    pets.map(pet => pet.toJSON())
  );
}
