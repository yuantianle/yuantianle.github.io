---
comments: true
---

# **:simple-cplusplus: auto & decltype**

## **auto type**

`auto` type can help the compiler to derivate the type of a variable <u>from the right side of</u> `=` when it is **in the compiling stage**.

```cpp title="auto.cpp"
auto m_int = 10; // since 10 is int type, the type of `m_int` has been automatially derivated as `int`
```

## **decltype(exp) type**

`decltype(exp)` can be understood as: "declare type" from expression. `decltype` can derivate the type of the variable from the expression `exp`. It does not care about what is showing on the right side of `=`.

```cpp title="decltype.cpp"
int m_variable = 0;
decltype(m_variable) m_test1 = 1;  //`m_test1` has been derivated to `int`
decltype(10.8) m_test2 = 5.5;      //`m_test2` has been derivated to `double`
decltype(m_test2 + 100) m_test3;   //`m_test3` has been derivated to `double`
```

???+warning "Watch out!"

    - `auto` requires the initialization of the variable. `decltype` do not.

    - `decltype` can process any complex expression. But! the result of the `exp` should not be `void`.

## **decltype(exp) type \[advance]**

Before we go in advance, let's figure out `lvalue` and `rvalue`:

$$lvalue = rvalue$$

- `lvalue`: data that persists after the expression is executed, that is, **persistent data**. We can retrieve the data by referring to its address.
- `rvalue`: data that no longer exists at the end of the expression execution, that is, **temporary data**.

???+ note "<u>Three principles</u> for compiler processing the `decltype(exp)`:"

    1.  If `exp` is any of the cases below, the type of `decltype(exp)` is the same as `exp`.
        - an expression not surrounded by parentheses `()`;
        - an expression to access a **class member**;
        - a single variable.
    2.  If `exp` is any of the cases below, the type of `decltype(exp)` is the same as `exp`'s reference (i.e if `T exp`, then `T& decltype(exp)`).
        -  an lvalue;
        - an expression surrounded by parentheses `()`.
    3.  If `exp` is a **function call**, then the type of `decltype(exp)` is the same as the type of the value returned by the function.

???+example "Case 1"

    ```cpp title="case1.cpp"
    #include <string>
    using namespace std;

    class Student{
    public:
        static int m_ID;
        string m_name;
    };

    int Student::m_ID = 0;

    int  main(){
        Student Daming;
        int n_int = 0;
        const int &n_refint = n_int;
        
        decltype(n_int) test1 = n_int;             //`n_int` is of type `int`, and `test1` is derived as type `int`
        decltype(n_refint) test2 = test1;          //`n_refint` is of type `const int&`, and `test2` is derived as type `const int&`
        decltype(Student::m_ID) test3 = 0;         //`total` is a member variable of type `int` of class `Student`, and `test3` is derived from typing `int`
        decltype(Daming.m_name) test4 = "Daming";  //`total` is a string member variable of class `Student`, and `test4` is derived as a `string`
        return 0;
    }
    ```

???+example "Case 2"

    ```cpp title="case2.cpp"
    #include <string>
    using namespace std;

    int  main(){
        int& func_int_r(int, char);  //the type of return is: int&
        int&& func_int_rr(void);     //the type of return is: int&&
        int func_int(double);        //the type of return is: int
        const int& fun_cint_r(int, int, int);  //the type of return is: const int&
        const int&& func_cint_rr(void);        //the type of return is: const int&&

        int n = 100;
        decltype(func_int_r(100, 'A')) a = n;  //a's type is `int&`
        decltype(func_int_rr()) b = 0;         //b's type `int&&`
        decltype(func_int(10.5)) c = 0;        //c's type `int`
        decltype(fun_cint_r(1,2,3))  x = n;    //x's type const `int&`
        decltype(func_cint_rr()) y = 0;        //y's type const `int&&`   
    }
    ```

???+example "Case 3"

    ```cpp title="case3.cpp"
    using namespace std;

    class Base{
    public:
        int m_x;
    };

    int main(){
        const Base obj;

        decltype(obj.m_x) a = 0;    //`obj.m_x` is an access expression for a class member, which follows principle 1. The type of `a` is `int`
        decltype((obj.m_x)) b = a;  //`obj.m_x` includes `()`, which follows principle 3. The type of `b` is `int&`

        int n = 0, m = 0;
        decltype(n + m) c = 0;      //`n+m` get a rvalue, which follows principle 1, thus type is `int`
        decltype(n = n + m) d = c;  //`n=n+m` get a lvalue, , which follows principle 3, thus type is `int&`
        return 0;
    }
    ```

### **References:**

- [Tencent Cloud](https://cloud.tencent.com/developer/article/1745592)

- [C++11](http://c.biancheng.net/view/7151.html)