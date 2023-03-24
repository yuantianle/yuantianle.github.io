---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:simple-cplusplus: OOP concepts**

> This material is for listing different OOP concepts:

> - [**Inheritance**](#inheritance)
> - [**Polymorphism**](#polymorphism)
> - [**Encapsulation**](#encapsulation)
> - [**Interface**](#interface)
> - [**Abstract class**](#abstract-class)
> - [**Virtual function**](#virtual-function-method)
> - [**Overloading**](#overloading)
> - [**Overriding**](#overriding)
> - [**Compile & Run time**](#compile--run-time)
> - [**Static methods and variables**](#static-methods-and-variables)


### **Inheritance**

???+Note "`Inheritance`"

    A **mechanism** in OOP that allows `subclass(derived class)` to inherit properties and methods from a `parent class(base class)`. And it can add new properties and methods or override the old class's methods

    * **Usage:** `Subclasses` can inherit <u>public</u> and <u>protected</u> members from the `parent class`, but NOT <u>private</u> members.

    * **Advantages:** It is an important way of <u>code reuse</u>. (for avoiding duplicates, organizing code structure, and improving code readability and maintainability).

### **Polymorphism**

???+Note "`Polymorphism`"

    The **ability** of different objects to respond to the same message in different ways.

    * **Usage:** method [overloading](#overloading), method [overriding](#overriding), [interface](#virtual-function--interface) implementation, and more. 

    * **Advantages:** Improve code <u>flexibility and extensibility</u>, reduce code <u>repetition</u>, and better adhere to the <u>open-closed principle</u>.


### **Encapsulation**

???+Note "`Encapsulation`"

    A **mechanism** for combining <u>data</u> and <u>methods</u> together as a single entity (class) and controls access to these data and methods through a public [interface](#virtual-function--interface).

    * **Usage:** By encapsulating, the internal details of an object can be hidden, and only the interface exposed to the outside world can be used.

    * **Advantages:** Improve code <u>security and reliability</u>, reduce unnecessary <u>coupling</u>, and make code more <u>maintainable</u> and easier to <u>extend</u>.

### **Interface**

???+Note "`Interface`"

    An **abstract type** defines a <u>standard specification</u> for a <u>set of methods</u> WITHOUT providing an implementation.

    * **Usage:** Interfaces allow different classes to implement the same methods with specific implementation.

    * **Advantages:** Improve code <u>flexibility</u> and <u>extensibility (code decoupling)</u>.

    ```cpp
    /*an interface declaration*/
    class InterfaceClass{
        public:
            virtual void method_first() = 0 ; // declaring a pure virtual method by assigning 0
            virtual void method_second() = 0;
    };
    ```
    === "Interface class"

        Satisfy: 

          1. has all methods declared as pure virtual methods.
          2. has no variable declaration.

    === "Abstrac class"

        Satisfy: 

          3. must have at least one pure virtual method.
          4. can have implemented methods.
          5. can have variables declaration.


### **Abstract class**

???+Note "`Abstract class`"

    A **class** that CANNOT be <u>instantiated</u> and defines some methods without implementation.

    * **Usage:** Its main purpose is to allow derived classes to implement these methods, thus achieving [polymorphism](#polymorphism). 
  
      * Subclasses must <u>implement all</u> the abstract methods in the abstract class, otherwise, the subclass must also be an abstract class.
      * The abstract class <==> contains at least one abstract method ([pure virtual function](#virtual-function)).
    * **Advantages:** Provide <u>standard</u>. (Provide a template and standard for subclasses to ensure that subclasses implement the methods and properties defined in the abstract class.)

    ```cpp
    #include <string>
    #include <iostream>

    /*Declaring an abstract class*/
    class AbstractClass{
        public:
            AbstractClass(std::string msg): message(msg){}
            virtual void method_first() = 0; // a pure virtual method
            virtual void method_second(){   // implemented virtual method
                std::cout << message << std::endl;
            }

        private:
            std::string message;    
    }; 
    ```
### **Virtual function (method)**

???+Note "`Virtual function (method)`"

    - `Abstract methods`: are **pure virtual methods**, which have no actual code in them, and (non-abstract) subclasses **HAVE TO override** the method.
    - `Virtual methods`: can have code, which is usually a default implementation of something, and any subclasses **CAN override** the method using the override modifier and provide a custom implementation to achieve [polymorphism](#polymorphism).

    ```cpp
    virtual void method_first() = 0; // a pure virtual method
    virtual void method_second(){   // implemented virtual method
        std::cout << message << std::endl;
    }
    ```

### **Overloading**

???+Note "`Overloading`"
        
    A **concept** specifies more than one definition for a <u>function name</u> or an <u>operator</u> in the same scope, which is called `function overloading` and `operator overloading` respectively. 

    * **Usage:** when a program calls a method with the same name, the <u>compiler</u> automatically matches and calls the corresponding method based on the differences in parameter types and numbers. 

    * **Advantages:** make the code more <u>concise and flexible</u>, reducing code <u>duplication and redundancy</u>.

    === "Function overloading"

        ```cpp title="function_overloading.cpp"
        #include <iostream>
        using namespace std;

        class printData {
           public:
              void print(int i) {
                cout << "Printing int: " << i << endl;
              }
              void print(double  f) {
                cout << "Printing float: " << f << endl;
              }
              void print(char* c) {
                cout << "Printing character: " << c << endl;
              }
        };

        int main(void) {
           printData pd;

           // Call print to print integer
           pd.print(5);

           // Call print to print float
           pd.print(500.263);

           // Call print to print character
           pd.print("Hello C++");

           return 0;
        }
        ```
    === "Operator overloading"

        ```cpp title="operator_overloading.cpp"
        #include <iostream>
        using namespace std;

        class Point {
            public:
                int x, y;

                Point operator+ (const Point& other) {
                    Point result;
                    result.x = x + other.x;
                    result.y = y + other.y;
                    return result;
                }
        };

        int main() {
            Point p1, p2, p3;

            p1.x = 5;
            p1.y = 10;

            p2.x = 3;
            p2.y = 2;

            // Add two Point objects using operator overloading
            p3 = p1 + p2;

            cout << "Result of point addition: (" << p3.x << ", " << p3.y << ")" << endl;

            return 0;
        }
        ```

### **Overriding**
### **Compile & Run time**

### **Static methods and variables**


#### **Reference**

- [OpenAI](https://chat.openai.com/chat)
- [Abstract class vs Interface in C++](https://manishs-kth.medium.com/abstract-class-vs-interface-in-c-d1702d2c193e)
- [C++ Overloading (Operator and Function)](https://www.tutorialspoint.com/cplusplus/cpp_overloading.htm)