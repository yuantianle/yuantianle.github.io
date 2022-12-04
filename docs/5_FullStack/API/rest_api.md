---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:material-connection: REST API**

> `REST API`, also known as `RESTful API`, is a web service that allows various clients
 including browser apps to **communicate** with a server.

## **Basic Knowledge**

???+question "Technical Definition?"

    `REST`: Representational State Transfer.

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

    We can refer to the code described in [Express.js](../Backend/expressjs.md) to learn how to implement `CRUD` operations using `Javascript`.


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