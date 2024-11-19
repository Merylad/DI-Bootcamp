-- SELECT * FROM language

-- SELECT film.title, film.description, language.name
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id

-- SELECT film.title, film.description, language.name
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id

-- CREATE TABLE new_film (
-- newfilm_id SERIAL PRIMARY KEY,
-- name VARCHAR(50)
-- )

-- INSERT INTO new_film (name)
-- VALUES
-- ('Titanic'),
-- ('Pearl Harbor'),
-- ('Gladiator')

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- CREATE TABLE customer_review (
-- review_id SERIAL PRIMARY KEY,
-- film_id INTEGER,
-- language_id INTEGER,
-- title VARCHAR (50) NOT NULL,
-- score SMALLINT NOT NULL CHECK (score BETWEEN 1 AND 10),
-- review_text TEXT NOT NULL,
-- last_update DATE NOT NULL,
-- FOREIGN KEY (film_id) REFERENCES new_film (newfilm_id) ON DELETE CASCADE,
-- FOREIGN KEY (language_id) REFERENCES language (language_id) ON DELETE SET NULL
-- )

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES
--     (
--         (SELECT film_id FROM film WHERE film_id = 1), 
--         (SELECT language_id FROM language WHERE language_id = 2), 
--         'Bad movie', 
--         2, 
--         'I Hated it', 
--         '2024/11/19'
--     ),
--     (
--         (SELECT film_id FROM film WHERE film_id = 2), 
--         (SELECT language_id FROM language WHERE language_id = 3), 
--         'Excellent movie', 
--         9, 
--         'I loved it', 
--         '2024/11/19'
--     );

-- SELECT * FROM customer_review

-- DELETE FROM new_film WHERE newfilm_id = 1

-- SELECT * FROM customer_review
-- -->The review has been deleted
















