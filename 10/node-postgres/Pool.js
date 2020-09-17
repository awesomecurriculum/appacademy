/*
@params: {
  user:
  password:
  database:
  port:
  host:
}
 */

const { Pool } = require('pg');

const allCities = `
SELECT *
FROM cities`;

const pool = new Pool({
  database: 'travel',
});

// async function getAllCities() {
//   const results = await pool.query(allCities);
//   console.log(results.rows);
//   pool.end();
// }

// getAllCities();

const singleCity = `select * from cities where city=$1`;

async function getCity(city) {
  const result = await pool.query(singleCity, [city]);
  console.log(result.rows);
  pool.end();
}

const city = process.argv[2];

getCity(city);

/*
[
  {
    id: 25,
    city: 'Portland',
    state: 'Oregon',
    population_estimate_2018: 653115,
    population_census_2010: 583776,
    land_area_sq_mi_2016: 133.5,
    pop_density_per_sq_mi_2016: 4793
  }
]
*/
