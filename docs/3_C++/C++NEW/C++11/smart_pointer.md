---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:simple-cplusplus: Smart Pointer**

## **Smart pointer**

`Smart pointer` were first popularized during the first half of the 1990s. However, it has been refined by `C++ 11`. Let's learn this modern C++ feature!

## **Benifits**

???+success "Advantages"

    1. <u>Prevent memory leak</u>. It provides **Garbage Collection Mechanisms** when we forget to release the mm space.
    2. <u>Smart pointer is a class</u>. When the <u>class object</u> is out of scope, the class automatically calls the destructor, which automatically frees the resource.

## **Theory**

???note "How? (click to unfold)"
    A `smart pointer` is a **class template** that you declare on the **stack**, and initialize by using a **raw pointer** that points to its heap-allocated object. 
    
    After the `smart pointer` is initialized, it owns the **raw pointer**. This means that the smart pointer is responsible for **deleting** the memory that the raw pointer specifies.

    The `smart pointer` destructor <u>**contains** the call to delete, and because the smart pointer is declared on the stack, its destructor is invoked when the smart pointer goes out of scope, even if an exception is thrown somewhere further up the stack.</u>


## **Compare with pointer**

???+question "Comparison"

    ```cpp title="comparison.cpp"
    void UseRawPointer()
    {
        // Using a raw pointer -- not recommended.
        Song* pSong = new Song(L"Nothing on You", L"Bruno Mars"); 

        // Use pSong...

        // Don't forget to delete!
        delete pSong;   
    }

    void UseSmartPointer()
    {
        // Declare a smart pointer on stack and pass it the raw pointer.
        unique_ptr<Song> song2(new Song(L"Nothing on You", L"Bruno Mars"));

        // Use song2...
        wstring s = song2->duration_;
        //...

    } // song2 is deleted automatically here.
    ```

## **Details**

???+question "Library?"

    Use `#include <memory>`.

???+question "API?"

    ```cpp title="apis.cpp"
    // T is the template parameter
    T* get();                      // Get the auto_ptr's native pointer encapsulated inside.
    T& operator*();                // "operator x ()" overloads x
    T* operator->();               
    T& operator=(const T& val);    
    T* release();                  // Set auto_ptr's inside pointer to nullptr,
                                   //which will not effect resource it pointed

    void reset (T* ptr = nullptr); // Directly free the memory pointed to by the 
                                   //encapsulated internal pointer, default set nullptr
    ```

???+question "Types?"

    C++11 has already discarded original C++98 smart pointer `auto_ptr` introducing authority.

    There are three types of `smart pointers`:

      1. [unique_ptr](#unique_ptr) (substitude `auto_ptr`)
      2. [shared_ptr](#shared_ptr) (strong ref)
      3. [weak_ptr](#weak_ptr) (weak ref)


### **unique_ptr**

???+note "unique_ptr"

    `unique_ptr` stores **one pointer only**. Only one smart pointer can point to the object at a time.
    
    - To change the object resource control, we remove the current `unique_ptr` `P1` and assign a new `unique_ptr` `P2` so the pointer now points to `P2`.

    ![picture 1](../pictures/unique_ptr.png){width="60%", : .center} 


    ??? success "Demo code"

        ```cpp title="unique_ptr.cpp" hl_lines="23 27"
        #include <iostream>
        #include <cassert>
        using namespace std;
        #include <memory>

        class Rectangle {
            int length;
            int breadth;

        public:
            Rectangle(int l, int b){
                length = l;
                breadth = b;
            }

            int area(){
                return length * breadth;
            }
        };

        int main(){
        
            unique_ptr<Rectangle> P1(new Rectangle(10, 5));
            assert(P1->area()==50); // This'll print 50

            // unique_ptr<Rectangle> P2(P1); -- Illegal
            unique_ptr<Rectangle> P2;
            // P2 = P1 -- Illegal
            P2 = move(P1);
            assert(P2->area()==50);// This'll print 50

            // This'll give an error,
            //assert(P1->area()==50);
            return 0;
        }
        ```

### **shared_ptr**
???+note "shared_ptr"

    By using `shared_ptr`, more than one pointer can point to this one object at a time. 
    
    - We can use the member function `use_count()` of the `shared_ptr` object to check how many "referencers" (pointer objects) are referring to the same object resource.

        - 
        ```cpp title="use_count.cpp" hl_lines="10 11 12"
        #include <iostream>
        #include <cassert>
        #include <memory>

        int main() {
            std::shared_ptr<int> sp1 = std::make_shared<int>(42);
            std::shared_ptr<int> sp2 = sp1;
            std::shared_ptr<int> sp3 = sp1;

            assert(sp1.use_count() == 3);
            assert(sp2.use_count() == 3);
            assert(sp3.use_count() == 3);
            return 0;
        }
        ```
        
    - `shared_ptr` can call function `release()` to give up ownership of the resource. The object resource counter will be minus one.
    
    - The referred object resources will be **destroyed** when the last reference has been deleted (i.e. `Ptr.use_count() == 0`).

    ![picture 2](../pictures/shared_ptr.png){width="60%", : .center} 

    ??? success "Demo code"

        ```cpp title="shared_ptr.cpp" hl_lines="26 30"
        #include <iostream>
        #include <cassert>
        using namespace std;
        #include <memory>

        class Rectangle {
            int length;
            int breadth;

        public:
            Rectangle(int l, int b)
            {
                length = l;
                breadth = b;
            }

            int area()
            {
                return length * breadth;
            }
        };

        int main()
        {
        
            shared_ptr<Rectangle> P1(new Rectangle(10, 5));
            // This'll print 50
            assert(P1->area()==50);

            shared_ptr<Rectangle> P2;
            P2 = P1;

            // This'll print 50
            assert(P2->area()==50);

            // This'll now not give an error,
            assert(P1->area()==50);

            // This'll also print 50 now
            // This'll print 2 as Reference Counter is 2
            assert(P1.use_count()==2);
            return 0;
        }
        ```

### **weak_ptr**
???+note "weak_ptr"

    `weak_ptr` does not control the life cycle of an object.
    
    - It points to an object managed by [`shared_ptr`](#shared_ptr).
    - It **NOT** maintains a Reference Counter (`use_count()`). 
    - `weak_ptr` do not stronghold on the object. It is designed to assist `shared_ptr` to avoid **Deadlock** (when two `shared_ptr` refer each other):
        - BAD: `shared_ptr1.use_count()` :material-infinity:= `1` <--> `shared_ptr2.use_count()` :material-infinity:= `1`
        - GOOD: `shared_ptr.use_count()` :material-infinity:= `0` <--> `weak_ptr`

    ![picture 3](../pictures/weak_ptr.png){width="60%", : .center} 


### **References:**

- [Smart pointers (Modern C++)](https://learn.microsoft.com/en-us/cpp/cpp/smart-pointers-modern-cpp?view=msvc-170)

- [Smart Pointers in C++ and How to Use Them](https://www.geeksforgeeks.org/smart-pointers-cpp/)