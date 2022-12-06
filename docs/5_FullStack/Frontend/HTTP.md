---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:octicons-browser-16: HTTP**

## **HTTP**

???+question "HTTP?"

    `HTTP`, Hypertext Transfer Protocol, is a protocol. `HTTP` uses **plain text** for all information **communication** between client and server, which is {==unsafe==} as it uses the internet. 

## **Anatomy of an HTTP request**

Level| Details | Response & Request
:-|:-|:-
URL| **Structure:** {==CRUD method==} + {==HEAD (optional)==} + {==Path==} + {==HTTP version==}</br> **Details:** see in [URL](uri.md).| Password & Key
HTTP Header| - Request headers </br> - General headers </br>- Representation headers| JWT ([Base64](https://www.base64decode.org/) encoded [RFC 7519](https://www.rfc-editor.org/rfc/rfc7519))
HTTP body (optional)| - Single-resource body </br> - Multiple-resource bodys |JSON ([RFCs 8259](https://www.rfc-editor.org/rfc/rfc8259))
