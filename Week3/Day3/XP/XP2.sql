-- UPDATE film
-- SET language_id = (SELECT language_id FROM language WHERE name = 'French') WHERE film_id = 1

-- UPDATE film
-- SET language_id = (SELECT language_id FROM language WHERE name = 'French') WHERE film_id = 5

-- UPDATE film
-- SET language_id = (SELECT language_id FROM language WHERE name = 'German') WHERE film_id = 10

--In customer table there are two FK : store_id and address_id. So when we insert into customer we need to use the SELECT statement

-- DROP TABLE customer_review  
-- -->No pb

-- SELECT COUNT (*) FROM rental WHERE return_date IS NULL
--> 183

-- select * from rental

-- SELECT film.title, film.rental_rate, rental.return_date
-- FROM rental
-- JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- JOIN film ON inventory.film_id = film.film_id
-- WHERE rental.return_date IS NULL
-- ORDER BY rental_rate DESC LIMIT 30

-- SELECT film.title
-- FROM film
-- JOIN film_actor ON film.film_id = film_actor.film_id
-- JOIN actor ON actor.actor_id = film_actor.actor_id
-- WHERE film.description ILIKE'%sumo%' AND actor.first_name ILIKE 'penelope' AND actor.last_name ILIKE 'monroe'

---> Park Citizen

-- SELECT film.title
-- FROM film
-- JOIN film_category ON film_category.film_id = film.film_id
-- JOIN category ON category.category_id = film_category.category_id
-- WHERE film.length < 60 AND film.rating = 'R' AND category.name ILIKE 'documentary'

---> Cupboard Sinners

-- SELECT film.title
-- FROM film 
-- JOIN inventory on inventory.film_id = film.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE film.rental_rate > 4 AND rental.return_date BETWEEN '2005/07/28' AND '2005/08/01' AND customer.first_name ILIKE 'matthew' AND customer.last_name ILIKE 'mahan'

---> Sugar Wonka
 
-- SELECT film.title
-- FROM film
-- JOIN inventory on inventory.film_id = film.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE customer.first_name ILIKE 'matthew' AND customer.last_name ILIKE 'mahan' AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
-- ORDER BY film.replacement_cost DESC LIMIT 1

---> Stone Fire