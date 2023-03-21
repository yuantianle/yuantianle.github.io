---
ᴴₒᴴₒᴴₒ: ture
---

# ** :simple-mysql: Higher Level Management**

### **Glance of contents**

Here are some higher-level using:

- [`SELECT DISTINCT`] - extracts distinct data from a database

### **Select Distinct**

???note "Select Distinct"

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
    
### **References:**

- [SQL Tutorial](https://www.w3schools.com/sql/)


<script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>