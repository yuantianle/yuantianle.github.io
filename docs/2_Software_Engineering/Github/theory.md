# **:simple-git: Git Theory**

> When you are first using Git, you must feel confused about the questions shown below

>???+Question
    - How does Git help us do version control?
    - What is `commit` essentially?
    - What is `branch` essentially?
    - What is `diff` essentially?
    - Does `committing` equal `patching`?
    - What is `rebase` essentially?

> I hope this section can help you to understand Git behaviors deeply. :santa:


## **Git Objects**

Git Object


## **Git storage structure**

## **Git commit (snapshot)**  
A commit is a snapshot in time. Imagine the commit history you can see when using `git log` or any app visualization, such as `Sourcetree` as shown below:



`Snapshot` is a <u>"slice"</u> of your local repo at some point in time. Snapshot is to a repository as a screenshot is to a video.

`Metadata` contains the <u>author’s name</u> and <u>email address</u>, the <u>message</u> that you typed, and <u>pointers</u> to the commit or commits that directly came before this commit.

## **Git branch**

## **Git diff**  

`Git` does NOT **store** data as a series of {--changesets--} or {--differences--}, but instead as a {++series of++} `snapshots`.

## **Git rebase**

### **References:**

- [Commits are snapshots, not diffs](https://github.blog/2020-12-17-commits-are-snapshots-not-diffs/)