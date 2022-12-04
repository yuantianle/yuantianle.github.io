---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# ** Backend Routing**

## **Definiton**

???+question "When? (background)"

    **client** requests to a particular `endpoint` \[ <=> [`URI`](../Frontend/uri.md) + `HTTP` request method (`GET`, `POST`, ...) \]. 


???+question "What? (import routing)"
    
    To handle the request, in `backend routing`, the <u>server handles every request</u> by **responding** to the client with a code `201`(I got that thing you want!) or a `404`(Nope, I don’t have that!).

???+question "Situation? (example)"

    Let’s say a **user** fills out a form with his <u>name, address, favorite hobby</u> and sends a `POST` request by submitting the form. That `GET request url` is sent to the **server**, and the **server** serves back the `requested url` to the **client** as a {==static file==} that is stored on the server. 
    
    If the **server** doesn’t have the requested file, then it returns a `404` response error. 

## **Usage**

???+example "Code using"

    ???+node "Express.js syntax"

        <center>`{==app==}.{==METHOD==}({==PATH==}, {==HANDLER==})`</center>

        - `app`: an instance of express.
        - `METHOD`: an HTTP request method, in lowercase.
        - `PATH`: a path on the server.
        - `HANDLER`: the function executed when the route is matched.

    ???+node "Example code"

        <pre class="embed" data-gutter="inside">
        //Respond with Hello World! on the homepage:
        app.get('/', (req, res) => {
            res.send('Hello World!')
        })
        </pre>

        <pre class="embed" data-gutter="inside">
        //Respond to POST request on the root route (/), the application’s home page:
        app.post('/', (req, res) => {
            res.send('Got a POST request')
        })
        </pre>

        <pre class="embed" data-gutter="inside">
        //Respond to a PUT request to the /user route:
        app.put('/user', (req, res) => {
            res.send('Got a PUT request at /user')
        })
        </pre>

        <pre class="embed" data-gutter="inside">
        //Respond to a DELETE request to the /user route:
        app.delete('/user', (req, res) => {
            res.send('Got a DELETE request at /user')
        })
        </pre>


## **Handlers for Routing**

> Open the boxes below to see the examples 👇

???+success "Four classes of handler"

    ???note "1° `A single callback function` can handle a route"

        <pre class="embed" data-gutter="inside">
        const express = require('express')
        const app = express()
        const port = 3000
        &nbsp;
        app.get('/', (req, res) => {
            res.send('Hello from A!')
        })
        &nbsp;
        app.listen(port, () => {
            console.log(\`Example app listening on port ${port}\`)
        })
        </pre>

    ???note "2° `More than one callback function` can handle a route (use `next()` to control the next callback.)"

        <pre class="embed" data-gutter="inside">
        const express = require('express')
        const app = express() 
        const port = 3000
        &nbsp;
        app.get('/', (req, res, next) => {
            console.log('the response will be sent by the next function ...')
            next()
        }, (req, res) => {
            res.send('Hello from B!')
        })
        &nbsp;
        app.listen(port, () => {
            console.log(\`Example app listening on port ${port}\`)
        })
        </pre>

    ???note "3° `An array of callback functions` can handle a route"

        <pre class="embed" data-gutter="inside">
        const express = require('express')
        const app = express()
        const port = 3000
        &nbsp;
        const cb0 = function (req, res, next) {
            console.log('CB0')
            next()
        }
        &nbsp;
        const cb1 = function (req, res, next) {
            console.log('CB1')
            next()
        }
        &nbsp;
        const cb2 = function (req, res) {
            res.send('Hello from C!')
        }
        &nbsp;
        app.get('/', [cb0, cb1, cb2])
        &nbsp;
        app.listen(port, () => {
            console.log(\`Example app listening on port ${port}\`)
        })
        </pre>

    ???note "4° `A combination of independent functions and arrays of functions` can handle a route"

        <pre class="embed" data-gutter="inside">
        const express = require('express')
        const app = express()
        const port = 3000
        &nbsp;
        const cb0 = function (req, res, next) {
          console.log('CB0')
          next()
        }
        &nbsp;
        const cb1 = function (req, res, next) {
          console.log('CB1')
          next()
        }
        &nbsp;
        app.get('/', [cb0, cb1], (req, res, next) => {
          console.log('the response will be sent by the next function ...')
          next()
        }, (req, res) => {
          res.send('Hello from D!')
        })
        &nbsp;
        app.listen(port, () => {
            console.log(\`Example app listening on port ${port}\`)
        })
        </pre>

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