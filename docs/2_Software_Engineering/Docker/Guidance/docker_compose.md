---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **Run container by using `docker compse`** 

### **Step 1. Create a `docker-compose.yml` file**

```yaml title="docker-compose.yml"
services:
  dev:
    image: "swiftlang/swift:nightly-focal" #Default setting package for your system
    volumes:
      - /Users/<YOUR_DIC_TO_INSTALL_SWIFT>/swift:/code
    environment:
      - USER=<YOUR_NAME>
```

### **Step 2. Launch the `dev` Docker service created in Step 2**

Turn on your Docker Desktop. Then run the code below. 

Once inside your docker container, `cd code`.  From `\code` directory you can run the swift command.

```bash title="Git Bash"
docker-compose run --rm dev
```
