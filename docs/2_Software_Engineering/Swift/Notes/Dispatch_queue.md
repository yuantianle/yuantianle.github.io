---
comments: true
---

# **Dispatch queue and Dead lock**


## **Dispatch queue (from Prof. Will Braynen, OSU)**

### **What?**

* A dispatch queue is an **object-like structure** that **manages the tasks** you submit to it. All dispatch queues are **first-in, first-out (FIFO)** data structures. Thus, the tasks you add to a queue are always started in the same order that they were added.” (source: [Apple documentation](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/OperationQueues/OperationQueues.html)). That’s important.

### **For?**

* Well, it’s a way to **run multi-threaded code** without using threads directly. It’s **not** as low level as working with threads. 

### **Diff with threads?**

* A **dispatch queue** can manage its own **pool thread**, etc, and ultimately the point of a dispatch queue is to keep track of what instruction to execute next while giving you a **higher-level API** instead of dealing with threads directly

* Whereas you can think of a **thread** as where **instructions actually execute**; for example, a thread might have `start`, `stop`, and `sleep` methods. A thread is **short for a thread of execution** and is **the smallest sequence of programmed instructions** that can be managed independently by a scheduler, which is typically [but not always] **a part of the operating system**” ([wikipedia](https://en.wikipedia.org/wiki/Thread_(computing))).  


## **Serial queue, Concurrent queue, Main dispatch queue and Thread**
| DQueue type \ Thread | Main thread | Other thread |
| :---------- | :---------------|:--------------- |
| Serial queue |    |  `sync`: one thread / `async`: multi threads [concurrent] |
| Concurrent queue |   | multi threads [parallel] |
| Main dispatch queue | one main thread | |

| DQueue type | Grammar | Properties | 
| :---------- | :----------------------------------- | :----------------------------------- |
| Serial queue | `DispatchQueue(lablel:"..").sync/.async { … }` | Private, conccurrent |
| Concurrent queue | `DispatchQueue(lablel:"..", attributes: .concurrent).sync/.async { … }` | Global, parallel |
| Main dispatch queue | `DispatchQueue.main.sync { … }` | Global, conccurrent |

> **Context-switching between threads is expensive. Cheaper to stay on the same thread if you can**. And so, `sync` will “stay” on the same thread whenever possible.  This is so unless you do `DispatchQueue.main.sync {...}` to send the work to the main dispatch queue, in which case it will always go to the main thread.


## **Dead lock in dispatch queue**

To understand dead lock happends in dispatch queue processing, we firstly need to know what is the [Concurrency](../../Others/Concurrency.md).

### **Dead lock case 1 (dispatch queue)**

**Code**

```swift title="dl_1.swift"
import Foundation

let myQueue = DispatchQueue(label:"test queue")

print("1")

myQueue.async{
    print("2")

    myQueue.sync{
        print("3")
    }

    print("4")
}

print("5")
```

**Output**

```
1
5
2
```

**Explaination Picture**

![image](https://user-images.githubusercontent.com/61530469/200782107-5260f3ec-dbd4-442d-b364-a7290d6caa06.png){width="40%", : .center}

### **Dead lock case 2 (serial queue)**

**Code**

```swift title="dl_2.swift"
import Foundation

print("1")  

DispatchQueue.main.sync{
    print("2")
}

print("3")
```

**Output**

```
1
```

**Explaination Picture**

![image](https://user-images.githubusercontent.com/61530469/200782821-4b81ac12-962c-47d5-8c09-14d40b02c764.png){width="40%", : .center}

