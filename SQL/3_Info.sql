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
    




*/

