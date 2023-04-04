---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# ** 👨‍💻 Operating System**

> Interview Questions for Operating System

- [**What is Operating System**](#what-is-operating-system)


### **What is Operating System?**

??? question "What is Operating System?"
    
    The **system software** that controls computer <u>hardware and software</u> resources. 

    - Its main {==**functions**==} include:
        1. <u>Managing resources</u> such as processes, memory, files, and devices;
        2. Providing an <u>interface</u> for user programs;
        3. Ensuring the normal <u>operation</u> of computer systems. 

    - The {==**purpose**==} of an operating system is to:
        1. Provide a <u>good user experience</u>;
        2. Enable computer systems to run <u>efficiently and reliably</u>.
   
### **What are the classifications of OS?**

??? question "What are the classifications of OS?"

    - **Time-sharing OS:** 
        - allows multiple users to <u>share the resources</u> of a single computer;
        - enables multiple users to access the computer system <u>simultaneously</u>.

    - **Batch processing OS:** loads a <u>batch of user-submitted programs</u> into the computer system to run according to certain rules until all programs are completed.

    - **General purpose OS:** has both the functions of <u>Time-sharing</u> and <u>Batch processing</u>. *E.g* Windows, Linux, MacOS.

    - **Real-time OS:** has high <u>requirements for the response time</u> of the computer system and can complete tasks within a specified time.

    - **Distributed OS:** 
        - distributes the resources of the computer system <u>across multiple computer</u> nodes;
        - <u>cooperates through a network</u> to improve the reliability and performance of the computer system.

    - **Embedded OS:** an operating system designed for devices with <u>small sizes, low power consumption, and high reliability</u>.

### **What are OS components?**

??? question "What are OS components?"

    - **`Kernel`:** the core part of the operating system, responsible for <u>managing computer hardware</u> and <u>providing basic functions</u> such as system calls.

    - **`Process manager`:** responsible for the <u>efficient operation</u> of the computer system, including:
        -  creating, deleting, scheduling, and managing processes.

    - **`Storage manager`:** responsible for <u>managing computer memory</u> resources, including:
        -  memory allocation, recovery, and protection.

    - **`File system`:** responsible for <u>managing files and directories</u> in the computer system, including:
        -  file reading, writing, creation, deletion, and protection.

    - **`Input/output manager`:** responsible for managing <u>data transfer</u> between the computer system and external devices, including: 
        - input/output buffering, device drivers, and interrupt handling.

### **What are process and thread?**

??? question "What are process and thread?"

    !!! note "Definition with comparison"

        - **Definition:** 
            - `Process` is an {==instance of a running program==} with its own independent address space and system resources, including <u>program code</u>, <u>data</u>, <u>stack</u>, and <u>process control blocks</u>. 
            - `Thread` is an {==execution unit in a process==}, sharing resources of the process including <u>address space</u>, <u>file descriptors</u>, <u>signal handlers</u>, and <u>process ID</u>. 

        - **Scheduling:** 
            - `Process` is the <u>basic scheduling unit</u> in an operating system, and the operating system manages processes through process <u>control blocks</u>. 
            - `Threads` are <u>scheduling units</u> within a process, and the operating system schedules threads.

        - **Concurrency:** Different processes run <u>concurrently</u>, with each process having its own independent address space and resources. 
            - `Processes` are <u>independent</u> of each other. 
            - `Threads` within the same process share resources and data, and can execute concurrently.

        - **System overhead:** 
            - `Process` switching requires saving and restoring <u>all</u> process states, so process switching incurs a <u>larger system overhead</u>. 
            - `Thread` switching only requires saving and restoring <u>part</u> of the thread state, so thread switching incurs a <u>smaller system overhead</u>.



#### **References:**

- [SQL Tutorial](https://www.w3schools.com/sql/)