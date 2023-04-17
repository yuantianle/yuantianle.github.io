---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# ** 👨‍💻 Operating System**

> Interview Questions for Operating System

- [**What is Operating System**](#what-is-operating-system)


### **Operating System**

??? question "Click for answers 👇"
    
    The **system software** that controls computer <u>hardware</u> and <u>software</u> resources. 

    - Its main {==**functions**==} include:
        1. <u>Managing resources</u> such as processes, memory, files, and devices;
        2. Providing an <u>interface</u> for user programs;
        3. Ensuring the normal <u>operation</u> of computer systems. 

    - The {==**purpose**==} of an operating system is to:
        1. Provide a <u>good user experience</u>;
        2. Enable computer to excute programs <u>efficiently and reliably</u>.
   
### **Classifications of OS**

??? question "Click for answers 👇"

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

### **OS components**

??? question "Click for answers 👇"

    - **`Kernel`:** the core part of the operating system, responsible for <u>managing computer hardware</u> and <u>providing basic functions</u> such as system calls.

    - **`Process manager`:** responsible for the <u>efficient operation</u> of the computer system, including:
        -  creating, deleting, scheduling, and managing processes.

    - **`Storage manager`:** responsible for <u>managing computer memory</u> resources, including:
        -  memory allocation, recovery, and protection.

    - **`File system`:** responsible for <u>managing files and directories</u> in the computer system, including:
        -  file reading, writing, creation, deletion, and protection.

    - **`Input/output manager`:** responsible for managing <u>data transfer</u> between the computer system and external devices, including: 
        - input/output buffering, device drivers, and interrupt handling.

### **Process and thread**

??? question "Click for answers 👇"

    !!! note "Definition with comparison"

        - **Definition:** 
            - `Process` is an {==instance of a running program==} with its own independent instruction address space and system resources, including <u>program code</u>, <u>data</u>, <u>stack</u>, and <u>process control blocks</u>. 
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

### **Different states of processes**

??? question "Click for answers 👇"

    Three states: running, ready, or waiting:

    - **Running:** the process has all the resources it needs for execution, and it has been given permission by the operating system to use the processor.
    - **Ready:** the process is waiting for permission to use the processor.
    - **Waiting:** the process is waiting for some external event to occur, such as user input or disk access.


    !!! warning ""

        - Only one process can be in the running state at any given time. 
        - The remaining processes are either in a <u>waiting state</u> or a <u>ready state</u>. 
        - In a real operating system, the waiting and ready states are implemented as **queues** that hold the processes in these states.

### **Process scheduling parameters**

??? question "Click for answers 👇"

    !!! note "Definition with comparison"

        - **Arrival Time (AT):** Time at which the process arrives in the ready queue.
        - **Completion Time (CT):** Time at which the process completes its execution.
        - **Burst Time (BT)** Time required by a process for CPU execution.
        - **Turn Around Time (TAT):** Completion Time - Arrival Time 
        - **Waiting Time (WT):** Turn around time -Burst time.

### **Necessity of process**

??? question "Click for answers 👇"

    A typical process involves both I/O time and CPU time. In a uniprogramming system like MS-DOS, time spent waiting for I/O is wasted and CPU is free during this time. In multiprogramming systems, one process can use CPU while another is waiting for I/O. This is possible only with process scheduling. 

### **Different process scheduling algorithms (PSA)**

??? question "Click for answers 👇"

    - **First Come First Serve (FCFS):** Simplest scheduling algorithm that schedules according to arrival times of processes.
    - **Shortest Job First (SJF):** Process which have the shortest burst time are scheduled first.
    - **Shortest Remaining Time First (SRTF):** It is a preemptive mode of SJF algorithm in which jobs are scheduled according to the shortest remaining time (amount of time left for a process to complete its execution).
    - **Round Robin (RR) Scheduling:** Each process is assigned a fixed time, in cyclic way.
    - **Priority Based scheduling (Non Preemptive):** In this scheduling, processes are scheduled according to their priorities, i.e., highest priority process is schedule first. If priorities of two processes match, then scheduling is according to the arrival time.
    - **Highest Response Ratio Next (HRRN):** In this scheduling, processes with highest **response ratio**(Turn around time / Burst time) is scheduled. This algorithm avoids starvation.
    - **Multilevel Queue Scheduling (MLQ):** According to the priority of process, processes are placed in the different queues. Generally high priority process are placed in the top level queue. Only after completion of processes from top level queue, lower level queued processes are scheduled.
    - **Multilevel Feedback Queue (MLFQ) Scheduling:** It allows the process to move in between queues. The idea is to separate processes according to the characteristics of their CPU bursts. If a process uses too much CPU time, it is moved to a lower-priority queue.

    !!! warning ""

        - FCFS can cause long waiting times, especially when the first job takes too much CPU time.
        - Both SJF and SRTF algorithms may cause starvation. Consider a situation when a long process is there in the ready queue and shorter processes keep coming.
        - If time quantum for RRS is very large, then it behaves same as FCFS scheduling.
        - SJF is optimal in terms of average waiting time for a given set of processes. SJF gives minimum average waiting time, but problems with SJF is how to know/predict the time of next job.

### **Objectives of PSA**

??? question "Click for answers 👇"

    - Max CPU utilization (Keep CPU as busy as possible)
    - Fair allocation of CPU.
    - Max throughput (Number of processes that complete their execution per time unit)
    - Min turnaround time (Time taken by a process to finish execution)
    - Min waiting time (Time for which a process waits in ready queue)
    - Min response time (Time when a process produces first response)


### **Critical section problem & solution**

??? question "Click for answers 👇"

    The critical section problem is a fundamental concept in computer science and operating systems that deals with the synchronization and coordination of concurrent processes in a shared resource environment. It arises when multiple processes or threads need to access shared resources, such as data structures or hardware devices, simultaneously. Without proper synchronization mechanisms in place, this can lead to unexpected results or unintended behavior, known as race conditions.

    - Critical Section – The portion of the code in the program where shared variables are accessed and/or updated.
    - Remainder Section – The remaining portion of the program excluding the Critical Section.
    - Race around Condition – The final output of the code depends on the order in which the variables are accessed. This is termed as the race around condition.

    A solution for the critical section problem must satisfy the following three conditions:

    - Mutual Exclusion – If a process Pi is executing in its critical section, then no other process is allowed to enter into the critical section.
    - Progress – If no process is executing in the critical section, then the decision of a process to enter a critical section cannot be made by any other process that is executing in its remainder section. The selection of the process cannot be postponed indefinitely.
    - Bounded Waiting – There exists a bound on the number of times other processes can enter into the critical section after a process has made request to access the critical section and before the requested is granted.


### **Synchronization Tools**
    
??? question "Click for answers 👇"

     A **Semaphore** is an integer variable that is accessed only through two atomic operations, wait () and signal (). An atomic operation is executed in a single CPU time slice without any pre-emption. Semaphores are of two types:

    - Counting Semaphore – A counting semaphore is an integer variable whose value can range over an unrestricted domain.
    - Mutex – A mutex provides mutual exclusion, either producer or consumer can have the key (mutex) and proceed with their work. As long as the buffer is filled by producer, the consumer needs to wait, and vice versa. At any point of time, only one thread can work with the entire buffer. The concept can be generalized using semaphore. 
    - Misconception: There is an ambiguity between binary semaphore and mutex. We might have come across that a mutex is binary semaphore. But they are not! The purpose of mutex and semaphore are different. May be, due to similarity in their implementation a mutex would be referred as binary semaphore.


### **Deadlock**

??? question "Click for answers 👇"

    A **situation** where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process. Deadlock can arise if following four conditions hold simultaneously (Necessary Conditions):

    - Mutual Exclusion – One or more than one resource are non-sharable (Only one process can use at a time).
    - Hold and Wait – A process is holding at least one resource and waiting for resources.
    - No Preemption – A resource cannot be taken from a process unless the process releases the resource.
    - Circular Wait – A set of processes are waiting for each other in circular form.
    
    Methods for handling deadlock: There are three ways to handle deadlock
 
    - Deadlock prevention or avoidance: The idea is to not let the system into deadlock state.
    - Deadlock detection and recovery : Let deadlock occur, then do preemption to handle it once occurred.
    - Ignore the problem all together : If deadlock is very rare, then let it happen and reboot the system. This is the approach that both Windows and UNIX take.


### **Banker’s Algorithm** 

??? question "Click for answers 👇"

    This algorithm handles multiple instances of the same resource. 

### **Memory Management** 

??? question "Click for answers 👇"

    The techniques allow the memory to be shared among multiple processes.

    - **Overlays:** The memory should contain only those instructions and data that are required at a given time.
    - **Swapping:** In multiprogramming, the instructions that have used the time slice are swapped out from the memory.

### **Memory Management Techniques** 
   
??? question "Click for answers 👇"

    (a) Single Partition Allocation Schemes – The memory is divided into two parts. One part is kept to be used by the OS and the other is kept to be used by the users. 

    (b) Multiple Partition Schemes: 

    - Fixed Partition – The memory is divided into fixed size partitions.
    - Variable Partition – The memory is divided into variable sized partitions. Variable partition allocation schemes:
        - First Fit – The arriving process is allotted the first hole of memory in which it fits completely.
        - Best Fit – The arriving process is allotted the hole of memory in which it fits the best by leaving the minimum memory empty.
        - Worst Fit – The arriving process is allotted the hole of memory in which it leaves the maximum gap.
    Note:

        - Best fit does not necessarily give the best results for memory allocation.
        - The cause of external fragmentation is the condition in Fixed partitioning and Variable partitioning saying that entire process should be allocated in a contiguous memory location. Therefore Paging is used.
        Paging – The physical memory is divided into equal sized frames. The main memory is divided into fixed size pages. The size of a physical memory frame is equal to the size of a virtual memory frame.
        Segmentation – Segmentation is implemented to give users view of memory. The logical address space is a collection of segments. Segmentation can be implemented with or without the use of paging.


### **Page Fault** 

??? question "Click for answers 👇"

    A `page fault` is a type of interrupt, raised by the hardware when a running program accesses a memory page that is mapped into the virtual address space, but not loaded in physical memory. 

### **File System** 

??? question "Click for answers 👇"

    `File System`: A file is a collection of related information that is recorded on secondary storage. Or file is a collection of logically related entities. 

### **File Directories** 

??? question "Click for answers 👇"

    `File Directories`: Collection of files is a file directory. The directory contains information about the files, including attributes, location and ownership. Much of this information, especially that is concerned with storage, is managed by the operating system.

    - **SINGLE-LEVEL DIRECTORY:** In this a single directory is maintained for all the users
    
    - **TWO-LEVEL DIRECTORY:** Due to two levels there is a <u>path name</u> for every file to locate that file.
    
    - **TREE-STRUCTURED DIRECTORY:** Directory is maintained in the <u>form of a tree</u>. Searching is efficient and also there is grouping capability. 
    
    - **Continuous Allocation:** A single <u>continuous set of blocks is allocated</u> to a file at the time of file creation.
    
    - **Linked Allocation(Non-contiguous allocation):** Allocation is on an individual block basis. <u>Each block contains a pointer to the next block</u> in the chain. 
    
    - **Indexed Allocation:** It addresses many of the problems of contiguous and chained allocation. In this case, the file allocation table contains a <u>separate one-level index</u> for each file
    
### ** Seek time ** 

??? question "Click for answers 👇"

    `Seek time` is the **time** taken to locate the <u>disk arm</u> to a <u>specified track</u> where the data is to be read or write.
    
### **Rotational Latency** 

??? question "Click for answers 👇"

    `Rotational Latency` is the **time** taken by the <u>desired sector of the disk to rotate</u> into a position so that it can access the read/write heads.
    
### **Transfer Time** 

??? question "Click for answers 👇"

    `Transfer time` is the time to transfer the data. It depends on the rotating speed of the disk and number of bytes to be transferred. 

### **Disk Access Time** 

??? question "Click for answers 👇"

    Disk Access Time = Seek Time + Rotational Latency + Transfer Time 

### **Disk Response Time**

??? question "Click for answers 👇"

    Response Time is the average of time spent by a request waiting to perform its I/O operation. Average Response time is the response time of the all requests. 
    
### **Buffer**

??? question "Click for answers 👇"

    A `buffer` is a memory area that stores data being transferred between <u>two devices</u> or between <u>a device and an application</u>.

### **Disk Scheduling Algorithms**

??? question "Click for answers 👇"

    - **FCFS:** FCFS is the simplest of all the Disk Scheduling Algorithms. In FCFS, the requests are addressed in the order they arrive in the disk queue.
    - **SSTF:** In SSTF (Shortest Seek Time First), requests having shortest seek time are executed first. So, the seek time of every request is calculated in advance in a queue and then they are scheduled according to their calculated seek time. As a result, the request near the disk arm will get executed first.
    - **SCAN:** In SCAN algorithm the disk arm moves into a particular direction and services the requests coming in its path and after reaching the end of the disk, it reverses its direction and again services the request arriving in its path. So, this algorithm works like an elevator and hence also known as elevator algorithm.
    - **CSCAN:** In SCAN algorithm, the disk arm again scans the path that has been scanned, after reversing its direction. So, it may be possible that too many requests are waiting at the other end or there may be zero or few requests pending at the scanned area. 
    - **LOOK:** It is similar to the SCAN disk scheduling algorithm except for the difference that the disk arm in spite of going to the end of the disk goes only to the last request to be serviced in front of the head and then reverses its direction from there only. Thus it prevents the extra delay which occurred due to unnecessary traversal to the end of the disk. 
    - **CLOOK:** As LOOK is similar to SCAN algorithm, in a similar way, CLOOK is similar to CSCAN disk scheduling algorithm. In CLOOK, the disk arm in spite of going to the end goes only to the last request to be serviced in front of the head and then from there goes to the other end’s last request. Thus, it also prevents the extra delay which occurred due to unnecessary traversal to the end of the disk. 
 


#### **References:**

- [[SQL Tutorial](https://www.geeksforgeeks.org/commonly-asked-operating-systems-interview-questions/?ref=lbp)]
- [Last Minute Notes – Operating Systems](https://www.geeksforgeeks.org/last-minute-notes-operating-systems/?ref=lbp)