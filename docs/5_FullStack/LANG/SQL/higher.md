---
ᴴₒᴴₒᴴₒ: ture
---

# ** :simple-mysql: Higher Level Management**

### **Glance of contents**

Here are some higher-level uses:

- [`DROP`](#drop) - Delete database or table.
- [`Stored PROCEDURES`](#stored-procedures) - Store SQL code for reuse.
- [`SELECT DISTINCT`](#select-distinct) - extracts distinct data from a database
- [`LIKE`](#like) - Specify the data format in WHERE.
- [`WILDCARDS`](#wildcard) - For regex expression.
- [`ALTER TABLE`]
- [`SELECT INTO`]
- [`INSERT INTO SELECT`]
- [`Case`]

### **DROP**

???note "DROP"

    The `DROP` statement is used to delete the whole database or table.
    ???+success "Syntax"

        ```sql
        DROP DATABASE databasename;
        DROP TABLE table_name;
        TRUNCATE TABLE table_name;  -- delete all the data inside a table, but not the table itself.
        ```
    
    ???example "click to see an example"

        <div data-pym-src='https://www.jdoodle.com/plugin' data-language="sql"
          data-version-index="0">
        CREATE TABLE Marks_family (
            PersonID int,
            LastName varchar(255), --hold characters
            FirstName varchar(255),
            Address varchar(255),
            City varchar(255)
        );
        INSERT INTO Marks_family (PersonID, City)
        VALUES (123,'Albany');
        INSERT INTO Marks_family (PersonID, City)
        VALUES (123,'Salem');
        INSERT INTO Marks_family (PersonID, City)
        VALUES (223,'Albany');
        INSERT INTO Marks_family (PersonID, City)
        VALUES (123,'Albany');
        \ 
        DROP TABLE Marks_family;
        </div>   

### **Stored PROCEDURES**

???note "Stored PROCEDURES"

    A `stored PROCEDURES` is a prepared SQL code that you can save, so the code can be **reused** over and over again.
    ???+success "Syntax"

        ```sql
        -- Stored Procedure Syntax
        CREATE PROCEDURE procedure_name --definition
        AS
        sql_statement                   --function body
        GO;
        -- Execute a Stored Procedure
        EXEC procedure_name;            --use the function
        ```
    
    ???example "click to see an example"

        <div data-pym-src='https://www.jdoodle.com/plugin' data-language="sql"
          data-version-index="0">
        -- **EG1**
        -- Stored Procedure Syntax
        CREATE PROCEDURE SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)
        AS
        SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode
        GO;
        -- Execute a Stored Procedure
        EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WA1 1DP';

        -- **EG2**
        -- Stored Procedure Syntax
        CREATE PROCEDURE SelectAllCustomers
        AS
        SELECT * FROM Customers
        GO;
        -- Execute a Stored Procedure
        EXEC SelectAllCustomers;
        </div>

### **SELECT DISTINCT**

???note "SELECT DISTINCT"

    The `SELECT DISTINCT` statement is used to return only distinct (different) values.
    ???+success "Syntax"

        ```sql
        SELECT DISTINCT column1, column2, ...
        FROM table_name;
        ```
    ???example "click to see an example"

        <div data-pym-src='https://www.jdoodle.com/plugin' data-language="sql"
          data-version-index="0">
        CREATE TABLE Marks_family (
            PersonID int,
            LastName varchar(255), --hold characters
            FirstName varchar(255),
            Address varchar(255),
            City varchar(255)
        );
        INSERT INTO Marks_family (PersonID, City)
        VALUES (123,'Albany');
        INSERT INTO Marks_family (PersonID, City)
        VALUES (123,'Salem');
        INSERT INTO Marks_family (PersonID, City)
        VALUES (223,'Albany');
        INSERT INTO Marks_family (PersonID, City)
        VALUES (123,'Albany');
        \ 
        SELECT * FROM Marks_family;        
        SELECT DISTINCT PersonID, City FROM Marks_family; --will return distinct tuples
        SELECT DISTINCT City FROM Marks_family;
        SELECT DISTINCT PersonID FROM Marks_family;
        </div>   

### **LIKE**

???note "LIKE"

    The `LIKE` operator is used in a WHERE clause to search for a specified pattern in a column.
    ???+success "Syntax"

        ```sql
        SELECT column1, column2, ...
        FROM table_name
        WHERE columnN LIKE pattern;
        ```
    
    | LIKE |Operator Description|
    |:-:|:-:|
    | WHERE CustomerName LIKE 'a%'	  | Finds any values that start with "a"|
    | WHERE CustomerName LIKE '%a'	  | Finds any values that end with "a"|
    | WHERE CustomerName LIKE '%or%'  | Finds any values that have "or" in any position|
    | WHERE CustomerName LIKE '_r%'	  | Finds any values that have "r" in the second position|
    | WHERE CustomerName LIKE 'a_%'	  | Finds any values that start with "a" and are at least 2 characters in length|
    | WHERE CustomerName LIKE 'a__%'  | Finds any values that start with "a" and are at least 3 characters in length|
    | WHERE ContactName LIKE 'a%o'	  | Finds any values that start with "a" and ends with "o"|

    ???example "click to see an example"

        <div data-pym-src='https://www.jdoodle.com/plugin' data-language="sql"
          data-version-index="0">
        SELECT * FROM Customers
        WHERE CustomerName LIKE 'a%';
        </div>

### **Wildcard**

???note "Wildcard"

    `Wildcard` characters are used with the `LIKE` operator. The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column.

    ???example "click to see an example"

        |Symbol	| Description | Example|
        |:-:|:-:|:-:|
        |%|Represents zero or more characters|bl% finds bl, black, blue, and blob|
        |_|Represents a single character|h_t finds hot, hat, and hit|
        |[]|Represents any single character within the brackets|h[oa]t finds hot and hat, but not hit|
        |^|Represents any character not in the brackets|h[^oa]t finds hit, but not hot and hat|
        |-|Represents any single character within the specified range|c[a-b]t finds cat and cbt|



    
### **References:**

- [SQL Tutorial](https://www.w3schools.com/sql/)


<script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>