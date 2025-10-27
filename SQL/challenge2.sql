-- ORDER and Aggregates
/*
	Select the brand, model and year from the cars table
		order by the brand
*/

SELECT brand, model, year FROM cars
	-- ORDER BY brand; 
    -- Using this we sorted by the brand in ascending order by default
    -- To sort in descending order we can use DESC after the column name
    ORDER BY brand DESC;
