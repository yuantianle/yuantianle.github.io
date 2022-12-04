---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:material-connection: REST API**

> `REST API`, also known as `RESTful API`, is a web service that allows various clients
 including browser apps to **communicate** with a server.

## **Basic Knowledge**

???+question "Technical Definition?"

    A `REST API` is an **API (application programming interface)** that conforms to specific **architectural** constraints, like *stateless communication* and *cacheable data*. 
    
    `REST API` is not a protocol or standard. While `REST APIs` {==can be accessed through==} a number of communication protocols, most commonly, they are called over `HTTPS`.

???+question "Information commnication?"

    `REST APIs` should accept `JSON` for request payload and also send responses to `JSON`. `JSON` is the standard for transferring data.

## **Anatomy of an HTTP request**



## **CRUD operations**

In computer programming, `create`, `read`, `update`, and `delete` (CRUD) are the four basic operations of persistent storage.

Each letter in the acronym may be mapped to a **Hypertext Transfer Protocol (HTTP)** method:

CRUD | HTTP | Details
:-:|:-:|:-:
Create| `POST`, `PUT` if we have `id` or `uuid` | submits new data to the server.
Read| `GET` | retrieves resources.
Update| `PUT` | updates existing data (specific one).
Delete| `DELETE` | removes data.

???+example "Example"

    By using [Express.js](../Backend/expressjs.md), we can implement CRUD operations as below:

    <pre class="embed" data-gutter="inside">
    const express = require('express');
    const bodyParser = require('body-parser');
    &nbsp;
    const app = express();
    &nbsp;
    app.use(bodyParser.json());
    &nbsp;
    app.get('/articles', (req, res) => {
      const articles = [];
      // code to retrieve an article...
      res.json(articles);
    });
    &nbsp;
    app.post('/articles', (req, res) => {
      // code to add a new article...
      res.json(req.body);
    });
    &nbsp;
    app.put('/articles/:id', (req, res) => {
      const { id } = req.params;
      // code to update an article...
      res.json(req.body);
    });
    &nbsp;
    app.delete('/articles/:id', (req, res) => {
      const { id } = req.params;
      // code to delete an article...
      res.json({ deleted: id });
    });
    &nbsp;
    app.listen(3000, () => console.log('server started'));
    </pre>

### **References:**

- [Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)


<script src="https://embed.runkit.com"></script>
<style>.embed { overflow: visible; text-align: center; width: 110%}</style>
<script>
const elements = [...document.getElementsByClassName('embed')]
const notebooks = elements.reduce((notebooks, element) => {
    const innerText = element.firstChild
    const currentCell = window.RunKit.createNotebook({
        element,
        gutterStyle: element.getAttribute("data-gutter"),
        source: innerText.textContent,
        // Remove the text content of the pre tag after the embed has loaded
        mode: "endpoint",
        onLoad: () => innerText.remove()
    })
  return notebooks
}, [])
</script>