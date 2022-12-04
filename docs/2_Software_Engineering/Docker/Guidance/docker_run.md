---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **Run container by using `docker run`** 


### **Safely running Docker Container**

Instead of running `docker run --rm dev` in the terminal, I suggest directly using Docker Desktop to run `docker image` that you cloned from the Docker Hub or the one created by yourself ( see in [A good model for Docker Image initialization or in Confluence](https://yuantianle.github.io/2_Software_Engineering/Docker/A_good_model_for_Docker_Image_initialization/) )

>If you close your terminal window that ran `docker run --rm dev`, it will somewhat `pause` your container then you can not re-`start` the docker container you created again because you have already closed your terminal process. (This case also equals to you `pause` your container in Docker Desktop, and you suddenly turn Docker Desktop off. If you reopen the Docker engine again and try to `start` the container, you are forbidden to do it. I struggled with this lots of times at the start.)

Instead, I directly run the image I have in Docker Desktop. And once I want to stop my container (save all the installed files in it and run again in the future) and shut down my laptop, I directly click `stop` of the container and turn off the Docker Desktop engine for next time use. 

![image](https://user-images.githubusercontent.com/61530469/201456350-c497ecf8-e888-4d4c-9a6a-e202914c8e81.png){width="80%", : .center}

![image](https://user-images.githubusercontent.com/61530469/201456354-dddf4c89-c0aa-4df6-9c82-8c83cd657cd7.png){width="80%", : .center}

![image](https://user-images.githubusercontent.com/61530469/201456359-757131cf-482b-4292-830f-9631b401f514.png){width="80%", : .center}

???+ danger

    (It doesn't mean you cannot run the terminal anymore. After you run the container through the Docker Desktop engine, you can open any terminal to edit your container status. Just at this time. closing the terminal will not affect your container process.)
