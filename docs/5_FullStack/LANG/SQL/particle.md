---
ᴴₒᴴₒᴴₒ: ture
---

# ** :simple-mysql: Structural Operators**

### **Glance of contents**

There are some structural operators that are used to complete SQL sentences:

- [`Operators`](#operators) for **expression**.
- [`NULL`](#null) for null **expression**.
- [`Min & Max`](#min--max) for **expression**.
- [`Count, Avg, Sum`] for **expression**.
- [`AND, OR, NOT`](#and-or-and-not) for **conditional** `WHERE` filtering.
- [`Order By](#order-by) for **sorting** condition.

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

### **Order By**

???note "Order By"

    The `ORDER BY` keyword is used to **sort** the result-set in **ascending** or **descending** order.
    ???+success "Syntax"

        ``` sql
        SELECT column1, column2, ...
        FROM table_name
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

### **References:**

- [SQL Tutorial](https://www.w3schools.com/sql/)


<script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>