---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# ** :simple-matternet: Programming techniques**

> Let's see some **programming techniques** used for design pattern.

## **Delegation**

For enhancing code reuse, we followed the basic principle: [*Favor Composition over Inheritance*](basic/#13-favor-composition-over-inheritance). {==The `Delegation` is the technique to implement the principle of `Composition`==}.

### **1.1 Definition**

!!! note ""
    
    **Two objects** are involved in handling a request:
    
    <center>$Receving\;object\;(subclass) \xrightarrow[]{\text{delegates operations}} Delegate\;object\;(superclass)$</center>

    ``` mermaid
        classDiagram
            direction LR
            Delegator --* Delegatee : REQUEST behavior (Operation2)
            class Delegator{
                - target : Delegatee
                + Operation()
            }
            note for Delegator "void Operation(){\n. target.Operation2(); \n}"
            class Delegatee{
                + Operation2()
            }
    ```

### **1.2 Example**

!!! note ""

    Let's say there is a class `Window` wanna calculate its area (`Area1()`). There are two plans:

    1. Abstract `Window` to a superclass `Rectangular` as an inheritance.
    2. Delegate <u>area-calculate</u> behavior to a reusable `Rectangular` instance.

    !!! example ""

        === "Plan1: Abstraction"

            ``` mermaid
                classDiagram
                    direction BT
                    Window --|> Rectangle
                    class Window{
                        - win_width : int
                        - win_height : int
                        + Area1()
                    }
                    note for Window "float Area1(){\n. return this->win_width * this->win_height; \n}"
                    class Rectangle{
                        - rec_width : int
                        - rec_height : int
                        + Area2()
                    }
                    note for Rectangle "float Area2(){\n. return this->rec_width * this->rec_height; \n}"
            ```
            `Window` **inherits** the operation `Area2()` from `Rectangle`.

        === "Plan2: Delegation"

            ``` mermaid
                classDiagram
                    direction BT
                    Window --* Rectangle
                    class Window{
                        - rectangle : Rectangle
                        + Area1()
                    }
                    note for Window "float Area(){\n. return rectangle.Area2(window); \n}"
                    class Rectangle{
                        - rec_width : int
                        - rec_height : int
                        + Area2(ptr)
                    }
                    note for Rectangle "float Area2(ptr){\n. return this->rec_width * this->rec_height + ptr.info; \n}"
            ```

            `Window` must now **forward requests** to its `Rectangle` instance explicitly.

    Instead of a *Window* {==being==} a *Rectangle*, with the help of **delegation**, it would change to {==have==} a *Rectangle*.

### **1.3 Advantages**

!!! note ""

    - It makes it easy to compose behaviors at run-time;
    - It makes it easy to change the way they're composed. 

### **1.4 Improvement**

!!! note ""

    The completed `delegation` UML diagram can be seen below:

    ``` mermaid
    classDiagram
        direction LR
        Delegator ..> Interface : Depends on behavior of
        Delegatee1 ..|> Interface : Realize
        Delegatee2 ..|> Interface : Realize
        class Delegator{
            - target : Interface
            + Operation()
        }
        note for Delegator "void Operation(){\n. target.Operation2(); \n}"
        class Delegatee1{
            + Operation2()
        }
        class Delegatee2{
            + Operation2()
        }
        class Interface{
            <<Interface>>
            + Operation2()
        }
    ```

    ``` cpp
    protocol Delegator {
        func standup()
    }

    class Delegatee1: ScrumMaster {
        func standup() { ... }
    }

    class Delegatee2: ScrumMaster {
        func standup() { ... }
    }

    class Will: ScrumMaster {
        static let shared = Will()
        var hasSchedulingConflict = false
        weak var delegate: ScrumMaster?

        private init()

        func standup() {
            guard !hasSchedulingConflict else {
                delegate?.standup()
            }

            ...
         }
    }
    ```
    **E.g:** Our `window` can become `circular` at run-time simply by **replacing** its <u>Rectangle instance with a Circle instance</u>, assuming Rectangle and Circle have the same type.

### **1.5 Use case**

!!! note ""

    Here we list the design patterns that use 
    === "Use heavily"

        - [State](../contents/#38-state) [Behavioral Design Pattern]
        - [Strategy](../contents/#39-strategy) [Behavioral Design Pattern]
        - [Visitor](../contents/#311-visitor) [Behavioral Design Pattern]

    === "Less heavily"

        - [Mediator](../contents/#35-mediator) [Behavioral Design Pattern]
        - [Responsibility](../contents/#31-chain-of-responsibility) [Behavioral Design Pattern]
        - [Bridge](../contents/#22-bridge) [Structural Design Pattern]

### **Reference**

- [Design Patterns Elements of Reusable Object-Oriented Software](http://www.javier8a.com/itc/bd1/articulo.pdf)