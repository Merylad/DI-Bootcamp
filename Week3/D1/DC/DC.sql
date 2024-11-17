-- CREATE TABLE actors(
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(50) NOT NULL,
-- age DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL
-- );

-- SELECT * FROM actors

-- INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES(
-- 'Matt', 'Damon', '08/10/1970', 5
-- );

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Meryl','Streep','1952/11/05', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Jessica','Biel','1980/06/20', 1);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Anne','Hataway','1985/10/25', 2),
-- ('Leonardo', 'Dicaprio', '1965/09/15',4),
-- ('Hugh','Grant', '1955/07/03',5);

-- SELECT * FROM actors WHERE first_name = 'Matt';
-- SELECT * FROM actors WHERE number_oscars >2;
-- SELECT first_name FROM actors WHERE last_name ILIKE 'd%';
-- SELECT * FROM actors WHERE number_oscars > 1 ORDER BY number_oscars DESC;

-- UPDATE actors
-- SET first_name = 'Angelina',
-- last_name = 'Jolie'
-- WHERE first_name = 'Anne';

-- SELECT * FROM actors;

-- DELETE FROM actors 
-- WHERE actor_id = 8;

-- ALTER TABLE actors RENAME number_oscars TO oscars;

--DAILY CHALLENGE
-- SELECT COUNT (*) FROM actors;  
--OUTPUT 7

-- INSERT INTO actors (first_name, last_name, age, oscars)
-- VALUES('Cameron', null,'1980/06/20', 1);

-- ERREUR:  une valeur NULL viole la contrainte NOT NULL de la colonne « last_name » dans la relation « actors »



