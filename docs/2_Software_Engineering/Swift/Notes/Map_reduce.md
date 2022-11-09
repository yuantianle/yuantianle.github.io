---
comments: true
---

# **Map, Filter and Reduce**

## Grammar

```
map(function(type1 -> type1))
```

```
filter (function(type1 -> bool))
```

```
reduce(init_val(type3), function(type1, type 2-> type3))
```
## Way1: Function

### Example

![image](https://user-images.githubusercontent.com/61530469/200768266-b09b0ceb-8263-43e8-a37f-aa5f56af1f3b.png){width:50%, : .center}

[Steven Luscher on Twitter](https://twitter.com/steveluscher/status/741089564329054208)

### Code
```swift title="way1.swift"
import Foundation

func cook(food: String) -> String {
    var transformedFood = ""

    switch food {
        case "🌽": 
            transformedFood = "🍿" 
            print(1)
        case "🐮": 
            transformedFood = "🍔"
            print(2)
        case "🐔": 
            transformedFood = "🍳"
            print(3)
    default: transformedFood = food // remains uncooked
    }

    return transformedFood
}

func eat(food1: String, food2: String) -> String {
    var transformedFood = "💩"
    return transformedFood
}

func isVegetarian(dish: String) -> Bool {
    return dish=="🍳"
}

//Map
let meals = ["🌽", "🐮", "🐔"].map(cook)
//Filter
let filtered_meals = meals.filter(isVegetarian)
//Reduce
let result = filtered_meals.reduce("",eat)
//Print
print(meals)
print(filtered_meals)
print(result)
```

### Result

![image](https://user-images.githubusercontent.com/61530469/200770718-adaef9ec-9889-4598-9707-c2bcf7853e86.png){width:80%, : .center}

## Way2: Closure

### Example

Realize the assert shown below with closure:

```swift title="Q2.swift"
for _ in 0...5 {
    let foodNames = ["🍔": "hamburger", "🍟": "french fries", "🌽": "popcorn"]

    var outcome = foodNames.map({...}).filter({}).reduce(...,{...})
    outcome.removeFirst()

    assert(
        outcome == "Hamburger Popcorn" ||
        outcome == "Popcorn Hamburger" 
    )
}
```

### Code
```swift title="way2.swift"
import Foundation

for _ in 0...5 {
    let foodNames = ["🍔": "hamburger", "🍟": "french fries", "🌽": "popcorn"]

    //Map
    var mapped = foodNames.map({(key,value) -> String in return value.capitalized})
    //Filter
    var filterred = mapped.filter({(food:String) -> Bool in return !(food == "French Fries")})
    //Reduce
    var reduced = filterred.reduce("",{a, b in a +  " " + b})
    
    reduced.removeFirst()
    var outcome = reduced

    assert(
        outcome == "Hamburger Popcorn" ||
        outcome == "Popcorn Hamburger" 
    )
}
```

### Result
![image](https://user-images.githubusercontent.com/61530469/200774996-a7cf34c0-49db-4d9b-ae8b-8d0b2803d609.png){width:80%, : .center}

## Way3: Using the built-in operator

### Example

Realize the assert shown below with built-in operator:

```swift title="Q3.swift"
let outcome = [2, 3, 5, 8].map({...}).filter({...}).reduce(...,...)

assert(outcome == 108)
```

### Code
```swift title="way3.swift"
import Foundation

let outcome = [2, 3, 5, 8].map( {$0 + 1} ).filter( {$0 != 5} ).reduce(1, *)

assert(outcome == 108)
```

### Result
![image](https://user-images.githubusercontent.com/61530469/200776454-497db043-3f8c-447d-8f10-71d5a8453817.png){width:80%, : .center}
