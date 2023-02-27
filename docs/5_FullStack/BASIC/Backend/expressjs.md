---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:simple-express: Express.js**

## **Definiton**

???+question "What"
    
    `Express.js`, or simply `Express`, is a back end web application framework for building `RESTful APIs` with `Node.js`, released as free and open-source software under the MIT License. It has been called the de facto standard server framework for Node.js.

???+question "For"

    It is designed for building **web applications** and **APIs**. 

## **Usage**

???+example "Code using"

    <pre class="embed" data-gutter="inside">
    //declare using Express.js
    const express = require('express')
    const app = express() 
    &nbsp;
    //app starts a server listens on port 3000 for connections
    const port = 3000
    &nbsp;
    //app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    &nbsp;
    app.listen(port, () => {
        console.log(\`Example app listening on port ${port}\`)
    })
    </pre>
    

???+example "Steps of running locally"

    1. Create a directory named `myapp`.
    2. `cd` into the directory and run: `npm init`.
    3. Command prompts you for a number of things:
        - name: (RETURN for default).
        - version of your application: (RETURN for default).
        - entry point: (default: index.js) `app.js`
    4. Install express as a dependency (choose one):
        - install Express in the `myapp` directory and save it in the dependency list: `npm install express` 
        - install Express in the `myapp` directory temprarily and not add it to the dependency list: `npm install express --no-save` 
    5. Run the app with command: `node app.js`
    6. Then, load `http://localhost:<port>/` in a browser to see the output.


## **Implement Routing**

We have already learn [Backend Routing](./routing.md). Here, let's see how to implement `Routing` by using **Express.js**.

???+success "Routing example"

    > Please go to [Hoppscotch](https://hoppscotch.io/) for implementing `POST`, `PUT` and `DELETE`

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


### **References:**

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