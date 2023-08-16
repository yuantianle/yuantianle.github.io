---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# ** 🎮 Coding Questions **

> This material is for related questions:


## **2D plane question**

???+Note "In a 2D plane with multiple rectangles, how do you group them based on overlapping situations?"

    **Answer:**
    Treat this as a graph problem. Consider each rectangle as a node. If two rectangles overlap, establish an edge between them. The process is:
    
    1. Initialize an empty graph.
    2. Iterate through all rectangle pairs, checking for overlap. If they overlap, create an edge between the two rectangles in the graph.
    3. In the constructed graph, use Depth-First Search (DFS) or Breadth-First Search (BFS) to find all connected components.
    4. Each connected component represents a group of overlapping rectangles.
    5. To check if two rectangles overlap, given Rectangle A with top-left (Ax1, Ay1) and bottom-right (Ax2, Ay2), and Rectangle B with top-left (Bx1, By1) and bottom-right (Bx2, By2), the overlap condition is:
    
    $$ \left\{
    \begin{aligned}
    Ax1 < Bx2 \\
    Ax2 > Bx1 \\
    Ay1 < By2 \\
    Ay2 > By1$
    \end{aligned}
    \right.
    $$


## **Desgin a hero**

???+Note "Designing a champion (or hero) for "League of Legends" (LoL)"

    For the context of an interview, the example below demonstrates OOP principles like inheritance, polymorphism, encapsulation, and abstraction in C++:

    ```cpp hl_lines="3 28"
    #include <iostream>

    // Base Champion Class
    class Champion {
    private:
        int health;
        int mana;
        int attackDamage;
    public:
        Champion(int h, int m, int ad) : health(h), mana(m), attackDamage(ad) {}

        virtual void firstAbility() = 0;  // Pure virtual function
        virtual void secondAbility() = 0; // Pure virtual function

        void basicAttack(Champion& target) {
            std::cout << "Dealt " << attackDamage << " damage to the target." << std::endl;
            target.takeDamage(attackDamage);
        }

        void takeDamage(int damage) {
            health -= damage;
            if (health <= 0) {
                std::cout << "Champion has been defeated!" << std::endl;
            }
        }
    };

    // Templar Derived Class
    class Templar : public Champion {
    private:
        int shieldValue;

    public:
        Templar(int h, int m, int ad, int sv) : Champion(h, m, ad), shieldValue(sv) {}

        // Implementation of the virtual functions
        void firstAbility() override {
            std::cout << "Templar casts 'Shield Bash', dealing " << (shieldValue/2) << " damage." << std::endl;
        }

        void secondAbility() override {
            std::cout << "Templar casts 'Defensive Stance', absorbing next " << shieldValue << " damage." << std::endl;
            // Here, you would implement the logic to absorb damage up to shieldValue.
        }
    };

    int main() {
        Templar templar(1000, 500, 100, 300);
        Templar enemy(800, 400, 80, 250);

        templar.basicAttack(enemy);
        templar.firstAbility();
        templar.secondAbility();

        return 0;
    }
    ```

    In this simple design:

    - We define a base class Champion which encapsulates the common attributes and behaviors of all champions.
    - Templar is a derived class from Champion which implements the specific abilities of the Templar champion.
    - Pure virtual functions firstAbility and secondAbility ensure that each champion derived from the Champion class will have its own unique abilities.


## **Newton-Raphson method**

???+Note "Show up the Newton-Raphson method"

    Given a number a and wanting to find its square root, you can use the function:
    $f(x) = x^2 - a$

    The derivative is:
    $f'(x) = 2x$

    The Newton-Raphson update formula becomes:
    $x_{new} = x_{old} - f(x_{old}) / f'(x_{old})$

    Plugging in our function and its derivative, this is:
    $x_{new} = x_{old} - (x_{old}^2 - a) / (2 * x_{old})$

    This formula, when iterated, will give you an approximation to the square root of $a$.

    Here's the plain code without special delimiters:

    ```cpp
    #include <iostream>
    #include <cmath>

    double sqrt_newton(double a) {
        if (a < 0) return -1;  // Negative numbers don't have real square roots.
        if (a == 0) return 0;  // Avoid division by zero.

        double tol = 1e-6;    // Tolerance.
        double x = a;         // Initial guess.
        double prev;

        do {
            prev = x;
            x = 0.5 * (x + a / x);  // Newton's iteration.
        } while (fabs(x - prev) > tol);  // Continue until the change is within the tolerance.

        return x;
    }

    int main() {
        double a;
        std::cout << "Enter a number: ";
        std::cin >> a;

        std::cout << "Approximate square root: " << sqrt_newton(a) << std::endl;

        return 0;
    }

    ```

