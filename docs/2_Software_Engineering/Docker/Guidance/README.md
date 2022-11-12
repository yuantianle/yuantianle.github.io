---
comments: true
---

# **Basic guidance of docker** 

> Docker is a useful tool with CI and backend work. Especially there are some cases that we need to test code in different system. Let's take swift as an example. We make it works on Windows 10.

### **Step 1. Install Docker Desktop**

We can download :whale: [Docker Desktop](https://docs.docker.com/get-docker/) from the website and install it on your Windows 10.

### **Step 2. Run Docker Container**

**To run `Docker Container`, firstly you need to have a `Docker Image`. There are two ways to have an `Image`:**

* Create an `Image` by using `dockerfile` (see in [A good model for Docker Image initialization](../A_good_model_for_Docker_Image_initialization.md)).
* Git clone an `Image` from Docker Hub.

**After you have the `Docker Image` as the system mirror settings, you can create a `Docker Container` as an realization of the system. There are two ways to create the `Docker Container`:**

* Docker [`run`](docker_run.md).
* Docker [`compose`](docker_compose.md).



