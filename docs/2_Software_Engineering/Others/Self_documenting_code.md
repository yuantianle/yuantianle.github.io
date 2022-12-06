---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **😎 Self-documenting Code** 

## **About the topic**

Let's look at the [code case](https://stackoverflow.com/a/209089) shown below:

???+ question "Question"

    What does the code below for?
    ```c++ title="question.c++"
    float a, b, c; a=9.81; b=5; c= .5*a*(b^2);
    ```

Of course, it is hard to read and understand the code above. Let's see the `self-documenting` version of the last code block:

???+ success "Self-documenting version"

    ```c++ title="improved_1.c++"
    const float gravitationalForce = 9.81;
    float timeInSeconds = 5;
    float displacement = (1 / 2) * gravitationalForce * (timeInSeconds ^ 2);
    ```

Now, you can feel that `self-documenting` is a good code-writing habit for code understanding and development, even if we do not have comments. But! If your self-documenting is too complex, the variable name itself will cause code smell, which affects the readability of codes. So why not also add comments!

???+ success "Self-documenting + Comment version"

    ```c++ title="improved_2.c++"
    /* compute displacement with Newton's equation x = vₒt + ½at² */
    const float gravitationalForce = 9.81;
    float timeInSeconds = 5;
    float displacement = (1 / 2) * gravitationalForce * (timeInSeconds ^ 2);
    ```

But do not add comments on each line:

???+ failure "Bad Comment example"

    ```c++ title="bad.c++"
    const float a = 9.81; //gravitational force
    float b = 5; //time in seconds
    float c = (1/2)*a*(b^2) //multiply the time and gravity together to get displacement.
    ```

If your team requires `zero comments` coding style, transfer your code block with comments into `function closure`:

???+ success "Self-documenting + Function closure version"

    ```c++ title="improved_3.c++"
    float computeDisplacement(float timeInSeconds) {
    const float gravitationalForce = 9.81;
    float displacement = (1 / 2) * gravitationalForce * (timeInSeconds ^ 2);
    return displacement;
    }
    ```

## **Self-documenting in Swift**

Let's see how to do self-documenting in `Swift`:

???+ question "Question"

    ```swift title="question.swift"
    import Foundation

    func greet(_ s1: String, _ s2: String) -> String {
        return "Hello \(s1)!  Glad you could visit from \(s2)."
    }

    assert(greet("Will", "Portland") == "Hello Will!  Glad you could visit from Portland.")
    ```

???+ warning "Notice!"

    Swift restricts the `parameter name` before each argument input when we implement the function, i.e., you are not encouraged to run `greet("Bill", "Cupertino")` unless you use `_` (**Omitting Argument Labels**) before `parameter name` in the `function signature`. This semantic diminishes ambiguities when compiler compiling.

In [Swift](https://docs.swift.org/swift-book/LanguageGuide/Functions.html#//apple_ref/doc/uid/TP40014097-CH10-ID158), each function parameter has both a `parameter name` and an `argument label`. 

- The `parameter name` {==is used in the implementation of the function==} (in `function signature`). 

- The `argument label` {==is used when calling the function==}; each argument is written in the function call with its argument label before it (in `call site`). 

So we do self-documenting firstly based on refining `parameter name`.

???+ success "Self-documenting in Swift"

    ```swift title="improved_1.swift"
    import Foundation

    func greet(person: String, hometown: String) -> String {
        return "Hello \(person)!  Glad you could visit from \(hometown)."
    }

    assert(greet(person: "Will", hometown: "Portland") == "Hello Will!  Glad you could visit from Portland.")
    ```

You can observe that when implementing the function, `greet(person: "Will", hometown: "Portland")` still reads not like natural language. Let's add `argument label`!

???+ success "Self-documenting in Swift + Argument label"

    ```swift title="improved_1.swift"
    import Foundation

    func greet(person: String, from hometown: String) -> String {
        return "Hello \(person)!  Glad you could visit from \(hometown)."
    }

    assert(greet(person: "Will", from: "Portland") == "Hello Will!  Glad you could visit from Portland.")
    ```

>**Thanks, the person who always visits us from Portland! :orangutan:**

### **References:**

- [What is self-documenting code and can it replace well documented code? [closed]](https://stackoverflow.com/a/209089)

- [Function Argument Labels and Parameter Names](https://docs.swift.org/swift-book/LanguageGuide/Functions.html#//apple_ref/doc/uid/TP40014097-CH10-ID158)
  