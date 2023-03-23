---
ᴴₒᴴₒᴴₒ: ture
---

# ** :simple-mysql: Structural Operators**

### **Glance of contents**

There are some structural operators that are used to complete SQL sentences:

- [`Operators`](#operators) for **expression**.
- [`NULL`](#null) for null **expression**.
- [`Min & Max`](#min--max) for **expression**.
- [`Count, Avg, Sum`](#count-avg-sum) for aggregation function **expressions**.
- [`AND, OR, NOT`](#and-or-and-not) for **conditional** `WHERE` filtering.
- [`Exists`]
- [`Any & All`]
- [`Order By`](#order-by) for **sorting** condition.
- [`Group By`](#group-by) for **summarizing** rows with the same value.
- [`In`](#in) **shorthand** for multiple `OR` conditions.
- [`BETWEEN`](#between) for selecting values within a **given range**.
- [`As`](#as) for **name alias**.
- [`Having`](#having) for using **aggregation condition**.

### **Operators**

???note "Operators"

    ???+success "Syntax"
        
        === "**SQL Arithmetic Operators**"
    
            | +	| -	| *	| / | % |
            | :---: | :---: |:---: |:---: |:---: |
            |Add |Subtract|Multiply|Divide|Modulo|

            <div data-pym-src='https://www.jdoodle.com/plugin' data-language="sql"
              data-version-index="0">
            SELECT 30 + 20;
            SELECT 30 - 20;
            SELECT 30 * 20;
            SELECT 30 / 20;
            SELECT 30 % 20;
            </div>

        === "SQL Comparison Operators"
            | =	| >	| <	| >= | <= | <> |
            | :---: | :---: |:---: |:---: |:---: |:---: |
            |Equal to |	Greater than|Less than|Greater than or equal to|Less than or equal to|	Not equal to|

            <div data-pym-src='https://www.jdoodle.com/plugin' data-language="sql"
              data-version-index="0">
            CREATE TABLE Marks_family (
                PersonID int,
                LastName varchar(255), --hold characters
                FirstName varchar(255),
                Address varchar(255),
                City varchar(255)
            );
            INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
            VALUES (123, 'Tom', 'A', 'OR', 'Albany');
            INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
            VALUES (129, 'Kim', 'B', 'TX', 'Salem');
            \ 
            SELECT * FROM Marks_family
            WHERE PersonID = 129;
            SELECT * FROM Marks_family
            WHERE PersonID > 123;
            SELECT * FROM Marks_family
            WHERE PersonID < 129;
            SELECT * FROM Marks_family
            WHERE PersonID >= 123;
            SELECT * FROM Marks_family
            WHERE PersonID <= 129;
            SELECT * FROM Marks_family
            WHERE PersonID <> 129;
            </div> 

        === "**SQL Bitwise Operators**"
            | &	| \|	| ^	|
            | :---: | :---: |:---: |
            |Bitwise AND |Bitwise OR|Bitwise exclusive OR|

### **Null**

???note "Null"

    The `NULL` statements help the comparison where `=,` `<`, `<>`, etc cannot express.
    ???+success "Syntax"

        ``` sql
        SELECT column_names
        FROM table_name
        WHERE column_name IS NULL/ IS NOT NULL;
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
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, '', 'A', 'OR', 'Albany');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (124, 'Kim', 'B', 'TX', 'Salem');
        \ 
        SELECT *
        FROM Marks_family
        WHERE LastName IS NULL;
        \ 
        SELECT *
        FROM Marks_family
        WHERE LastName IS NOT NULL;
        </div> 

### **Min & Max**

???note "Min & Max"

    - The `MIN()` function returns the **smallest value** of the selected column.
    - The `MAX()` function returns the **largest value** of the selected column.
    ???+success "Syntax"

        ``` sql
        SELECT MIN(column_name) / MAX(column_name)
        FROM table_name
        WHERE condition;
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
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, '', 'A', 'OR', 'Albany');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (124, 'Kim', 'B', 'TX', 'Salem');
        \ 
        SELECT MAX(PersonID)
        FROM Marks_family;
        \ 
        SELECT MIN(PersonID)
        FROM Marks_family;
        </div> 

### **And, Or, and Not**

???note "And, Or, and Not"

    The `AND, OR, NOT` statements are used to express conditional `WHERE` filtering.
    ???+success "Syntax"

        ``` sql
        SELECT column1, column2, ...
        FROM table_name
        --and
        WHERE condition1 AND condition2 AND condition3 ...;
        --or
        WHERE condition1 OR condition2 OR condition3 ...;
        --not
        WHERE NOT condition;
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
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, 'Tom', 'A', 'OR', 'Albany');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (124, 'Kim', 'B', 'TX', 'Salem');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (125, 'Yong', 'C', 'NC', 'Albany');
        \ 
        SELECT PersonID, LastName
        FROM Marks_family
        WHERE City = 'Albany' AND LastName = 'Tom';
        \ 
        SELECT PersonID, LastName
        FROM Marks_family
        WHERE City = 'Albany' OR LastName = 'Tom';
        \ 
        SELECT PersonID, LastName
        FROM Marks_family
        WHERE NOT City = 'Albany';
        </div> 

### **Exists**

???note "Exists"

    The `EXISTS` operator is used to test for the **existence of any record** in a subquery. Return `TRUE` when there are one or more records.

    ???+success "Syntax"

        ``` sql
        SELECT column_name(s)
        FROM table_name
        WHERE EXISTS
        (SELECT column_name FROM table_name WHERE condition);
        ```

    ???example "click to see an example"

        <div data-pym-src='https://www.jdoodle.com/plugin' data-language="sql"
          data-version-index="0">
        CREATE TABLE Marks_family1 (
            PersonID int,
            City varchar(255)
        );
        CREATE TABLE Marks_family2 (
            City varchar(255)
        );
        INSERT INTO Marks_family1 (PersonID, City)
        VALUES (123, 'Albany');
        INSERT INTO Marks_family2 (City)
        VALUES ('Albany');
        INSERT INTO Marks_family2 (City)
        VALUES ('Eugene');
        INSERT INTO Marks_family2 (City)
        VALUES ('Salem');
        \ 
        SELECT City
        FROM Marks_family1
        WHERE EXISTS (SELECT City FROM Marks_family2);
        </div> 

### **Count, Avg, Sum**

???note "Count, Avg, Sum"

    The `COUNT, AVG, SUM` statements are used to express conditional `WHERE` filtering.
    ???+success "Syntax"

        ``` sql
        SELECT COUNT(column_name) / AVG(column_name) / SUM(column_name)
        FROM table_name
        WHERE condition;
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
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, 'Tom', 'A', 'OR', 'Albany');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (124, 'Kim', 'B', 'TX', 'Salem');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (125, 'Yong', 'C', 'NC', 'Albany');
        \ 
        SELECT COUNT(PersonID)
        FROM Marks_family;
        \ 
        SELECT AVG(PersonID)
        FROM Marks_family;
        \ 
        SELECT SUM(PersonID)
        FROM Marks_family;
        </div> 

### **Order By**

???note "Order By"

    The `ORDER BY` keyword is used to **sort** the result-set in **ascending** or **descending** order.
    ???+success "Syntax"

        ``` sql
        SELECT column1, column2, ...
        FROM table_name
        (WHERE some_condition)
        ORDER BY column1, column2, ... ASC|DESC; --Default ASC
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
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, 'Tom', 'A', 'OR', 'Albany');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, 'Kim', 'B', 'TX', 'Salem');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (125, 'Yong', 'C', 'NC', 'Albany');
        \ 
        SELECT *
        FROM Marks_family
        ORDER BY PersonID, LastName ASC;
        </div>   

### **Group By**

???note "Group By"

    The `GROUP BY` statement groups rows that have the same values into **summary rows**, like "find the number of customers in each country". For summarized information, we always use aggregate functions (`COUNT()`, `MAX()`, `MIN()`, `SUM()`, `AVG()`) to group the result-set by one or more columns.
    ???+success "Syntax"

        ``` sql
        SELECT column_name(s)
        FROM table_name
        WHERE condition
        GROUP BY column_name(s)
        ORDER BY column_name(s);
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
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, 'Tom', 'A', 'OR', 'Albany');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (125, 'Kim', 'B', 'TX', 'Salem');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (127, 'Yong', 'C', 'NC', 'Albany');
        \ 
        -- Static the number of people in each city.
        SELECT COUNT(PersonID), City
        FROM Marks_family
        GROUP BY City
        ORDER BY COUNT(PersonID) DESC;
        </div>   

### **In**

???note "In"

    The `IN` operator is a **shorthand** for multiple `OR` conditions, which allow you to specify multiple values in a `WHERE` clause.
    ???+success "Syntax"

        ``` sql
        SELECT column_name(s)
        FROM table_name
        WHERE column_name (NOT) IN (value1, value2, ...)/(SELECT STATEMENT) ;
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
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, 'Tom', 'A', 'OR', 'Albany');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (125, 'Kim', 'B', 'TX', 'Salem');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (127, 'Yong', 'C', 'NC', 'Albany');
        \ 
        SELECT *
        FROM Marks_family
        WHERE PersonID NOT IN (123,125);
        \ 
        SELECT *
        FROM Marks_family
        WHERE CITY IN (SELECT City FROM Marks_family WHERE City = 'Salem');
        </div>   

### **Between**

???note "Between"

    The `BETWEEN` operator selects values within a **given range**. The values can be numbers, text, or dates.
    ???+success "Syntax"

        ``` sql
        SELECT column1, column2, ...
        FROM table_name
        WHERE column_name (NOT) BETWEEN value1 AND value2;
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
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, 'Tom', 'A', 'OR', 'Albany');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (125, 'Kim', 'B', 'TX', 'Salem');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (127, 'Yong', 'C', 'NC', 'Albany');
        \ 
        SELECT *
        FROM Marks_family
        WHERE PersonID NOT BETWEEN 123 AND 125;
        </div>   

### **As**

???note "As"

    The `AS` keyword is used to give a table, or a column in a table, a **temporary name** for better understanding.
    ???+success "Syntax"

        ``` sql
        SELECT column_name AS alias_name
        FROM table_name;

        SELECT column1, column2, ...
        FROM table_name AS alias_name;
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
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, 'Tom', 'A', 'OR', 'Albany');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (125, 'Kim', 'B', 'TX', 'Salem');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (127, 'Yong', 'C', 'NC', 'Albany');
        \ 
        SELECT M.PersonID
        FROM Marks_family AS M
        WHERE City = 'Salem';
        \ 
        SELECT PersonID AS P, LastName AS L
        FROM Marks_family
        WHERE City = 'Salem';
        </div>   

### **Having**

???note "Having"

    The `HAVING` clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.
    ???+success "Syntax"

        ``` sql
        SELECT column_name(s)
        FROM table_name
        WHERE condition
        GROUP BY column_name(s)
        HAVING condition
        ORDER BY column_name(s);
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
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, 'Tom', 'A', 'OR', 'Albany');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (125, 'Kim', 'B', 'TX', 'Salem');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (126, 'Rim', 'F', 'TX', 'Salem');
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (127, 'Yong', 'C', 'NC', 'Albany');
        \ 
        SELECT COUNT(PersonID), City
        FROM Marks_family
        GROUP BY City
        HAVING COUNT(PersonID) > 1
        ORDER BY COUNT(PersonID) DESC;
        </div>   

### **References:**

- [SQL Tutorial](https://www.w3schools.com/sql/)


<script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>