---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **Unordered Set**

> This data structure is used for the case we DON'T need the key-value pairs like in the [unordered_map](./unodered_map.md). It is a easy way to implement presence/absence

???+note "Declaration"
    
    ``` c++ title="declaration.c++"
    std::unordered_set<int> Set;
    ```

## **Directory**

- Insert elements: [insert()](#insert).
- Count element presence time: [count()](#count).
- Check element existence: [find](#find).


### **insert()**

!!! note ""

    ```c++ title="insert().c++"
    Set.insert(1);
    ```

    ???example "Example"

        <div data-pym-src='https://www.jdoodle.com/plugin' data-language="cpp17"
          data-version-index="1">
        \#include <iostream\>
        \#include <unordered_set\>
        using namespace std;
        \ 
        //declare an unordered set globally
        unordered_set<int> Set = {2, -1};
        \ 
        int main()
        {
            //insert the element
            Set.insert(1);
            \ 
            for (auto itr = Set.begin(); itr != Set.end(); itr++)
            {
                cout << (*itr) << endl;
            }
        }
        </div>   

### **count()**

!!! note ""

    ```c++ title="count().c++"
    Set.count(2);
    ```

    ???question "Details"

        Used to check if an element is present in the container or not. The function returns `1` if the element is present in the container; otherwise, it returns `0`.

        Equals to `return (Set.find(<element>) != Set.end());`. Same performance. See [find()](#find).

    ???example "Example"

        <div data-pym-src='https://www.jdoodle.com/plugin' data-language="cpp17"
          data-version-index="1">
        \#include <iostream\>
        \#include <unordered_set\>
        using namespace std;
        \ 
        //declare an unordered set globally
        unordered_set<int> Set = {2, -1, 1, 2};
        \ 
        int main()
        {
            cout << "2 exsists times: " << Set.count(2) << endl;
            \ 
            cout << "All elements:" << endl;
            for (auto itr = Set.begin(); itr != Set.end(); itr++)
            {
                cout << (*itr) << " " << endl;
            }
        }
        </div>   

### **find()**

!!! note ""

    ```c++ title="find().c++"
    Set.find(-1);
    ```

    ???example "Example"

        <div data-pym-src='https://www.jdoodle.com/plugin' data-language="cpp17"
          data-version-index="1">
        \#include <iostream\>
        \#include <unordered_set\>
        using namespace std;
        \ 
        //declare an unordered set globally
        unordered_set<int> Set = {2, -1, 1, 2};
        \ 
        int main()
        {
            //Check result using find()
            cout << (Set.find(-1) != Set.end()) << endl;
            \ 
            //Check result using count()
            cout << Set.count(-1) << endl;
        }
        </div>   

### **References**


<script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>