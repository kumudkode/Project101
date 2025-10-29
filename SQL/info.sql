-- ------------------------------------
-- DATA Manipulation Commands or CRUD commands 
-- ------------------------------------
/* Databases are dynamic resources 
We can add, update, delete data from them

These operations are known as Data Manipulation Language (DML) commands
The main DML commands are:
    CREATE - to create new tables
	READ - to read data from tables
	UPDATE - to modify existing data
	DELETE - to remove data

-- Thats what we were doing before with SELECT statements that was READING data

#1. Returning DATA 
    SELECT statement is used to read data from a database
    DML commands don't return data from the database

    We have set up our runner to run a SELECT statement after executing DML command.
    Syntax:
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition;

    Example:
        SELECT brand, model, year, price FROM cars
        WHERE year BETWEEN 1980 AND 1989;

## Data persistence
    Changes made to the database using DML commands are permanent
    Once data is added, updated or deleted it cannot be undone
    To revert changes we would need to use another DML command

In javascript command we add like this
  // Load the SQL file
  const query = fs.readFileSync('query.sql', 'utf8');

  // For section 4 - execute the CRUD operation
  await db.exec(query)

  // Display data from the table 
  const response = await db.query(`SELECT brand, model, year, price FROM cars;`)


#2. Inserting DATA
    INSERT statement is used to add new data to a database table
    Syntax:
        INSERT INTO table_name (column1, column2, ...)
        VALUES (value1, value2, ...);
    Example:
        INSERT INTO cars (brand, model, year, color, condition, price, sold)
        VALUES ('Ford', 'Escort RS2000', 1978, 'blue', 4, 39000, FALSE);
-- ------------------------------------
#3. Updating DATA
    UPDATE statement is used to modify existing data in a database table
    Syntax:
        UPDATE table_name
        SET column1 = value1, column2 = value2, ...
        WHERE condition;
    Example:
        UPDATE cars
        SET price = 42000
        WHERE model = 'Escort RS2000' AND year = 1978;
-- ------------------------------------
#4. Deleting DATA
    DELETE statement is used to remove data from a database table
    Syntax:
        DELETE FROM table_name
        WHERE condition;
    Example:
        DELETE FROM cars
        WHERE model = 'Escort RS2000' AND year = 1978;
-- ------------------------------------

*/
---------------Insert DATA example----------------
-- Here we are adding two new cars to the cars table

/*
	Retro rides have acquired two new cars this week:
		1. A Ford Escort RS2000 from 1978 in blue
				the car is from 1978, a 4/5 condition
				the car has not been sold and is listed at $39,000
		2. A 1977 Aston Martin V8 Vantage in dark green
				The car is in perfect condition
				and is listed for sale at $145,000
*/
-- Insert the two new cars into the cars table

INSERT INTO cars (brand, model, year, color, condition, price, sold)
VALUES
    ('Ford', 'Escort RS2000', 1978, 'blue', 4, 39000, FALSE),
    ('Aston Martin', 'V8 Vantage', 1977, 'dark green', 5, 145000, FALSE);
SELECT brand, model, year, color, condition, price, sold FROM cars
ORDER BY year DESC; 




