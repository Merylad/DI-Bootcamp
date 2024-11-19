-- CREATE TABLE customer (
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE customer_profile (
-- customer_profile_id SERIAL PRIMARY KEY,
-- isLoggedIn BOOL DEFAULT false,
-- customer_id INTEGER REFERENCES customer(customer_id) ON DELETE CASCADE
-- )

-- INSERT INTO customer (first_name, last_name)
-- VALUES 
-- 	('John', 'Doe'),
-- 	('Jerome', 'Lalu'),
-- 	('Lea', 'Rive')

-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES
-- 	(True, (SELECT customer_id FROM customer WHERE customer.first_name = 'John')),
-- 	(False, (SELECT customer_id FROM customer WHERE customer.first_name = 'Jerome'))

-- SELECT customer.first_name
-- FROM customer
-- JOIN customer_profile
-- ON customer.customer_id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn = True

-- SELECT customer.first_name, customer_profile.isLoggedIn
-- FROM customer
-- LEFT JOIN customer_profile
-- ON customer.customer_id = customer_profile.customer_id

-- SELECT COUNT(*) 
-- FROM customer
-- JOIN customer_profile
-- ON customer.customer_id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn = False

--> 1



-- CREATE TABLE book (
-- book_id SERIAL PRIMARY KEY,
-- title VARCHAR(50) NOT NULL,
-- author VARCHAR(100) NOT NULL
-- )

-- INSERT INTO book (title, author)
-- VALUES
-- 	('Alice In Wonderland','Lewis Carroll'),
-- 	('Harry Potter','J.K Rowling'),
-- 	('To kill a mockingbird','Harper Lee')

-- CREATE TABLE student (
-- student_id SERIAL PRIMARY KEY,
-- name VARCHAR(50) NOT NULL UNIQUE,
-- age SMALLINT check(age <15)
-- )

-- INSERT INTO student (name, age)
-- VALUES
-- 	('John', 12),
-- 	('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14)

-- CREATE TABLE library (
-- book_fk_id INTEGER REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- student_id INTEGER REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- borrowed_date DATE,
-- PRIMARY KEY (student_id, book_fk_id)

-- INSERT INTO library (book_fk_id, student_id, borrowed_date)
-- VALUES
-- 	(
-- 		(SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
-- 		(SELECT student_id FROM student WHERE name = 'John' ),
-- 		'2022/02/15'
-- 	),
-- 	(
-- 		(SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
-- 		(SELECT student_id FROM student WHERE name = 'Bob' ),
-- 		'2021/03/03'
-- 	),
-- 	(
-- 		(SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
-- 		(SELECT student_id FROM student WHERE name = 'Lera' ),
-- 		'2021/05/23'
-- 	),
-- 	(
-- 		(SELECT book_id FROM book WHERE title = 'Harry Potter'),
-- 		(SELECT student_id FROM student WHERE name = 'Bob' ),
-- 		'2021/08/12'
-- 	)

-- SELECT * FROM library

-- SELECT student.name, book.title
-- FROM student
-- JOIN library ON student.student_id = library.student_id
-- JOIN book ON book.book_id = library.book_fk_id


-- SELECT AVG(student.age)
-- FROM student
-- JOIN library ON student.student_id = library.student_id
-- JOIN book ON book.book_id = library.book_fk_id
-- WHERE book.title ILIKE 'Alice in Wonderland'

---> 11.5

-- DELETE FROM student WHERE student.name = 'Lera'

-- SELECT * FROM library

---> The book borrowed by Lera is deleted





