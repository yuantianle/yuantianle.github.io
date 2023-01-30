---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **STDIN and STDOUT**

>Keywords: Standard I/O

## **Situation**

Below is the typical question format:

???+question "Question type"

    ```cpp
    #include <cmath>
    #include <cstdio>
    #include <vector>
    #include <iostream>
    #include <algorithm>
    using namespace std;

    int main() {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
        return 0;
    }
    ```

## **STDIN**

The situation of STDIN can be separated into below types:
    
- [**STDIN and STDOUT**](#stdin-and-stdout)
  - [**Situation**](#situation)
  - [**STDIN**](#stdin)
    - [**Load element**](#load-element)
    - [**Load single line**](#load-single-line)
    - [**Load multiple line**](#load-multiple-line)
  - [**STDOUT**](#stdout)
    - [**References:**](#references)

### **Load element**

???+note "Load element"

    === "cin>>"

        ```cpp
        ......
        int main() {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
            char a;
            int b;
            string c;
            cin >> a >> b >> c;
            cout << a << " " << b << " " << c;
            //input: x 1 7g qt
            //output: x 1 7g
            return 0;
        }
        ```

        ???+danger "Warning! ++space++ , ++enter++ , and ++tab++"

            * `>>` will **filter**(auto jump) all the input unseen characters.
            * If input type is `string` or `char[]`, the character loading will **stop** when meet the unseen characters.
        

    === "cin.get"


        ```cpp
        ......
        int main() {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
            //WAY1: use "int cin.get()"
            int cha,chb,chc;
            cha = cin.get();
            chb = cin.get();
            chc = cin.get();
            cout << cha << " " << chb << " " << chc << endl;
            //input: a b c
            //output: 97(a) 32(space) 98(b)

            //WAY2: use "istream& cin.get(char& var)"
            char a[4] = {};
            cin.get(a, 4);

            //input: a b c
            //output: a_b_ ("_" means space)

            return 0;
        }
        ```

        ???+danger "Warning!"

            * Even though `get()` returns `int`, the return value represents `ASCll` value.
                - Successful read: return the of the `ASCll` value character. When an end-of-file character is encountered, return `EOF` or `-1`.
            * The `get()` function reads characters from the buffer WITHOUT ignoring the separator.

### **Load single line**

???+note "Load single line"

        ```cpp
        ......
        int main() {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
            char a[10] = {};
            char b[10] = {};
            string line;
            cin.getline(a,3);         //read line until: length (including 'enter') == 3
            cin.getline(b,5,'\n');    //indicate end symbol: '\n'
            getline(cin,line);        //read the whole line into string including space.
            cout << a << "," << b << "," << line; 

            //input:ak 
            //      ksks
            //      cmas;ckmaslc
            //output: ak,ksks,cmas;ckmaslc

            return 0;
        }
        ```

### **Load multiple line**

???+note "Load multiple line"

    === "WAY 1"
        
        ```cpp
        ......
        int main() {
            vector<int> a;
            int temp;

            cin >> temp;
            a.push_back(temp);
            while (cin.get() != '\n') 
            {
                cin >> temp;
                a.push_back(temp);
            }
            //input: 1 2 3
            //output: 1 2 3
            return 0;
        }
        ```
    === "WAY 2"
        
        ```cpp
        ......
        vector<int> a;
        string line, word;
        int main() {
            getline(cin, line);
            istringstream record(line);
            while (record >> word)
            {
                a.push_back(atoi(word.c_str()));
            }
        }
        ```

## **STDOUT**

### **References:**

- [Smart pointers (Modern C++)](https://learn.microsoft.com/en-us/cpp/cpp/smart-pointers-modern-cpp?view=msvc-170)