---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:simple-cplusplus: Inheritance**

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

## **Inheritance Access**

???+ question "What is `access specifiers` for methods?"

    Access specifiers define how the members (**attributes** and **methods**) of a class can be accessed.

    There are three {++access specifiers++}: `public`, `private`, `protected`.

    - `public`: members are accessible from outside the class.

    - `private`: members cannot be accessed (or viewed) from outside the class (but is accessable with in the class).
  
    - `protected`: members cannot be accessed from outside the class. However, they can be accessed in inherited classes.

???+ example "Let's do it!"

    **Problem:** Let the `Programmer` class (child) inherits the **Attributes** and **Methods** from both the `Employee` class (parents) in a safe way:

    ``` c++ title="inher_access.c++"
    #include <iostream>
    #include <string>
    #include <assert.h> 
    using namespace std;

    //Base class
    class Employee{
        protected:
            int m_salary = 32;
    };

    //Derived class
    class Programmer: public Employee{
        public:
            int m_bonus = 44;
        public:
            void setSalary(int s){
                m_salary = s;
            }
            int getSalary(){
                return m_salary;
            }
    };

    int main(){
        Programmer Mark;
        Mark.setSalary(50000);
        assert (Mark.getSalary() == 50000);

        Mark.m_salary = 90000;     //error: ‘int Employee::m_salary’ is protected within this context
    }
    ```

## **`Public`, `Private`, and `Protected` Inheritances**

???+ question "What is `access specifiers` for inheritances?"

    - `public inheritances`: Basic class's `public` and `protected` members {==remain the original status==} in the derived class.

    - `private inheritances`: Basic class's `public` and `protected` members {==become private==} in the derived class.
  
    - `protected inheritances`: Basic class's `public` and `protected` members {==become protected==} in the derived class.

    * Note: `private` members of the base class are inaccessible to the derived class.

???+ example "Let's do it!"

    **Problem:** illustrate all the inheritances method:

    ``` c++ title="inher_allway.c++"
    class Base {
      public:
        int x;
      protected:
        int y;
      private:
        int z;
    };
    
    class PublicDerived: public Base {
      // x is public
      // y is protected
      // z is not accessible from PublicDerived
    };
    
    class ProtectedDerived: protected Base {
      // x is protected
      // y is protected
      // z is not accessible from ProtectedDerived
    };
    
    class PrivateDerived: private Base {
      // x is private
      // y is private
      // z is not accessible from PrivateDerived
    };
    ```
???+ example "Let's do it!"

    **Problem 1:** C++ `public` Inheritance:

    ``` c++ title="inher_pub_inher.c++"   
    // C++ program to demonstrate the working of public inheritance

    #include <iostream>
    using namespace std;

    class Base {
      private:
        int pvt = 1;

      protected:
        int prot = 2;

      public:
        int pub = 3;

        // function to access private member
        int getPVT() {
          return pvt;
        }
    };

    class PublicDerived : public Base {
      public:
        // function to access protected member from Base
        int getProt() {
          return prot;
        }
    };

    int main() {
      PublicDerived object1;
      cout << "Private = " << object1.getPVT() << endl;
      cout << "Protected = " << object1.getProt() << endl;
      cout << "Public = " << object1.pub << endl;
      return 0;
    }
    ``` 
    ``` java title="output"
    Private = 1
    Protected = 2
    Public = 3
    ```
???+ example "Let's do it!"

    **Problem 2:** C++ `protected` Inheritance:

    ``` c++ title="inher_pro_inher.c++"   
    // C++ program to demonstrate the working of protected inheritance

    #include <iostream>
    using namespace std;

    class Base {
      private:
        int pvt = 1;

      protected:
        int prot = 2;

       public:
        int pub = 3;

        // function to access private member
        int getPVT() {
          return pvt;
        }
    };

    class ProtectedDerived : protected Base {
      public:
        // function to access protected member from Base
        int getProt() {
          return prot;
        }

        // function to access public member from Base
        int getPub() {
          return pub;
        }
    };

    int main() {
      ProtectedDerived object1;
      cout << "Private cannot be accessed." << endl;
      cout << "Protected = " << object1.getProt() << endl;
      cout << "Public = " << object1.getPub() << endl;
      return 0;
    }
    ``` 
    ``` java title="output"
    Private cannot be accessed.
    Protected = 2
    Public = 3
    ```

???+ example "Let's do it!"

    **Problem 3:** C++ `private` Inheritance:

    ``` c++ title="inher_pri_inher.c++"   
    // C++ program to demonstrate the working of private inheritance

    #include <iostream>
    using namespace std;

    class Base {
      private:
        int pvt = 1;

      protected:
        int prot = 2;

      public:
        int pub = 3;

        // function to access private member
        int getPVT() {
          return pvt;
        }
    };

    class PrivateDerived : private Base {
      public:
        // function to access protected member from Base
        int getProt() {
          return prot;
        }

        // function to access private member
        int getPub() {
          return pub;
        }
    };

    int main() {
      PrivateDerived object1;
      cout << "Private cannot be accessed." << endl;
      cout << "Protected = " << object1.getProt() << endl;
      cout << "Public = " << object1.getPub() << endl;
      return 0;
    }
    ``` 
    ``` java title="output"
    Private cannot be accessed.
    Protected = 2
    Public = 3
    ```

### **References:**

- [w3schools: C++ Inheritance](https://www.w3schools.com/cpp/cpp_inheritance.asp)
  
- [Programiz: C++ Public, Protected and Private Inheritance](https://www.programiz.com/cpp-programming/public-protected-private-inheritance#:~:text=public%2C%20protected%20and%20private%20inheritance%20in%20C%2B%2B&text=protected%20inheritance%20makes%20the%20public,private%20in%20the%20derived%20class.)