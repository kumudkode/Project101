-- ORDER and Aggregates
/*
	Select the brand, model and year from the cars table
		order by the brand
*/

-- SELECT brand, model, year FROM cars
-- 	-- ORDER BY brand; 
--     -- Using this we sorted by the brand in ascending order by default
--     -- To sort in descending order we can use DESC after the column name
--     ORDER BY brand DESC;

/*
	Select the brand, model, condition and price from cars
		order the table by condition in descending order
		and by price in ascending order
*/
-- SELECT brand, model, condition, price FROM cars
-- 	ORDER BY condition DESC, price ASC;
--  ORDER BY condition DESC, price;
/*
    Select brand, model, color, year and price from cars
        where the color contains red
        order by year in ascending order
        and by price in descending order
*/  
-- SELECT brand, model, color, year, price FROM cars
-- WHERE color LIKE '%red%'
-- ORDER BY year ASC, price DESC;
/*
    Select brand, model, color, year and price from cars
        where the color contains red
        or the year is between 1960 and 1969
        and sold is false
        order by brand in ascending order
*/
---------------------------------------------------------------------------
----------LIMIT------------------------------------------------------
---------------------------------------------------------------------------
/*
	Select the brand, model, year and price from the cars table
		order the results by the price in descending order
		limit the results to 1
*/

-- SELECT brand, model, year, price FROM cars
--     ORDER BY price DESC
--     LIMIT 1;

/*
	Select the brand, model, color and price from cars
		where the color is a shade of 'red'
		and sold is false
		order by price
		limit the results to 5
*/
-- SELECT brand, model, color, price FROM cars
-- WHERE color LIKE '%red%'
-- AND sold IS FALSE
-- ORDER BY price
-- LIMIT 5;


-------------------------------------------
-- COUNT AND SUM AGGREGATE FUNCTIONS
-------------------------------------------
/*
	Count the number of cars
		where sold is true
*/

--  SELECT COUNT(*) FROM cars
-- 	WHERE sold IS TRUE;

-- SELECT COUNT(*) AS total_sold FROM cars
-- 	WHERE sold IS TRUE;

/*
	Sum the price of cars
		where sold is true
	Use the alias total_earnings in your output
*/
-- SELECT SUM(price) AS total_earnings FROM cars
-- WHERE sold IS TRUE;

-------------------------------------------
-- MAX , MIN and AVG AGGREGATE FUNCTIONS
-------------------------------------------
/*
    Find the maximum price of cars
        where sold is true
*/
-- SELECT MAX(price) AS max_price FROM cars
-- WHERE sold IS TRUE;
/*
    Find the minimum price of cars
        where sold is true
*/  
-- SELECT MIN(price) AS min_price FROM cars
-- WHERE sold IS TRUE;
/*
    Find the average price of cars
        where sold is true
*/
-- SELECT AVG(price) AS avg_price FROM cars
-- WHERE sold IS TRUE;
-------------------------------------------
/*
	Use the AVG aggregate function to find the average price
		where the brand is Bentley
		
		We can use FLOOR and CEIL to round the average down or up
			to the nearest whole number
*/

-- SELECT FLOOR(AVG(price)) AS average FROM cars
-- 	WHERE brand = 'Bentley';

--------------------------------------------------------
--- # Group By and HAVING
--------------------------------------------------------
/*
    Select the brand and count of cars from the cars table
        where sold is true
        group the results by brand
*/  
-- SELECT brand, COUNT(*) AS total_sold FROM cars
-- WHERE sold IS TRUE
-- GROUP BY brand;

/*
	Select the condition, and a count of the condition from cars
		group by the condition column
*/
-- SELECT condition, count(condition) FROM cars
-- 	GROUP BY condition;

/*
	Select:
		* the brand
		* a count of the brand
		* and an average of the price for each brand
		* round the average down to the nearest number
		* alias the average as 'AVG' in your output
	From cars where
		the car has not been sold
	Group the table by brand.
*/

-- SELECT brand, count(brand),FLOOR(AVG(price)) AS AVG FROM cars
-- WHERE sold IS FALSE
-- GROUP BY brand;

-----------
-- HAVING
-----------
/*
	Select:
		* the brand
		* a count of the brand
		* and an average of the price for each brand
		* round the average down to the nearest number
		* alias the average as 'AVG' in your output
	From cars where
		the car has not been sold
	Group the table by brand.
	
	Show results where the count is > 1
*/

-- SELECT brand, count(brand), FLOOR(AVG(price)) AS AVG
-- 	FROM cars
-- 	WHERE sold IS FALSE
-- 	GROUP BY brand
-- 	HAVING count(brand) > 1;  
/*
	Select:
		* year
		* a count of cars from that year, aliased as car_count
		* the maximum price
		* the minimum price
	from the table cars
		where the car has been sold
	group by year
		only show years where more than one car has been sold from that year
	order the result by car_count
*/

----------------------------------------------------------------------------------
-- CHALLENGE 2
----------------------------------------------------------------------------------
/*
	Select brand, model, and year from cars
		only show the oldest 5 cars in the database
		show cars which haven't been sold
*/
-- SELECT brand, model, year FROM cars
-- WHERE sold IS FALSE
-- ORDER BY year
-- LIMIT 5;

/*
	Select color and count how many cars have each color
		find cars which have not been sold
		order by count in descending order
		only show results where the count is greater than 2
*/
-- SELECT color, COUNT(*) AS color_count FROM cars
-- WHERE sold IS FALSE
-- GROUP BY color
-- HAVING COUNT(*) > 2
-- ORDER BY color_count DESC;
-- 
/*
    Select brand, model, condition, color and price from cars
        where the price is between $20,000 and $60,000
        and the condition is between 1 and 3
        and the color contains red
*/
-- SELECT brand, model, condition, color, price FROM cars
-- WHERE price BETWEEN 20000 AND 60000
-- AND condition BETWEEN 1 AND 3
-- AND color LIKE '%red%';
