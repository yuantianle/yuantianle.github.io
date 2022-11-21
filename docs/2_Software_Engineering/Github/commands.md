# **:simple-github: Git Basic Commands**

![picture1](./picutures/time.png){width="80%", : .center} 

## **Background knowledge**

It is essential to understand the **theory** of `Git` before we use the `Git` commands in the terminal. 

???+ question "How `Git` stores its data?"

    `Git` does NOT store data as a series of {--changesets--} or {--differences--}, but instead as a {++series of++} `snapshots`.

    When you run `git commit`, you are making a commitment. At this moment, `Git` stores a `commit object` to your `local repo` (let's say we are only focusing on the local host so far).

    $$
    \textbf{Commit object} = \textbf{Snapshot pointer} + \textbf{Metadata}
    $$

    - `Snapshot` is a <u>"slice"</u> of your local repo at some point in time. Snapshot is to a repository as screenshot is to a video.
    - `Metadata` contains the <u>author’s name</u> and <u>email address</u>, the <u>message</u> that you typed, and <u>pointers</u> to the commit or commits that directly came before this commit.


## **Basic Git commands**



### **References:**

- [Git--fast-version-control](https://git-scm.com/book/en/v2)
