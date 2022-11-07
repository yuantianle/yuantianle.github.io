# Basic guidance of docker

> Docker is a useful tool with CI and backend work. Especially there are some cases that we need to test code in different system. Let's take swift as an example. We make it works on Windows 10.

**Step 1. Install Docker Desktop**

We can download [Links][Docker Desktop]https://docs.docker.com/get-docker/ from the website and install it on your Windows 10.

**Step 2. Create a `docker-compose.yml` file**

```yml
services:
  dev:
    image: "swiftlang/swift:nightly-focal" #Default setting package for your system
    volumes:
      - /Users/<YOUR_DIC_TO_INSTALL_SWIFT>/swift:/code
    environment:
      - USER=<YOUR_NAME>
```

**Step 3. Launch the `dev` Docker service created in Step 2**

Turn on your Docker Desktop. Then run the code below:

```shell
docker-compose run --rm dev
```

**Once inside your docker container, `cd code`.  From `\code` directory you can run the swift command.**

