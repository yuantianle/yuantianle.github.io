---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:simple-git: GitHub Semantics Versioning**

## **Demand analysis** 

When we work as a team, we need to **coordinate projects**, or we also need to **lower coordinate costs**. Thus, we need to set some rules for it. `Semantics `Versioning` is widely used in **GitHub version control**.

## **Semantics Versioning 2.0**

<center>${Major}.{Minor}.{Patch}$</center>

???+success "Explainations"

    === "Major"

        {==$1.0.0 \rightarrow 2.0.0$==}

        **For:** API changes or when code contains **breaking changes** of API.

        **Example:** 

          - Amy changed the function of the API. 

        ???+question "Breaking Changes"

            - **False**: add some features.
            - **True**: remove, rename sth.

    === "Minor"

        {==$1.0.0 \rightarrow 1.1.0$==}

        **For:** Change **`function signature`**, add **new features**, or add some **functionallity**. (no breaking change, no bug fix.)

        **Example:** 

          - Amy added new features to her function.
          - Amy organized the signature of her function.
          - Amy added some extra individual code to her function body.

    === "Patch"

        {==$1.0.0 \rightarrow 1.0.1$==}

        **For:** **Bug fix**. (Should be **cleared** when the first two increase.)

        **Example:**
            
          - Amy fixed a bug in her API function.
