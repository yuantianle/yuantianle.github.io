# **:simple-git: Git Basic Commands**

![picture1](./picutures/time.png){width="50%", : .center} 


## **Initialize Git repo**

Initialize local repository by using: `git init`

![picture 5](pictures/git_init2.png){width="50%", : .center} 

![picture 6](pictures/git_init1.png){width="50%", : .center}    

## **Check status**

Create a README.md file:

![picture 7](pictures/git_status1.png){width="50%", : .center}  

Check the status of the local repo by using: `git status` 

![picture 8](pictures/git_status2.png){width="50%", : .center}  

## **Add changes**

Add changes into staging area by using: `git add .` or `git add *`

![picture 9](pictures/git_add1.png){width="50%", : .center}   

Check the status again: 

![picture 10](pictures/git_add2.png){width="50%", : .center}   


## **Commit to the local repo**

Commit the new snapshot to the local repo:

![picture 11](pictures/git_commit.png){width="50%", : .center}  

Check the status again: 

![picture 12](pictures/git_commit2.png){width="50%", : .center}  

## **Rename branch name**

Rename the **main branch** named from `master` into `main` by using: `git branch -m master main`

![picture 13](pictures/git_rename1.png){width="50%", : .center}  

Check the status again: 

![picture 14](pictures/git_rename2.png){width="50%", : .center}  

## **Create a branch and switch**

Create a **new branch** by using: `git branch m_branch_1`

![picture 15](pictures/git_branch1.png){width="50%", : .center}  

Then switch to the **new branch**: `git checkout m_branch_1`

![picture 16](pictures/git_branch2.png){width="50%", : .center}  

Or you can do one step instead of the above to command lines: `git checkout -b m_branch_1`

Check the status again: 

![picture 17](pictures/git_branch3.png){width="50%", : .center}  

## **Merge changes into main**

Edit the README.md file by: `vim README.md`

![picture 18](pictures/git_merge1.png){width="50%", : .center} 

Commit the **new branch**: `git commit -a -m 'Added encourage sentence'`

![picture 19](pictures/git_merge2.png){width="50%", : .center}  

Switch back to the main branch and merge the **new branch** into the **main branch**: `git merge m_branch_1`

![picture 20](pictures/git_merge3.png){width="50%", : .center}  

## **Check the commit history**

Take a look at git log: `git log`

![picture 23](pictures/git_history1.png){width="50%", : .center}  

Use graph selection in git log: `git log --graph --oneline --decorate --all`

![picture 22](pictures/git_history2.png){width="50%", : .center}  

More details: `git log --graph --abbrev-commit --decorate --date=relative --all`

![picture 21](pictures/git_history.png){width="50%", : .center}  

In `Sourcetree`:

![picture 24](pictures/git_history_sourcetree.png){width="80%", : .center}  


## **Rebase branch**

We rebase **main branch** into **m_branch_2**: `git rebase m_branch_2`

![picture 25](pictures/git_rebase1.png){width="50%", : .center}   

Check the folder in different branches:

![picture 26](pictures/git_rebase2.png.png){width="50%", : .center}   

???+ Warning

    Even though we rebase <u>the **main branch** `onto` (or `on top of`) **m_branch_2**</u>, since we cannot delete the **main branch**, there is {==NO DIFFERENCE WITH==} rebasing <u>**m_branch_2** onto the **main branch**</u>:

![picture 27](pictures/git_rebase3.png){width="80%", : .center}   
