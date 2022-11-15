---
comments: true
---

# **Inheritance**

## **Basic Inheritance**

???+ question "For?"

    Inherit `Attributes` and `Methods` from {++**Base class**++} (parent) to {++**Derived class**++} (child).

???+ question "Grammar?"

    Use the `:` symbol.

???+ example "Let's do it!"

    **Problem:** Let the `Car` class (child) inherits the **Attributes** and **Methods** from the `Vehicle` class (parent):
    
    ``` c++ title="inher_base.c++"
    #include <iostream>
    #include <string>
    #include <assert.h> 
    using namespace std;

    //Base class
    class Vehicle{
        public:
            Vehicle(){}
            ~Vehicle(){}
        public:
            string m_brand = "Ford";
        public:
            string Honk(){
                return "Tu, tu! \n";
            }
    };

    //Derived class
    class Car: public Vehicle{
        public:
            string m_model = "Tesla";
    };

    int main(){
        Car newCar;
        assert (newCar.Honk() == "Tu, tu! \n");
        assert (newCar.m_brand == "Ford"); //cout << newCar.brand   << endl;
        assert (newCar.m_model == "Tesla"); //cout << newCar.   model << endl;
    }
    ```

## **Multiple Inheritance**

???+ example "Let's do it!"

    **Problem:** Let the `Son` class (child) inherits the **Attributes** and **Methods** from both the `Mom` and `Dad` class (parents):
    
    ``` c++ title="inher_multi_.c++"
    #include <iostream>
    #include <string>
    #include <assert.h> 
    using namespace std;

    //Base class
    class Mom{
        public:
            int m_age = 32;
        public:
            string Speak(){
                return "Mom is me!";
            }
    };

    class Dad{
        public:
            int m_age = 44;
        public:
            string Say(){
                return "Dad is me!";
            }
    };

    //Derived class
    class Son: public Mom, public Dad{
        public:
            int m_age = 5;
        public:
            string Say(){
                return "I am son!";
            }
    };

    int main(){
        Son ason;
        assert (ason.Speak() == "Mom is me!");
        assert (ason.Say() == "I am son!"); 
        assert (ason.m_age == 5);
    }
    ```



>ref: [w3schools](https://www.w3schools.com/cpp/cpp_inheritance.asp).