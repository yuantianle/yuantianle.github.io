---
comments: true
---

# **Dispatch queue and Dead lock**


## **Dispatch queue**



## **Dead lock in dispatch queue**

To understand dead lock happends in dispatch queue processing, we firstly need to know what is the [Concurrency](../../Others/Concurrency.md).

### Dead lock case 1

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

![image](https://user-images.githubusercontent.com/61530469/200782107-5260f3ec-dbd4-442d-b364-a7290d6caa06.png){width="20%", : .center}

### Dead lock case 2

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

![image](https://user-images.githubusercontent.com/61530469/200782821-4b81ac12-962c-47d5-8c09-14d40b02c764.png){width="20%", : .center}
