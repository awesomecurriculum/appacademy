CREATE TABLE merchants (
  id serial PRIMARY KEY,
  merchant_name varchar(255) NOT NULL,
  country_id integer NOT NULL,
  created_at timestamp NOT NULL,
  admin_id integer NOT NULL,
  merchant_type_id integer NOT NULL,
  FOREIGN KEY (country_id) REFERENCES countries (id),
  FOREIGN KEY (admin_id) REFERENCES users (id),
  FOREIGN KEY (merchant_type_id) REFERENCES merchant_types (id)
)
