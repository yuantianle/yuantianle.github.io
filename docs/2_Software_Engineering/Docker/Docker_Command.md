---
CommentS: true
---

# **Some basic command for Docker**

>Useful link for understanding Docker concepts:</br>
[What Is a Dockerfile: Everything You Need to Know](https://www.simplilearn.com/tutorials/docker-tutorial/what-is-dockerfile)</br>
[Top Docker Commands That You Need to Master](https://www.simplilearn.com/tutorials/docker-tutorial/docker-commands)

## **I. Docker Image**

### **Create an image:**

1. Create a Docker file:
```dockerfile title=".dockerfile"
mkdir Docker_images
cd Docker_images
vi Dockerfile
FROM ubuntu
MAINTAINER simpli
RUN apt-get update
CMD ["echo", "Welcome to Simplilearn"]
```
2. Build a Docker Image with Dockerfile and tag:
```zsh title="Git Bash"
docker build -t simpli_image /D/Docker_images  => [location of your dockerfile]
```

![image](https://user-images.githubusercontent.com/61530469/200457795-b292dca5-52c1-4a87-99d7-ead75e38007e.png){width="40%", : .center}

![image](https://user-images.githubusercontent.com/61530469/200457814-e71c8e79-c3f9-4357-9484-578df6687121.png){width="80%", : .center}

![image](https://user-images.githubusercontent.com/61530469/200457819-3a36eb8a-6073-410b-bdd0-b9686a9cb54c.png){width="80%", : .center}

### **Check the images we have:**

![image](https://user-images.githubusercontent.com/61530469/200457708-f7ce6cd2-e21c-4d86-9d7e-ca3a3273ddbd.png){width="80%", : .center}

### **Delete some image:**

![image](https://user-images.githubusercontent.com/61530469/200457746-88301eaa-f14f-4570-99e4-65a0f864cc71.png){width="80%", : .center}

![image](https://user-images.githubusercontent.com/61530469/200457756-735ae3e9-d414-419f-91f1-ba082272d6ec.png){width="80%", : .center}




## **II. Docker Container**

### **Create a container based on the image:**

```zsh title="Git Bash"
docker run --name simpli_container simpli_image
```

![image](https://user-images.githubusercontent.com/61530469/200457842-876a263b-6bbd-46e3-bc90-71042b594c9b.png){width="80%", : .center}

![image](https://user-images.githubusercontent.com/61530469/200457858-241f752d-5157-432b-8023-5e653140289e.png){width="80%", : .center}



### **Display a list of launched containers:**

```zsh title="Git Bash"
docker ps -a
```

![image](https://user-images.githubusercontent.com/61530469/200457866-3a4bf186-638c-4411-94f5-9e9adaf4feb0.png){width="80%", : .center}

### **Rename an existing container:**

```zsh title="Git Bash"
docker rename [CONTAINER_NAME] [NEW_CONTAINER_NAME]
```

### **Pause a running container:**

```zsh title="Git Bash"
docker pause [CONTAINER_NAME]
```

### **Stop a running container: **

(somehow directly deleted the container)

```zsh title="Git Bash"
docker stop [CONTAINER_NAME]
```

### **Restart a running container: **

(somehow directly clear the setting of container)

```zsh title="Git Bash"
docker stop [CONTAINER_NAME]
```

### **Removes all the stopped containers:**

```zsh title="Git Bash"
docker container prune [OPTIONS] 
```

### **Quit and delete the running containers:**

```zsh title="Git Bash"
exit
```

### **Remove an existing container:**

```zsh title="Git Bash"
docker rm [CONTAINER] 
```

### **Create a new image from a container’s file changes:**

```zsh title="Git Bash"
docker container commit [OPTIONS] [CONTAINER_ID] [NEW_IMAGE_NAME]
```


>The sub-explanation of Docker Compose:
[What is Docker Compose: Example, Benefits and Basic Commands](https://www.simplilearn.com/tutorials/docker-tutorial/docker-compose)

