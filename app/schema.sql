CREATE TABLE Food (
id SERIAL PRIMARY KEY,
description VARCHAR(40),
price INT
);
INSERT INTO Food(description, price) values ('info', 1);
SELECT * FROM Food;


CREATE TABLE Cart (
  id SERIAL PRIMARY KEY,
  food_id INT references Food(id)
);
INSERT INTO Cart (food_id) values (1);
