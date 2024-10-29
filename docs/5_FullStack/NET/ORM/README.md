---
ᴴₒᴴₒᴴₒ: ture
comments: true
---

# **:material-dot-net:{.e_dotnet} ORM**

```markmap
- [**ORM**](#orm)
  - [What is `ORM`?](#what-is-orm)
- [**Entity Framework**](#entity-framework)
  - [What is `Entity Framework`?](#what-is-entity-framework)
  - [Advantages of `EF` over `ADO .NET`?](#advantages-of-ef-over-ado-net)
  - [==Disadvantages of `EF`. How to improve the performance?==](#disadvantages-of-ef-how-to-improve-the-performance)
  - [What are the diffs between `Lazy loading` and `Eager loading`, What is `N+1 problem`?](#what-are-the-diffs-between-lazy-loading-and-eager-loading-what-is-n1-problem)
  - [How to disable `Lazy loading`?](#how-to-disable-lazy-loading)
  - [What are `Code-first` and `Database-first` approaches in EF, usage?](#what-are-code-first-and-database-first-approaches-in-ef-usage)
  - [What are `DbSet` and `DbContext` classes in EF?](#what-are-dbset-and-dbcontext-classes-in-ef)
  - [What is `.AsNoTracking()` in EF?](#what-is-asnotracking-in-ef)
  - [What are `Skip()` and `Take()` methods?](#what-are-skip-and-take-methods)
- [**Dapper**](#dapper)
  - [==What is `Dapper`?==](#what-is-dapper)
  - [What are the diffs between `Dapper` and `EF Core`?](#what-are-the-diffs-between-dapper-and-ef-core)
```
## **ORM**

### What is `ORM`?

???+Note "ORM"

    `ORM` stands for <u>Object-relational Mapping</u>, which is a **design pattern**. It is a technique for converting data between a <u>relational database</u> and an <u>object-oriented programming language</u>.


## **Entity Framework**

### What is `Entity Framework`?

???+Note "Entity Framework"

    `Entity Framework (EF)` is a <u>ORM framework</u> for .NET applications that provides us a way to map the objects in the application to database tables and <u>perform CRUD operations</u> without writing explicit SQL queries.

    With the help of `EF`, we can use [`LINQ`](../../LANG/CSharp/LINQ/README.md) queries to fetch data from the underlying database.

### Advantages of `EF` over `ADO .NET`?

???+Note "EF v.s. ADO .NET"

    | **Feature**                    | **Entity Framework (EF)**                                          | **ADO.NET**                                           |
    |---------------------------------|--------------------------------------------------------------------|------------------------------------------------------|
    | **Productivity**                | Abstracts SQL queries, ==reducing boilerplate code==.                 | Requires manual SQL and more lines of code.          |
    | **Object-Oriented Approach**    | Works with strongly typed entities, improving ==data model navigation==. | Relies on DataTables and DataSets, less intuitive for complex relationships. |
    | **Querying Flexibility**        | Supports LINQ for ==type-safe==, ==readable queries==.                     | Requires raw SQL, with potential risks of SQL injection. |
    | **Change Tracking**             | ==Automatically tracks entity changes== and generates SQL updates.    | Must manually track changes and write update logic.  |
    | **Migrations**                  | Built-in support for schema evolution through ==code-based migrations==. | Requires external tools or scripts for schema updates. |
    | **Performance**                 | Suitable for complex, high-level queries; may incur slight overhead. | ==Faster== for simple queries but with more manual effort. |
    | **Cross-Platform**              | EF Core supports ==multiple databases== and ==multiple platforms==.                 | Typically limited to the .NET platform.              |

    `EF` provides <u>higher abstraction, improved productivity, and flexibility</u> by allowing developers to work with entities and LINQ instead of writing SQL manually. 
    
    In contrast, `ADO.NET` offers <u>more control and better performance</u> for low-level operations but requires more manual coding. `EF` is ideal for larger, more complex applications, while `ADO.NET` is better for performance-sensitive scenarios with simple queries.

### ==Disadvantages of `EF`. How to improve the performance?==

???+Note "EF Disadvantages & performance improvement"

    - `EF` introduces a **performance overhead** compared to using raw ADO.NET or other lightweight data access methods. The <u>`ORM` layer adds an extra layer of abstraction and introduces additional processing and mapping steps</u>, which can impact performance, especially in complex or high-load scenarios.
    
    - `EF`-**generated** queries may **not always be optimized** compared with hand-written SQL queries. In some cases, `EF` may generate inefficient SQL or execute multiple queries <u>instead of utilizing more advanced techniques like joins or optimizations</u>. 

    To improve performances of `EF`:
    
      - **Query Optimization:** write efficient and optimized LINQ queries, such as `Where()` filtering and `Select()` projection.
      - **Disable Lazy Loading:** use eager loading (`Include`) or explicit loading for better retrieval of related data to avoid N+1 problem.
      - **Database Indexing:** adding appropriate indexes on the database tables
      - **Caching:** Implement in-memory caching or distributed caching to store frequently accessed data.
      - **Using Compiled Queries:** Use compiled queries to pre-compile LINQ queries and improve query execution time.

### What are the diffs between `Lazy loading` and `Eager loading`, What is `N+1 problem`?

???+Note "Lazy loading (N+1 problem) v.s. Eager loading"

    - **`Lazy loading`**: the related data is not retrieved from the database until it is actually needed.
    ```csharp
    //Related data is loaded on demand, only when it is accessed in the code.
    var student = context.Students.FirstOrDefault(s => s.Id == 1);
    var courses = student.Courses; // This triggers the database query for Courses
    ```

    - **`Eager loading`**: all of the related data is retrieved from the database in a single query.
    ```csharp
    // Related data is loaded together with the primary entity using "Include()".
    var student = context.Students
                         .Include(s => s.Courses)
                         .FirstOrDefault(s => s.Id == 1);
    ```
    
    The `N+1 problem` is a performance issue that can occur when using `lazy loading` in Entity Framework. It occurs when you have a collection of objects, and each object has a related entity that needs to be loaded lazily. If you access the related entity for each object in the collection, Entity Framework will execute N+1 database queries to retrieve the related data, where N is the number of objects in the collection. This can <u>result in a significant performance penalty</u>, as each database query involves overhead for network communication, query parsing, and result materialization.

### How to disable `Lazy loading`?

???+Note "Disable Lazy loading"

    You can disable `lazy loading` in `EF`:
    
    - Set up `DbContextOptionsBuilder.UseLazyLoadingProxies` globally by configuring your `DbContext` with the following code:
    ```csharp
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseLazyLoadingProxies(false);  // Disable lazy loading
    }
    ```
    - Alternatively, you can directly disable lazy loading at the `DbContext` level:
    ```csharp
    public MyDbContext(DbContextOptions<MyDbContext> options)
        : base(options)
    {
        this.ChangeTracker.LazyLoadingEnabled = false;  // Disable lazy loading for this context
    }
    ```
    - Use of the `virtual` keyword. When using **`virtual` keyword**, `EF` creates **proxy classes** at runtime, which override the virtual navigation properties. When you access a navigation property for the first time, the proxy triggers a **database query** to load the related entity.
    ```csharp
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        // Enabling lazy loading for the Courses navigation property
        public virtual ICollection<Course> Courses { get; set; }
    }
    ```

    By carefully choosing when to **enable or disable lazy loading**, you can avoid performance pitfalls while leveraging `EF`’s flexibility.


### What are `Code-first` and `Database-first` approaches in EF, usage?

???+Note "Different approaches in `EF` & usages"

    - **Code-first approach**: `EF` creates database for you
      
        - <u>Usage:</u> When starting <u>a new application and wanted to focus on the domain model and business logic</u> first. In this case, the approach gives the flexibility to design and implement the data model from scratch.

    - **Database-first approach**: provide an existing database built outside of `EF`.
      
        - <u>Usage:</u> When there were <u>existing database constraints or stored procedures</u> that are critical to the application’s functionality. It allows to use these existing database artifacts directly.

    ???+Example "Steps of Code-first approach with migrations"

        1. Install `EF Core` tools package globally
        2. First create an `Entity` => c# class that represents a table in the database
        3. Install required `EF core` packages from Nuget in projects
            - Microsoft.EntityFrameworkCore.SqlServer
            - Microsoft.EntityFrameworkCore.Design
        4. Create the `DbContext` class and `DbSet` properties for the project
        5. Create the Database `connectionString`, and establish that connectionString with the `DbContext`
            - Keep `connectionString` if locally in the project in appsettings.json
            - User secrets (better option)
            - Azure keyVault to store any secrets
            - `connectionString`: database name, path, password…
        6. Establish that `connectionString` with the `DbContext` using Dependency Injection using the `AddDbContext` method.
        
        7. Create your first Migration using dotnet ef tools commands:
            - In terminal ../HRMWeb:
            ```bash
            dotnet ef migrations add InitialMigration -p ../Infrastructure/Infrastructure.csproj 
            ```
            - Always, check your migration file and see if it has things that you are trying to create.
            - Apply the migration using command
            ```bash
            dotnet ef database update
            ```

            - To model your database with rules, constraints etc we can do in two ways
                - Data Annotations - [MaxLength]
                - Fluent API - override OnModelCreating method in DbContext
                - If there are conflicts btw a and b, Fluent API will be prioritized.

### What are `DbSet` and `DbContext` classes in EF?

???+Note "DbSet & DbContext"

    - `DbContext` - represents your database.
    - `DbSet` - represents your tables. It is properties of `DbContext`.

### What is `.AsNoTracking()` in EF?

???+Note ".AsNoTracking()"

    **By default**, `EF` tracks the changes of the entities. 
    
    `AsNoTracking()` is a method in `EF` that tells the <u>context to fetch not to track the changes of the entities</u>. Even if you change contexts' properties, the context won’t detect or persist those changes. It is useful when you are querying data that you don't intend to update, which can help to <u>improve the performance</u> of your application when working with large amounts of data or read-only data.

    When you call `SaveChanges()`, EF generates an UPDATE SQL to apply the context setting-ups to the database.

    ```csharp
    using (var context = new MyDbContext())
    {
        // Example 1: Query with tracking (default behavior)
        var product = context.Products.FirstOrDefault(p => p.Id == 1);
        product.Name = "Updated Product"; // Changes are tracked.
        context.SaveChanges(); // EF generates an UPDATE SQL statement.

        // Example 2: Query with AsNoTracking()
        var readOnlyProduct = context.Products
            .AsNoTracking()
            .FirstOrDefault(p => p.Id == 2);
        // No tracking, so changing properties won’t be detected.
        readOnlyProduct.Name = "New Name"; 
        context.SaveChanges(); // No SQL generated because changes aren’t tracked.
    }
    ```

### What are `Skip()` and `Take()` methods?

???+Note "Skip() & Take()"

    - The `Skip()` and `Take()` methods are used for <u>pagination or paging functionality in queries</u>.
        - `Skip()` method is used to <u>skip a specified number of elements</u> in the query result.
        - `Take()` method is used to <u>retrieve a specified number of elements</u> in the query result.

    ```csharp
    var products = context.Products
        .OrderBy(p => p.Name)
        .Skip(10) // Skip the first 10 records
        .Take(5) // Take the next 5 records
        .ToList();
    ```


## **Dapper**

### ==What is `Dapper`?==

???+Note "Dapper"

    `Dapper` is a **micro-ORM** that provides a <u>simple and fast</u> way to query the database. It is a lightweight library that focuses on **performance** and **simplicity**. `Dapper` is ideal for scenarios where you need to execute raw SQL queries and map the results to objects without the overhead of a full-fledged ORM like `EF Core`.

### What are the diffs between `Dapper` and `EF Core`?

???+Note "Dapper v.s. EF Core"

    - **Performance**: `Dapper` is generally faster than `EF` because it generates more efficient SQL and loads data faster. `EF` can be faster if you use it correctly and take advantage of features like compiled queries and efficient loading patterns.
    - **Ease of Use**: `EF` has a higher learning curve than `Dapper`, but `Dapper` can be more convenient to use because it provides a lot of features out of the box, such as change tracking, lazy loading, and automated database migrations.
    - **Flexibility**: `Dapper` can be more flexible than `EF` in turns of writing raw SQL and mapping it to your own objects. (Database-First Approach)
    - **DB requirement**: `Dapper` follows <u>Database-first</u> workflow, which requires a database while `EF` does not require writing SQL statements. `EF` can be more flexible if you use it with the <u>Code-first</u> workflow, which allows you to define your model classes and let `EF` create the database for you.




