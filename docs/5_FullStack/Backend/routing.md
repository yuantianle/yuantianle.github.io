---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# ** Backend Routing**

## **Definiton**

???+question "What?"
    
    In `backend routing`, the <u>server handles every request</u> by **responding** to the client with a code `201`(I got that thing you want!) or a `404`(Nope, I don’t have that!).

???+question "Situation?"

    Let’s say a **user** fills out a form with his <u>name, address, favorite hobby</u> and sends a `POST` request by submitting the form. That `GET request url` is sent to the **server**, and the **server** serves back the `requested url` to the **client** as a {==static file==} that is stored on the server. 
    
    If the **server** doesn’t have the requested file, then it returns a `404` response error. 

## **Usage**

???+example "Code using"

    <pre class="embed" data-gutter="inside">
    const express = require('express');
    const bodyParser = require('body-parser');
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


## **Implement Routing**

We have already learn [Backend Routing](./routing.md). Here, let's see how to implement `Routing` by using **Express.js**.



### **References:**

- [Frontend Routing vs Backend Routing](https://medium.com/@kennedyjt88/frontend-routing-vs-backend-routing-874b2bc41e5a)

- [Express.js wiki](https://en.wikipedia.org/wiki/Express.js)

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