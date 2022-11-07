# A good model for Docker Image initialization

>From what we learned: [Basic guidance of docker](Basic.md), we learned how to use Docker compose to run containers in parallel. In that learning, we directly use `swiftlang/swift:nightly-focal` from the Docker repo. Here, we will learn how to create and use our own Docker Image in the Docker compose.

There are three steps:  
(1) Create a file named `Dockerfile` in your folder. About FROM, MAINTAINER, and RUN, learn from:
[What-is-dockerfile](https://www.simplilearn.com/tutorials/docker-tutorial/what-is-dockerfile)

```dockerfile
FROM swiftlang/swift:nightly-focal

MAINTAINER simpli

RUN apt-get update
RUN apt update
RUN apt -y install zsh
RUN apt -y install curl
RUN apt -y install vim
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
RUN apt-get -y install -y language-pack-en
RUN zsh
```

(2) Then run `docker build -t simpli_image [location of your dockerfile]` to build a Docker Image.  
(3) Finally, the yml below as `docker-compose run --rm dev`:

```yml
services:
  dev:
    image: simpli_image #"swiftlang/swift:nightly-focal"
    volumes:
      - your directory /swift:/code
    environment:
      - USER=your name 
```

Now you are using your own Docker Image in which zsh & oh-my-zsh have been pre-installed.
