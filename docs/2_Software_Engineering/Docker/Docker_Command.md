---
Comment: true
---

#Some basic command for Docker

Useful link for understanding Docker concepts:
https://www.simplilearn.com/tutorials/docker-tutorial/what-is-dockerfile


Check the image we have:
![image](https://user-images.githubusercontent.com/61530469/200457708-f7ce6cd2-e21c-4d86-9d7e-ca3a3273ddbd.png)

Delete some image:
![image](https://user-images.githubusercontent.com/61530469/200457746-88301eaa-f14f-4570-99e4-65a0f864cc71.png)
![image](https://user-images.githubusercontent.com/61530469/200457756-735ae3e9-d414-419f-91f1-ba082272d6ec.png)

Create an image:
(1) Create a Docker file:
mkdir Docker_images
cd Docker_images
vi Dockerfile
FROM ubuntu
MAINTAINER simpli
RUN apt-get update
CMD ["echo", "Welcome to Simplilearn"]

(2) Build a Docker Image with Dockerfile and tag:
docker build -t simpli_image /D/Docker_images  => [location of your dockerfile]
![image](https://user-images.githubusercontent.com/61530469/200457795-b292dca5-52c1-4a87-99d7-ead75e38007e.png)
![image](https://user-images.githubusercontent.com/61530469/200457814-e71c8e79-c3f9-4357-9484-578df6687121.png)
![image](https://user-images.githubusercontent.com/61530469/200457819-3a36eb8a-6073-410b-bdd0-b9686a9cb54c.png)



Create a container based on the image:
docker run --name simpli_container simpli_image
![image](https://user-images.githubusercontent.com/61530469/200457842-876a263b-6bbd-46e3-bc90-71042b594c9b.png)
![image](https://user-images.githubusercontent.com/61530469/200457858-241f752d-5157-432b-8023-5e653140289e.png)





Display a list of launched containers:
docker ps -a
![image](https://user-images.githubusercontent.com/61530469/200457866-3a4bf186-638c-4411-94f5-9e9adaf4feb0.png)

Rename an existing container:
docker rename [CONTAINER_NAME] [NEW_CONTAINER_NAME]

Pause a running container: 
docker pause [CONTAINER_NAME]

Stop a running container: <直接删掉container了>
docker stop [CONTAINER_NAME]

Restart a running container: <格式化了>
docker stop [CONTAINER_NAME]

Removes all the stopped containers:
docker container prune [OPTIONS] 

Quit and delete the running containers:
exit

Remove an existing container:
docker rm [CONTAINER] 

Create a new image from a container’s file changes:
docker container commit [OPTIONS] [CONTAINER_ID] [NEW_IMAGE_NAME]


The sub-explanation of Docker Compose:
https://www.simplilearn.com/tutorials/docker-tutorial/docker-compose

