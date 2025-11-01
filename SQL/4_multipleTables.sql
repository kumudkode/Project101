/*
We gonna learn Multiple Tables in SQL
1. Creating Database Tables
2. Primary and Foreign Keys
3. Column Constraints
4. Joining Tables
and many more...
*/
-- 1. Creating Database Tables
-- CREATE TABLE Customers (
--     CustomerID INT PRIMARY KEY,
--     FirstName VARCHAR(50) NOT NULL,
--     LastName VARCHAR(50) NOT NULL,
--     Email VARCHAR(100) UNIQUE,
--     Phone VARCHAR(15),
--     CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
-- CREATE TABLE Orders (
--     OrderID INT PRIMARY KEY,
--     OrderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     CustomerID INT,
--     TotalAmount DECIMAL(10, 2) NOT NULL,
--     Status VARCHAR(20) DEFAULT 'Pending',
--     FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
-- );
-- 2. Primary and Foreign Keys are defined in the table creation above
-- 3. Column Constraints are also defined in the table creation above
-- 4. Joining Tables
-- Example of INNER JOIN
-- SELECT Customers.FirstName, Customers.LastName, Orders.OrderID, Orders.TotalAmount
-- FROM Customers
-- INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
-- Example of LEFT JOIN
-- SELECT Customers.FirstName, Customers.LastName, Orders.OrderID, Orders.TotalAmount
-- FROM Customers
-- LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
-- Example of RIGHT JOIN
-- SELECT Customers.FirstName, Customers.LastName, Orders.OrderID, Orders.TotalAmount
-- FROM Customers
-- RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
-- Example of FULL JOIN

