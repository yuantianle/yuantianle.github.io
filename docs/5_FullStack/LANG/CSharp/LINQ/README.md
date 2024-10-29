---
ᴴₒᴴₒᴴₒ: ture
comments: true
---

# **:material-dot-net:{.e_dotnet} LINQ**

```markmap
- [**LINQ**](#linq)
  - [What is `LINQ`?](#what-is-linq)
- [**LINQ Query Syntax**](#linq-query-syntax)
  - [What are `LINQ` use scenarios?](#what-are-linq-use-scenarios)
  - [What is `IEnumerable` theory in `LINQ`?](#what-is-ienumerable-theory-in-linq)
- [**Different excution in LINQ**](#different-excution-in-linq)
  - [What are `Differed Execution` and `Immediate Execution` in LINQ?](#what-are-differed-execution-and-immediate-execution-in-linq)
  - [Differences: `First()`, `FirstOrDefault()`, `Single()`, `SingleOrDefault()` in LINQ?](#differences-first-firstordefault-single-singleordefault-in-linq)

```

## **LINQ**

### What is `LINQ`?

???+Note "LINQ"

    `LINQ` stands for **Language Integrated Query**, which is <u>extentioned method library</u> that target `IEnumerable` objects. 

    You can use `LINQ` to query:

    - SQL databases
    - XML documents
    - various web services
    - any collection of objects (arrays, lists, etc.) in memory.
    - ADO.NET datasets (ADO.NET is a set of classes that allows programmers to access and modify data from databases and other data sources in .NET Framework.)
  
## **LINQ Query Syntax**

### What are `LINQ` use scenarios?

???+Note "LINQ use scenarios"

    1. <u>`LINQ` to Entities</u> - Process data from a database:
    ```csharp
    var customers = dbContext.Customers
        .Where(c => c.City == "London")
        .OrderBy(c => c.Name);
    ```
    This query returns all customers from London, sorted by name.

    2. <u>`LINQ` to XML</u> - Parsing and querying XML documents:
    ```csharp
    XDocument doc = XDocument.Load("file.xml");
    var titles = doc.Descendants("book")
        .Where(e => (int)e.Element("price") > 20)
        .Select(e => e.Element("title").Value);
    ```
    This query selects the titles of all books in an XML document with a price over 20.

    3. <u>`LINQ` to JSON</u> - Querying data from a web service:
    ```csharp
    var client = new WebClient();
    var data = client.DownloadString("https://api.example.com/data");
    var json = JObject.Parse(data);
    var items = json["items"]
        .Where(i => i["type"].Value<string>() == "example")
        .Select(i => i["name"].Value<string>());
    ```
    This code queries a <u>JSON</u> web service for items of a certain type

    4. <u>`LINQ` to objects</u> - process data in memory:
    ```csharp
    var productsByCategory = products
        .GroupBy(p => p.Category)
        .Select(g => new { Category = g.Key, Count = g.Count() });
    ```
    This query groups a list of products by category and counts the number of   products in each category.

    5. <u>`LINQ` to ADO.NET</u> - Querying data from a datasets;
    ```csharp
    var products = dataSet.Tables["Products"]
        .AsEnumerable()
        .Where(r => r.Field<decimal>("Price") > 20)
        .Select(r => r.Field<string>("Name"));
    ```

### What is `IEnumerable` theory in `LINQ`?
  
???+Note "IEnumerable theory in LINQ"

    - **In-Memory Sources**: for the usage case with `Lists`, `arrays`, `dictionaries`, etc. 
        - These collections implement the `IEnumerable<T>` interface, the output of LINQ queries is an `IEnumerable<T>` collection, they are competible. 
        - LINQ queries on `IEnumerable` are not executed immediately ([`Deffered Execution`](./#different-excution-in-linq)). The query is deferred until the result is enumerated (e.g., via `foreach()` or .`ToList()`), optimizing performance and reducing unnecessary computation.
    - **Out-Memory Sources**: for the usage case with `databases`, `XML`, `JSON`, and other data sources. 
        - In these cases, the output of a LINQ query is an `IQueryable<T>` collection. `IQueryable<T>` is inherited from `IEnumerable<T>`, but it has additional methods allows to translate queries into a data source’s native language, like SQL.
        - LINQ queries on `IQueryable<T>` queries are executed immediately ([`Immediate Execution`](./#different-excution-in-linq)), because they are using `.ToList()`, `.ToArray()`, `.First()`, `.Single()`, etc.

## **Different excution in LINQ**

### What are `Differed Execution` and `Immediate Execution` in LINQ?

???+Note "Differed Execution and Immediate Execution"

    - **Differed Execution**: the query is **NOT** executed at the moment it's defined. Instead, it is execute <u>At the time of enumeration (e.g., foreach).</u>. This can be <u>beneficial for performance</u>, because it allows you to "build up" a query over time and execute it all at once, and because it only pulls into memory the data that's actually needed. The result of a differed execution is a <u>query that can be iterated over</u>.
    ```csharp
    var query = dbContext.Customers
    .Where(c => c.City == "London"); // Query defined here, but not  executed.
    // Other code...
    foreach (var customer in query) // Query executed here.
    {
        Console.WriteLine(customer.Name);
    }

    ```

    - **Immediate Execution**: the query is executed and data is fetched **IMMEDIATELY** at the moment the <u>query is defined</u>, regardless of whether the data is needed yet. The result of an immediate execution is a <u>concrete list or a single value</u>, not a query that can be iterated over. Methods that cause immediate execution include `ToList()`, `ToArray()`, `Count()`, `First()`, `Sum()`, `Single()` etc.
    ```csharp
    var customers = dbContext.Customers
    .Where(c => c.City == "London")
    .ToList(); // Query defined and executed here.
    ``` 

### Differences: `First()`, `FirstOrDefault()`, `Single()`, `SingleOrDefault()` in LINQ?

???+Note "First(), FirstOrDefault(), Single(), SingleOrDefault()"

    1. **`First()`**: This method returns the first element of a sequence. If the sequence contains no elements, it throws an InvalidOperationException.

    2. **`FirstOrDefault()`**: This method is similar to First(), but if the sequence contains no elements, it returns the default value for the element type (usually null for reference types, or zero for numeric value types).

    3. **`Single()`**: This method returns the only element of a sequence, and it throws an exception if there is not exactly one element in the sequence. If the sequence is empty, it throws an InvalidOperationException. If the sequence has more than one element, it also throws an InvalidOperationException.

    4. **`SingleOrDefault()`**: This method is similar to Single(), but if the sequence contains no elements, it returns the default value for the element type. It still throws an exception if there is more than one element in the sequence.

    All of these methods can also be used with a **predicate**, i.e., a function that takes an element and returns a boolean. When used with a **predicate**, they return the first or only element that satisfies the given condition:
    ```csharp
    List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
    int first = numbers.First();  // returns 1
    int firstOrDefault = numbers.FirstOrDefault(n => n > 10);  // returns 0, because no elements are > 10
    int single = numbers.Single(n => n == 3);  // returns 3
    int singleOrDefault = numbers.SingleOrDefault(n => n > 10);  // returns 0, because no elements are > 10
    ```


