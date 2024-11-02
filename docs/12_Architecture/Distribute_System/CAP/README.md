---
ᴴₒᴴₒᴴₒ: ture
comments: true
---

# **:material-head-dots-horizontal: CAP theorem**

## **CAP**

???+Note "Definition"

    The `CAP` theorem is a principle that describes the <u>limitations of distributed data storage systems</u>. It states that in a distributed system, you can only guarantee **two** out of the following three properties simultaneously:

    1. **Consistency** (C): Every <u>read receives the latest write or an error</u>, ensuring that <u>all nodes in the system return the same data</u>.

    2. **Availability** (A): Every <u>request (read or write) receives a response</u>, even if some nodes in the system are down.

    3. **Partition Tolerance** (P): The system <u>continues to operate even if there is a communication breakdown</u> between some parts of the system (network partitions).

## **Applications of CAP**

???+Note "Applications"

    According to the theorem, when a **network partition** occurs, a system can either:

    - Maintain **Consistency** and sacrifice **Availability** (returning an error instead of outdated data).
    - Maintain **Availability** and sacrifice **Consistency** (returning potentially outdated data from other nodes).

    In essence, the CAP theorem helps guide the design choices for distributed systems based on the trade-offs between these properties. Thus for the applications, we can classify them into three categories:
    
    - **CA**: Traditional RDBMS - <u>MySQL</u>, <u>PostgreSQL</u>, <u>SQL Server</u>
    - **CP**: <u>Redis</u>, <u>HBase</u>, <u>MongoDB</u>
    - **AP**: <u>DynamoDB</u>, <u>Cassandra</u>, <u>Couchbase</u>
    
    ![picture 1](./cap-theorem-venn-diagram-nosql-sql-databases.png){width="50%", : .center}

### **Reference**

- [CAP Theorem - Data Science Blog](https://data-science-blog.com/wp-content/uploads/2021/09/cap-theorem-venn-diagram-nosql-sql-databases.png)