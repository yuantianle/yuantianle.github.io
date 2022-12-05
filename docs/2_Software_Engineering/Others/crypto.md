---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# ** 🦺 Cryptographic**

The **transmission** and **storage** of files need to be **encrypted**, otherwise the privacy of file content will be very easy to be disclosed. 

About **file transmission**, we have discussed in the section about [OAuth](../../5_FullStack/Frontend/Auth.md) 2.0](../../5_FullStack/Frontend/Auth.md). In this section, we are talking about the way to encrypt **stored files**.

## **Cryptographic hash function**

Yes, to store the file secretly, we can use `Cryptographic hash function`, which we have mentioned before in command line [sha1sum](../../2_Software_Engineering/Terminal/contents.md/#sha1sum).

`Cryptographic hash function` should have below properties:

  - **Avalanche effect:** **Small changes** to input should result in **big changes** to output, this property is called `Avalanche effect`.
  - **Deterministic:** The **same input** always produces the **same output**.
  - **Non-invertible:** (if you record the mapping table between plain text and hash value, it is another case.)
  - **Collection resistance:** The algorithm should be `1 --> mul`, or `1 --> 1`. Should not be `mul --> 1`.

The picture below shows the property of `Cryptographic hash function`:

![sha1sum](../../2_Software_Engineering/Terminal/pictures/sha1.png){width="80%", : .center}  

## **Hash Algorithms**

There are three famous **hash algorithms**:

  - **SHA1:** function which returns `160-bit (20-byte)` hash value. [`commit ID`](../Github/theory.md/#git-commit) is **forty hexadecimal** characters that specify a 160-bit SHA-1 hash.
  - **SHA2:** consists of six hash functions with digests (hash values) that are `224`, `256`, `384`, or `512` bits: `SHA-224`, `SHA-256`, `SHA-384`, `SHA-512`, `SHA-512/224`, `SHA-512/256`.
  - **SHA3:** Subset of the broader family of algorithms called [`Keccak`](https://en.wikipedia.org/wiki/SHA-3). This algorithm won the hash function competition called [NIST](https://www.nists.org/conference).

## **Hash sault**

As you saw that `Cryptographic hash function` has `Non-invertible` and `Deterministic` properties. If we use the same hash, we definitely know that we are using the same file. As a hacker, it is easy for you to build a hash cheating table!

`Salt` is **random data** that is used as **additional input** to a one-way function that hashes data, a password or passphrase.

Let's compare the `normal Hash` with `Hash added salt`.

???+example "**Hash added salt:**"

    Username|	Salt value|	String to be hashed	|Hashed value = SHA256 (Password + Salt value)
    :-:|:-:|:-:|:-:
    user1	|D;%yL9TS:5PalS/d	|password123D;%yL9TS:5PalS/d	|   9C9B913EB1B6254F4737CE947EFD16F16E916F9D6EE5C1102A2002E48D4C88BD
    user2	|)<,-<U(jLezy4j>*	|password123)<,-<U(jLezy4j>*	|   6058B4EB46BD6487298B59440EC8E70EAE482239FF2B4E7CA69950DFBD5532F2

???+example "**normal Hash:**"
  
    Username|	String to be hashed	|Hashed value = SHA256
    :-:|:-:|:-:
    user1	|password123	|57DB1253B68B6802B59A969F750FA32B60CB5CC8A3CB19B87DAC28F541DC4E2A
    user2	|password123	|57DB1253B68B6802B59A969F750FA32B60CB5CC8A3CB19B87DAC28F541DC4E2A

It is obvious that; output with `Hash added salt` algorithm prevents the increase the `Non-invertible` property and diminishes `Deterministic` property.

### **References:**

- [SHA-1 wiki](https://en.wikipedia.org/wiki/SHA-1)

- [SHA-2 wiki](https://en.wikipedia.org/wiki/SHA-2)

- [SHA-3 wiki](https://en.wikipedia.org/wiki/SHA-3)