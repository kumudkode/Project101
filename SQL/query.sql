-- Select all columns from the cars table
-- SELECT * FROM cars;

-- Select specific columns from the cars table
-- SELECT brand, model, condition, year FROM cars;

-- Select cars where we have to find specific condition
-- SELECT brand, model, condition, price FROM cars
-- 	WHERE condition = 0;

-- Complex Condition 
--> Numerical Filtering
-- SELECT brand, model, condition, price FROM cars
--     WHERE condition >= 3;

-- Another example:
-- SELECT brand, model, condition, price FROM cars
-- WHERE price<50000;

-- Not equal to
-- SELECT brand, model, year, price FROM cars
-- 	WHERE year != 1965;
-- SELECT brand,model,price,color  FROM cars
-- WHERE color!="yellow"

-- NOT and LIKE operator
-- SELECT brand, model, color, year FROM cars
-- WHERE color LIKE '%green%';
-- %% like operator will find any matching string from any names that have similiar string e.g green , lightgreen , darkgreen etc

-- NOT LIKE operator will find all names that do not have matching string
-- SELECT brand, model, color, year FROM cars
-- 	WHERE color NOT LIKE '%green%';

/*
	Select the brand, model, color and year for cars
		where the model is 'DB' followed by any other single character
*/
-- SELECT brand, model, color, year FROM cars
-- WHERE model  Like 'DB_';

/*
	Select the brand, model, color and year from cars
		exclude any green car
		show models which are 'DB' followed by any other single character
		and the year is after 1964
*/

-- SELECT brand, model, color, year FROM cars
-- 	WHERE color NOT LIKE '%green%'
-- 	AND model LIKE 'DB_'
-- 	AND year > 1964;


/*
	Select the brand, model, year, condition and price from cars
		where the condition is 3 or higher
		and the year is before 1970
*/
-- SELECT brand, model, year, condition, price FROM cars
-- WHERE condition  >=3
-- AND year < 1970;

/*
	Select the brand, model, year, condition and price from cars
		where the condition is 3 or higher
		and the year is before 1970
		and the price is below 100,000
*/

-- SELECT brand, model, year, condition, price FROM cars
-- 	WHERE condition >= 3
-- 	AND year < 1970
-- 	AND price < 100000;

/*
	Select cars made between 1980 and 1989
		show the brand, model, year and price
*/
-- SELECT brand,model, year,price FROM cars
-- WHERE year >=1980
-- AND year <= 1989;

-- BETWEEN operator

-- SELECT brand,model, year,price FROM cars
-- WHERE year BETWEEN 1980 AND 1989;

-- -----------------------------------------------------------------------------

/*
	Select brand, model, condition, color and price from cars
		where the price is between $20,000 and $60,000
		and the condition is between 1 and 3
		and the color contains red
*/ 
SELECT brand, model, condition, color, price FROM cars
WHERE price BETWEEN 20000 AND 60000
AND condition BETWEEN 1 AND 3
AND color Like '%red%';