---
ᴴₒᴴₒᴴₒ: ture
---

# ** :simple-mysql: Basic Management**

### **Glance of contents**

To better review `SQL` management pipeline, I sort the famouse "verbs" in the sequence from `0 - 1`:

- [`CREATE TABLE`](#create-table) - creates a new table
- [`INSERT INTO`](#insert-into) - inserts new data into a database
- [`SELECT`](#select) - extracts data from a database
- [`WHERE`](#where) - filter records
- [`UPDATE`](#update) - edit data in a database
- [`DELETE`](#delete) - deletes data from a database
- [`DROP TABLE`](#drop-table) - deletes a table


## **Create Table**

???note "Create Table"

    The `CREATE TABLE` statement is used to create a **new table** in a database.
    ???+success "Syntax"

        ``` sql
        CREATE TABLE table_name (
            column1 datatype;
            column2 datatype;
            column3 datatype;
            ....
        );
        ```
    Then, you will get a table like below:

    | PersonID	|LastName	|FirstName	|Address  |City  |
    | :---: | :---: |:---: |:---: |:---: |
    ||||||

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
        </div>   

## **Insert Into**

???note "Insert Into"

    The `INSERT INTO` statement is used to **insert new records** in a table.
    ???+success "Syntax"

        ``` sql
        INSERT INTO table_name (column1, column2, column3, ...)
        VALUES (value1, value2, value3, ...);
        ```
    After the example below, you will get a table like:

    | PersonID	|LastName	|FirstName	|Address  |City  |
    | :---: | :---: |:---: |:---: |:---: |
    |123 |Tom|Skage|OR|Albany|
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
        \ 
        INSERT INTO Marks_family (PersonID, LastName, FirstName, Address, City)
        VALUES (123, 'Tom', 'Skage', 'OR', 'Albany');
        </div>   

## **Select**

???note "Select"

    The `SELECT` statement is used to **select data** from a database
    ???+success "Syntax"

        ```sql
        SELECT column1, column2, ...
        FROM table_name;
        ```

        ```sql
        SELECT * FROM table_name; -- select all the fields available in the table
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
        VALUES (123, 'Tom', 'Skage', 'OR', 'Albany');
        \ 
        SELECT * FROM Marks_family;
        SELECT PersonID, City FROM Marks_family;        
        </div>   
    
## **Where**

???note "Where"

    The `WHERE` clause is used to filter records. It is used in statements: `SELECT`, `UPDATE`, `DELETE`, etc.
    ???+success "Syntax"

        ```sql
        SELECT column1, column2, ...
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
        VALUES (125, 'Yong', 'C', 'NC', 'Euguene');
        \ 
        SELECT * FROM Marks_family
        WHERE City='Albany';
        </div>   

## **Update**

???note "Update"

    The `UPDATE` statement is used to **modify** the existing records in a table.
    ???+success "Syntax"

        ```sql
        UPDATE table_name
        SET column1 = value1, column2 = value2, ...
        WHERE condition; -- if omit this line, all records in the table will be updated
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
        VALUES (125, 'Yong', 'C', 'NC', 'Euguene');
        \ 
        UPDATE Marks_family
        SET LastName = 'Changed', FirstName = 'Haha'
        WHERE PersonID ='123';
        -- Out put and check
        SELECT * FROM Marks_family;
        </div>   

## **Delete**

???note "Delete"

    The `DELETE` statement is used to **delete** existing records in a table.
    ???+success "Syntax"

        ```sql
        DELETE FROM table_name 
        WHERE condition;  -- if omit this line, all records in the table will be deleted
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
        VALUES (125, 'Yong', 'C', 'NC', 'Euguene');
        \ 
        DELETE FROM Marks_family WHERE PersonID = '124';
        -- Out put and check
        SELECT * FROM Marks_family;
        </div>   

## **Drop Table**

???note "Drop Table"

    The `DROP TABLE` statement is used to **drop an existing table** in a database.
    ???+success "Syntax"

        ```sql
        DROP TABLE table_name;
        ```
    ???example "click to see an example"

        <div data-pym-src='https://www.jdoodle.com/plugin' data-language="sql"
          data-version-index="0">
        CREATE TABLE Marks_family (
            PersonID int,
            LastName varchar(255), //hold characters
            FirstName varchar(255),
            Address varchar(255),
            City varchar(255)
        );
        \ 
        DROP TABLE Marks_family;
        </div>   

    ???+warning "Note!"

        We can also use `TRUNCATE TABLE` to **delete the data inside a table**; instead of deleting the table itself.



### **References:**

- [SQL Tutorial](https://www.w3schools.com/sql/)


<script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>