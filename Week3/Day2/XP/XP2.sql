-- SELECT * FROM customer

-- SELECT (first_name, last_name) AS full_name FROM customer

-- SELECT DISTINCT create_date FROM customer

-- SELECT * FROM customer ORDER BY first_name DESC

-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate

-- SELECT address, phone FROM address WHERE district = 'Texas'

-- SELECT * FROM film WHERE film_id = 15 OR film_id = 150

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE '%titanic%'

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'ti%'

-- SELECT title, rental_rate FROM film ORDER BY rental_rate LIMIT 10

-- SELECT title, rental_rate FROM film ORDER BY rental_rate ASC OFFSET 10 LIMIT 10

-- SELECT title, rental_rate FROM film ORDER BY rental_rate ASC OFFSET 10 FETCH NEXT 10 ROWS ONLY

-- SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- FROM customer
-- INNER JOIN payment
-- ON payment.customer_id = customer.customer_id
-- ORDER BY customer.customer_id

-- SELECT film.title, film.film_id
-- FROM film
-- LEFT JOIN inventory
-- ON film.film_id = inventory.film_id
-- WHERE inventory.film_id IS NULL

-- SELECT city.city, country.country
-- FROM city
-- INNER JOIN country
-- ON city.country_id = country.country_id


-- Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.

SELECT customer.customer_id, (customer.first_name, customer.last_name) AS full_name, payment.amount, payment.payment_date, payment.staff_id
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id






