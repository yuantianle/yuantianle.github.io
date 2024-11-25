---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:simple-matternet: Software desgin principles**

> Before we start to learn the design pattern, we need to know what is a **good software design**.

- [**Good SW desgin?**](#good-sw-desgin)
- [**Basic design principles**](#basic-design-principles)
    - [**1.1 Encapsulate varies**](#11-encapsulate-varies)
    - [**1.2 Program to an interface**](#12-program-to-an-interface)
    - [**1.3 Favor Composition over Inheritance**](#13-favor-composition-over-inheritance)
- [**SOLID principles**](#solid-principles)
    - [**2.1 Single Responsibility Principle**](#21-single-responsibility-principle)
    - [**2.2 Open/Closed Principle**](#22-openclosed-principle)
    - [**2.3 Liskov Substitution Principle**](#23-liskov-substitution-principle)
    - [**2.4 Interface Segregation Principle**](#24-interface-segregation-principle)
    - [**2.5 Dependency Inversion Principle**](#25-dependency-inversion-principle)
- [**Programming techniques**](#programming-techniques)


## **Good SW desgin?**
???+ question "How to define a good SW desgin?"

    A good software design should show **code reuse** and **extensibility**.

## **Basic design principles**

Here we show the **`basic principles`** to make SW <u>flexible</u>, <u>robust</u>, and <u>understandable</u>.
    
### **1.1 Encapsulate varies**

!!! note ""

    There are two types of encapsulation: `Method encapsulation` and `Class encapsulation`.

    ???+success "Method encapsulation"

        When some **operation** in a <u>method</u> needs to be used or edited frequently, we choose to <u>encapsulate the operations into **submethods**</u> to increase the readability and flexibility.

        See the {==highlight lines==} as an example. After the `method encapsulation`, the frequent-changed tax algorithms become a manageable unit.
        === "Before"

            ```cpp title="method.cpp" hl_lines="10 11 12 13"
            //Calculate total money need to pay
            float getTotal(Order order){ 
                int sum = 0, total = 0;

                //1. Calculate sum of all books' price
                for (auto item: order.m_items) sum += item.price * item.quantity; 
                
                //2. Calculate consumption tax
                if (order.m_country == "CN") 
                    total += total * 0.05;
                else
                    total += total * 0.07;

                return total;
            }
            ```
        === "After"

            ```cpp title="method_encap.cpp" hl_lines="1 2 3 4 5 6 16"
            void addTax(Order & order, float & total){
                if (order.m_country == "CN") 
                    total += total * 0.05;
                else
                    total += total * 0.07;
            }
            //Calculate total money need to pay
            float getTotal(Order order){
                int sum = 0, total = 0;

                //1. Calculate sum of all books' price
                for (auto item: order.m_items) sum += item.price * item.quantity;

                //2. Calculate consumption tax
                addTax(order, total);

                return total;
            }
            ```
    ???+success "Class encapsulation"

        If the **operation** in a <u>function</u> contains too many assistant variables and methods, we <u>abstract it into a **new class**</u> to increase the readability and logic.

        === "Before"

            ``` mermaid
            classDiagram
                class Order{
                    - m_items : item
                    - m_country : string
                    - m_other_info1
                    - m_other_info2
                    - ...
                    - getOrderTotal()
                    - addTax(m_country, m_other_info1, m_other_info2, ...)
                }
            ```
        === "After"
            
            ``` mermaid
            classDiagram
                direction LR
                Order ..> TaxCalculator : Depends on
                note for Order "for (auto item: m_items) {\n.   total = item.price*item.quantity;\n.   total += total * addTax(m_country, m_other_info1, m_other_info2, ...);\n}"
                class Order{
                    - m_items : item
                    - m_country : string
                    - m_other_info1
                    - m_other_info2
                    - ...
                    - getOrderTotal()
                }
                class TaxCalculator{
                    + addTax(country, info1, info2, ...)
                    - getCountryTax(country)
                    - getInfo1Tax(info1)
                    - getInfo2Tax(info2)
                }
            ```

### **1.2 Program to an interface**

!!! note ""

    *Program to an [**interface**](../../C%2B%2BOLD/concepts/#interface), not an ****implementation***. It means making the dependency more <u>flexible (decoupled)</u>

    - <u>Figure out the method</u>, which demands the dependent class.
    - Using a new `Interface` or `Abstract class` to <u>abstract the method</u>.
    - Let the <u>dependent class implement the abstraction</u>.
    - Dependency injection (now the <u>class in demand depends on the abstraction</u>).

    ???+success "Example"

        Dog loves eating bones. Now let's make the code <u>more extensible</u> (although it temporally looks more complicated):

        === "Before"

            ``` mermaid
            classDiagram
                direction LR
                Dog ..> Bone : Depends on
                note for Dog "this.m_energy += b.getNutrition();"
                class Dog{
                    - m_energy : float
                    + Eat(Bone b)
                }
                class Bone{
                    - ...
                    + getNutrition()
                    + getFlavor()
                    + getSize()
                }
            ```
        === "After"
            
            ``` mermaid
            classDiagram
                direction LR
                Dog ..> Food : Depends on
                Bone ..|> Food : Realize
                note for Dog "this.m_energy += b.getNutrition();"
                class Dog{
                    - m_energy : float
                    + Eat(Food b)
                }
                class Food{
                    <<interface>>
                    + getNutrition()
                }
                class Bone{
                    - ...
                    + getNutrition()
                    + getFlavor()
                    + getSize()
                }
            ```

### **1.3 Favor Composition over Inheritance**
!!! note ""

    To put `Reuse Mechanism` to work, we normally do NOT do `inheritance`, which will cause some {==problems==}:

    - **The subclass <u>can't abandon any interfaces</u> of the superclass**. All the abstract methods (pure virtual functions) in the superclass have to be implemented in the subclass, even though some of them are useless.
  
    - **When overriding, should check <u>compatibility</u> between the new behavior and the base one.** In case some code needs to use the subclass object to pass in superclass as the parameter.
    
    - **Inheritance <u>breaks superclasses' encapsulation</u>**. Subclasses have `protect` authority to visit their superclass. Vise, parents can also visit children.

    - **Subclasses are <u>tightly coupled</u> to superclasses**. Editing superclasses will destroy the functions of subclasses.
    
    - **Reusing code through inheritance can lead to parallel inheritance hierarchies.** The combination of classes will explode.

    Let's use `Composition`. The technique we are using is called [`Delegation`](./prog_tech/#delegation)

    ???+success "`Inheritance` --> `Composition`!"

        Check the picture in [UML class diagram](./UML.md) again:

        ![picture 3](pictures/UML_relationship.png){width="60%", : .center}  

        With the same depth, we can change from using <u>Inheritance</u> to `Composition` or looser `Aggregation`.

        **E.g.** Let's take vehicles as an example:

        === "Inheritance"

            You can see lots of repeat codes since <u>subclass **cannot** inherit two classes in the same type for ambiguity</u> ([diamond problem](https://www.makeuseof.com/what-is-diamond-problem-in-cpp/)).

            ``` mermaid
            classDiagram
                direction BT
                Sedan --|> vehicles
                SUV --|> vehicles
                `Electronic Sedan` --|> Sedan
                `Fuel Sedan` --|> Sedan
                `Autopilot Electronic Sedan` --|> `Electronic Sedan`
                `Manual Electronic Sedan` --|> `Electronic Sedan`
                `Manual Fuel Sedan` --|> `Fuel Sedan`
                `Electronic SUV` --|> SUV
                `Fuel SUV` --|> SUV
                `Autopilot Electronic SUV` --|> `Electronic SUV`
                `Autopilot Fuel SUV` --|> `Fuel SUV`
                `Manual Fuel SUV` --|> `Fuel SUV`
            ```

        === "Composition & Aggregation"

            You can solve this problem with composition. Instead of car objects implementing a behavior on their own, they can **delegate** it to other objects.

            ``` mermaid
            classDiagram 
                direction BT
                Engine *-- vehicles
                Driver o-- vehicles
                `Fuel Engine` --|> Engine
                `Electronic Engine` --|> Engine
                Robot --|> Driver
                Human --|> Driver

                class vehicles{
                    - engine
                    - tire
                    + deliver(src,dst,cargo) 
                }
                class Engine{
                    <<interface>>
                    + move()
                }
                class Driver{
                    <<interface>>
                    + navigate()
                }
            ```


## **SOLID principles**
    
Besides the `basic design principles` we talked above, [`SOLID principles`](../../2_Software_Engineering/Others/engineer.md) makes software design <u>easier to understand</u>, <u>more flexible</u>, and <u>more maintainable</u>. Here we focus more on using C++ examples for better understanding.

### **2.1 Single Responsibility Principle**

!!! note ""

    One class should be responsible for behaviors as simple as possible.

    === "Before"

        ``` mermaid
        classDiagram 
            direction TB
            class Student{
                - ID : int
                + getID()
                + printTranscript()
            }
        ```
    === "After"

        ``` mermaid
        classDiagram 
            direction LR
            Transcript ..> Student
            class Transcript{
                - ...
                + print(studentID : int)
            }
            class Student{
                - ID : int
                + getID()
            }
        ```

### **2.2 Open/Closed Principle**

!!! note ""

    For any extension, the class should be "open-minded"; For any edition, the class should be "enclosed".

    - **"Open-minded"** (developing status): add new methods and attributes, and rewrite superclass.
    - **"Enclosed"** (releasing status): interfaces have been defined, and behaviors will not be edited anymore.
    - ***Note**: when the class itself has some bugs, directly edit it instead of create new subclasses.

    === "Before"

        There is a finished `Order` class.
        ``` mermaid
        classDiagram 
            direction LR
            note for Order "int getShippingCost(){\n . if(m_ship_method == 'air') return 80;\n . else return 20;\n}"
            class Order{
                - m_items
                - m_ship_method
                + getTotalCost()
                + getShippingCost()
                + setShippingType(string)
                + getShippingType()
            }
        ```
    === "After"

        To add a new shipping method, you have to edit the original class. We can use the **interface** to extend the uneditable `Order` class.

        ``` mermaid
        classDiagram 
            direction LR
            note for Order "int getShippingCost(){\n . return Shipping.getCost(this);\n}"
            Order --o Shipping
            Ground ..|> Shipping
            Air ..|> Shipping
            class Order{
                - m_items
                - m_ship_method: Shipping
                + getTotalCost()
                + getShippingCost()
                + setShippingType(m_ship_method)
                + getShippingType()
            }
            class Shipping{
                <<Interface>>
                + getCost(order)
            }
            class Ground{
                + getCost(order)
            }
            class Air{
                + getCost(order)
            }
        ```

### **2.3 Liskov Substitution Principle**
### **2.4 Interface Segregation Principle**
### **2.5 Dependency Inversion Principle**


### **KISS Principles**
### **DRY Principles**
### **YAGNI Principles**


#### **Reference**

- [DESIGN PATTERNS](https://refactoring.guru/design-patterns)