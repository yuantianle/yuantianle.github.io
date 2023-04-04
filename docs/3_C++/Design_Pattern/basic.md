---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# ** :simple-matternet: Software desgin basic **

> Before we start to learn the design pattern, we need to know what is a **good software design**.

## **Good SW desgin?**
???+ question "How to define a good SW desgin?"

    A good software design should show **code reuse** and **extensibility**.

## **Basic design principles**

Here we show the **basic principles** to make SW <u>flexible</u>, <u>robust</u>, and <u>understandable</u>.
    
### **Encapsulate varies**

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

### **Program to an interface**

!!! note ""

    {==Program to an **interface**, not an **implementation**==}. It means making the dependency more <u>flexible (decoupled)</u>
    
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
                    + Eat(Bone b)
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

### **Favor Composition over Inheritance**

## **SOLID principles**
    
Besides the basic design principles we talked above, [`SOLID principles`](../../2_Software_Engineering/Others/engineer.md) makes software design <u>easier to understand</u>, <u>more flexible</u>, and <u>more maintainable</u>. Here we focus more on using C++ examples for better understanding.

### **Single Responsibility Principle**
### **Open/Closed Principle**
### **Liskov Substitution Principle**
### **Interface Segregation Principle**
### **Dependency Inversion Principle**

### **Introduction**

### **Reference**

- [DESIGN PATTERNS](https://refactoring.guru/design-patterns)