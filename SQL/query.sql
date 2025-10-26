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

-- -----------------------------------------------------------------------------
-- BETWEEN , AND , OR , BOOLEAN
-- -----------------------------------------------------------------------------

-- #AND operator

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

-- #BETWEEN operator

-- SELECT brand,model, year,price FROM cars
-- WHERE year BETWEEN 1980 AND 1989;


/*
	Select brand, model, condition, color and price from cars
		where the price is between $20,000 and $60,000
		and the condition is between 1 and 3
		and the color contains red
*/ 
-- SELECT brand, model, condition, color, price FROM cars
-- WHERE price BETWEEN 20000 AND 60000
-- AND condition BETWEEN 1 AND 3
-- AND color Like '%red%';

-- #OR operator

/*
	Find the brand, model, condition and price of cars
		where the price is less than $250,000
		or the brand is Porsche,
		only show cars with condition > 3
*/

-- SELECT brand, model, condition, price FROM cars
-- 	WHERE (price < 250000
-- 	OR brand = 'Porsche')
-- 	AND condition > 3;

/*
	Search for brand, model, color, year and price of cars
		where the color is a shade of red
		or the year is between 1960 and 1969
*/
-- SELECT brand,model,color,year,price FROM cars
-- WHERE color LIKE '%red%'
-- OR year BETWEEN 1960 AND 1969;

/*
	Search for columns: brand, model, color, year, price, sold
		from the table cars
		where the color is a shade of red
		or the year is between 1960 and 1969
		and sold is false
*/
-- SELECT brand, model, color, year, price, sold FROM cars
-- WHERE (color LIKE '%red%'
-- OR year BETWEEN 1960 AND 1969)
-- AND sold = false;
-- SELECT brand, model, color, year, price, sold FROM cars
-- 	WHERE (color LIKE '%red%'
-- 	OR year BETWEEN 1960 AND 1969)
-- 	AND sold IS FALSE;

-- #IN operator
/*
	Select the brand, model, price and sold columns from cars
		the brand can be 'Ford', 'Chevrolet' or 'Ferrari'
		sold must be false
*/

-- SELECT brand, model, price, sold FROM cars
-- 	WHERE brand IN ('Ford', 'Chevrolet', 'Ferrari')
-- 	AND sold IS FALSE;

/*
	Select the brand, model, condition and year from cars
		Where the year is 1961, 1963, 1965, 1967 or 1969
		and the condition is 3 or higher
		and sold is false
*/
-- SELECT brand, model, condition, year FROM cars
-- WHERE year IN (1961,1963,1965,1967,1969)
-- AND condition  >=3
-- AND sold IS  FALSE;

/*
	Select brand, model, price and sold from cars
		filter out any cars which are sold
		show cars where the brand is none of ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
		or the price is less than $50000
*/
-- SELECT brand, model, price, sold FROM cars
-- WHERE sold IS FALSE
-- AND (brand NOT IN ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
-- OR price < 50000);

/*
	Select brand, model, and color from cars
		where the color is not red, blue, or white
		and the brand is none of: Aston Martin, Bentley or Jaguar
		and sold is false
*/
-- SELECT brand, model, color FROM cars
-- WHERE color NOT IN ('red', 'blue', 'white')
-- AND brand NOT IN ('Aston Martin', 'Bentley', 'Jaguar')
-- AND sold IS FALSE;

/*
	Select brand, model, year, sold from cars
		where the brand is 'Dodge' and year is in the 60s
		or the brand is either 'Ford' or 'Triumph' and the car is from the 70s
		only select cars where sold is not true
*/
SELECT brand, model, year, sold FROM cars
WHERE (brand = 'Dodge' AND year BETWEEN 1960 AND 1969
OR (brand IN ('Ford', 'Triumph') AND year BETWEEN 1970 AND 1979))
AND sold IS NOT TRUE;
