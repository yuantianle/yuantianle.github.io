---
comments: true
---

# **`Docker Compose` and it's application** 

We have already touched `Docker Compose` from [Guidance](./Guidance/docker_compose.md). Now it is time to do some advance behaviors based on `Docker Compose`!

> `Docker Compose` is a way to handle more than one `DocKer Container`. That is setting communiation between `DocKer Container`s. In this section, we will iterate all the situation between Server and Host combination to finally reach the goal of `DocKer Container` communications.

Assume our mock server looks like this:

```js title:"mockapi.js"
const express = require('express')
const app = express()
const port = 3000

var path = require('path')
var bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'build')));

var WeatherDataController = require('./REST_API/weather');

app.get('/data/2.5/weather', WeatherDataController.getData);//
//app.get('/data/2.5/weather', (req, res) => {
//  res.json({"coord":{"lon":123.262,"lat":44.5646},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":285.23,"feels_like":284.95,"temp_min":285.23,"temp_max":285.23,"pressure":1014,"humidity":94,"sea_level":1014,"grnd_level":997},"visibility":10000,"wind":{"speed":3.41,"deg":190,"gust":9.72},"clouds":{"all":18},"dt":1664661306,"sys":{"country":"CN","sunrise":1664660711,"sunset":1664702853},"timezone":28800,"id":2036338,"name":"Kaitong","cod":200})
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## **1.  Server and client in the same Docker container**

```yml title:"S_d&C_d.yml"
services:
  server:
    image: "swiftlang/swift:nightly-focal" #simpli_image
    volumes:
      - "C:/CS561_WEEK8:/code"
    environment:
      - USER=ytl_5 
    command: bash -c "apt-get update && apt-get install -y nodejs && node /code/myapp/app.js"
```

```bash
Host:
docker-compose run --rm --name myserver server

Docker:
curl localhost:3000/data/2.5/Weather
```

## **2.  Server in Docker container, client on host**

```yml title:"S_d&C_h.yml"
services:
  server:
    image: "swiftlang/swift:nightly-focal" #simpli_image
    volumes:
      - "C:/CS561_WEEK8:/code"
    environment:
      - USER=ytl_5 
    command: bash -c "apt-get update && apt-get install -y nodejs && node /code/myapp/app.js"
    ports: 
      -"3000:3000"
```

```bash
Host:
docker-compose run --rm --service-ports server

Host:
curl localhost:3000
```


## **3.  Server on host, client in Docker container**

```yml title:"S_d&C_h.yml"
services:
  client:
    image: "swiftlang/swift:nightly-focal" #simpli_image
    volumes:
      - "C:/CS561_WEEK8:/code"
    environment:
      - USER=ytl_5 
    command: bash -c "apt-get update && apt-get install -y nodejs && node /code/myapp/app.js"
```

```bash
Host:
docker-compose run --rm client

Docker Container:
curl host.docker.internal:3000/data/2.5/weather
```

## **4.  Server in Docker container, client in another Docker container**


