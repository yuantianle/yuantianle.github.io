---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:octicons-browser-16: Auth**

## **Auth**

???+question "Auth?"

    `Auth` points to **Authentication** and **Authorization**. They come from [REST API](./../API/rest_api.md) communication. 

    - Without **Authentication** --> 401 (Do not know who you are).
    - Without **Authorization** --> 403 (Do not have permission to access resources).

## **Token**

To realize the two Auth principles. Including `Token` becomes essential.

???+question "Why `Token`?"

    Compared with **username & password**, tokens are **temporary**, stored in browser or device. When sessions complete or exceed the expiration time, not like username & password, they are automatically **destroyed**.

## **JWT.io**

???+note "`JWT.io` for `Token` generation"

    `JWT.io` is constructed by below components:

      - Header:
      - Payload:
      - Signature:

## **How to use**

???+question "How to apply `Token`?"

    We **inject** tokens in the [HTTP](./HTTP.md) header.

## **Two Token Auth**

???+question "Why need two `Tokens`?"

    ???+example "Credential attack!"

    ???+success "Implement theory"
