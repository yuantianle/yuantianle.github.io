---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **:octicons-terminal-16: Bash Commands**

> Use this sheet to test yourself! Click the box for unfolding. :100:

## **ls**

???note "`ls`"

    Check the components in the current directory.

    ![picture 1](pictures/ls1.png){width="80%", : .center} 

???note "`ls -a`"

    Check the components in the current directory; with **hidden components**.

    ![picture 2](pictures/ls2.png){width="80%", : .center}   


???note "`ls -l`"

    Check the components in the current directory; with **detailed information**. The authority meaning of the first column:

    <center> [{==dicrectory==}][{==Owner==}][{==Group==}][{==Other==}]<center>

    ![picture 3](pictures/ls3.png){width="80%", : .center}   


## **cd**

???note "`cd`"

    (default) Go back to the `root` home directory of the **current user**.

    ![picture 4](pictures/cd1.png){width="80%", : .center}  


???note "`cd ~`"

    Go to the `root` home directory of **the current user**.

    ![picture 5](pictures/cd2.png){width="80%", : .center}  

???note "`cd /`"

    Takes you back to the root directory of the **current drive**.
    ![picture 6-](pictures/cd_slash.png){width="80%", : .center}

???note "`cd .`"

    Go to the `present working` directory.  

    ![picture 6](pictures/cd3.png){width="80%", : .center}    

???note "`cd ..`"

    Go to the `parent` directory.  

    ![picture 7](pictures/cd4.png){width="80%", : .center}  


## **pwd**

???note "`pwd`"

    Present **working directory**.

    ![picture 8](pictures/pwd.png){width="80%", : .center}  

## **grep**

???note "`grep`"

    Search a `string` in a `given file`.

    ![picture 9](pictures/grep1.png){width="80%", : .center}  

???note "`grep -i`"

    Search a `string` in the `file` directory, with **case-insensitive**. The output will mix both `up & low -case` results.

    The case below will search: `What`, `WhaT`, `wHAt`, `wHat`, .etc.

    ![picture 10](pictures/grep2.png){width="80%", : .center}  

???note "`grep -r`"

    Search a `string` from all files in the `current directory` (or in a `given file` if send the parameter) and in all of its `subdirectories`.

    ![picture 11](pictures/grep3.png){width="80%", : .center}  

## **chmod**

???note "`chmod`"

    Set `authority` for the given file. 

    Note that: there are two ways to use chmod.  For example, `chmod 644 <filename>` and `chmod u+rw <filename>`

    ![picture 12](pictures/chomod.png){width="80%", : .center} 

    === "Digit cheating sheet"

        Person| user | group| other
        :-:|:-:|:-:|:-:
        Decimal|6|4|4
        Binary| 110| 100| 100
        Meaning| rwx | rwx | rwx

    === "Alphabet cheating sheet"

        <center>[{==Person==}][{==Verb==}][{==Behavior==}]</center>

        Person | u|g|o
        :-:|:-:|:-:|:-:
        Meaning | user|group|other

        Verb| + | -
        :-:|:-:|:-:
        Meaning | add|remove

        Behavior | r|w|x
        :-:|:-:|:-:|:-:
        Meaning | read|write|excute

## **find**

???note "`find . -name <filename>`"

    Find `file` with the given `name` in the `current directory`.

    ![picture 13](pictures/find.png){width="80%", : .center}   

## **history**

???note "`history`"

    Check command `using history`.

    ![picture 14](pictures/history1.png){width="80%", : .center}  

    <center>:fontawesome-solid-ellipsis:</center>
    
    ![picture 15](pictures/history2.png){width="80%", : .center}   

## **Pip (|)**

???note "`|` -- pip operator"

    Combine **two or more** commands.

    **e.g.** I want to use `history` and `grep ls` in sequence. I use `history | grep ls`

    ![picture 16](pictures/pip.png){width="80%", : .center}     

## **Output Redirect (>)**

???note "`>` -- output redirection operator"

    **Redirect** the contents of a command/file **to another** by `overwriting` it.

    **e.g.** 
    
    I want to save the output of `history | grep ls` in the file `output.log`. I use `history | grep ls > output.log`.

    ![picture 18](pictures/redirect2.png){width="80%", : .center}   

## **cat**  

???note "`cat`"

    `Print` the content of a `file` onto the standard output stream.

    === "Cat output"
        
        ![picture 19](pictures/cat1.png){width="80%", : .center}   

    === "Vim editor comparison"

        ![picture 20](pictures/cat2.png){width="80%", : .center}   

## **man**  

???note "`man`"

    The function of `man` is like `--help`(in GitBash). It shows the `manual pages` for a command.

    **e.g.** I want to check `less` command using manu:

    ![picture 22](pictures/man2.png){width="80%", : .center}   

    ![picture 21](pictures/man1.png){width="80%", : .center} 

## **more, less, most**

???note "`more, less, most`"

    The three commands are used to view the text files in the command prompt, displaying one screen at a time in case the file is large (For example log files). 

    === "`more`"

          - Support `forward navigation` and `limited backward navigation`.

    === "`less`"

          - Support both `forward navigation` and `backward navigation`.
          - Has `search` options. 
          - Can go to the `beginning` and the `end` of a file instantly. 
          - Can switch to an `editor` (like opening the file in `vi` or `vim`). 
    
        It is {==noticeably quicker than editor==} when the file is large.

    === "`most`"

          - Has `all` the features of `more` and `less`.
          - Can also open `multiple files`, close 1 file at a time when you have multiple files open.
          - Allows `locking` and `scrolling` of the open windows.
          - Allows for `splitting` of open windows.

## **alias**  

???note "`alias`"

    Create a `shortcut` that references a command.

    **e.g.** Create a shortcut for `ls -la` as `ll`: `alias ll="ls -la"`

    ![picture 23](pictures/alias.png){width="80%", : .center}    

## **unalias**  

???note "`unalias`"

    **Remove** `alias`.

    ???+warning "Note"

        `unalias` not only remove the `alias` from the current session but also remove them permanently from `shell's configuration file`.

## **echo**

???note "`echo`"

    A built-in Linux feature that **prints out** arguments as the `standard output`. Example see in [PATH](#path).


## **which**

???note "`which`"

    Use to **identify** the `location` of `executables`.
    
    ![picture 25](pictures/which.png){width="80%", : .center}    


## **PATH**  

???note "`PATH` display"

    By using `echo $PATH`.

    ![picture 24](pictures/PATH.png){width="80%", : .center}   

???note "`PATH` edit"

    **Q:** How to make scripts execute from the present working directory without having to type a `./` before the script's name (**e.g.** `hello` instead of `./hello`)?

    **A:** `./` executes files that are not in `${PATH}`, “.” means it directly execute file in the **current directory**. Thus, we need to **add** hello’s **absolute directory** in `${PATH}`, such as:
    
    <center>`PATH DEFAULT=${PATH}:/path/to/hello`</center>

## **ln**  

???note "`ln -s`"   

    Create a `soft link` for an <u>existing file</u>.

    ![picture 26](pictures/ln.png){width="80%", : .center}     

## **Background Processing (&)**

???note "`&`"  

    For example, launching **Node.js** using `node app.js &` vs. `node app.js`

    Use the `background process` can help to keep the process running without terminal effects. However, a `foreground process` will be killed when we close the terminal.

## **code**

???node "`code`"

    Open `VS Code` to edit some file.

## **source**

???node "`source`"

    `source` is used to **read and execute** the content of a file (generally a set of commands) **right now** instead of relaunching the shell. Those commands are <u>passed as an argument in the current shell script</u>.

    Let's create a `.bash_profile` in the `root` directory:

    ![picture 20](pictures/source1.png){width="80%", : .center}  

    Then execute the file:

    ![picture 21](pictures/source2.png){width="80%", : .center}    

    Oh no! All the dependencies have gone!
    ![picture 22](pictures/source3.png){width="80%", : .center}    

    😆 Do not worry about it. **Remove** the code in `.bash_profile` and **relaunch** your shell. Then your shell will be brand new! (The theory see in next topic [.bash_profile vs .bashrc](#bash_profile-vs-bashrc)).

    There is another way to fix the problem: change `export PATH=.:` into `export PATH=.:$PATH`.

## **.bash_profile vs .bashrc**

???node "`.bash_profile` v.s. `.bashrc`"

    When invoked, `Bash` **reads** and **excutes** commands from a set of startup files, which is read depending on whether `shell (command explainer)` is invoked as {==\[interactive/non-interactive\]==} or {==\[login/non-login\]==} shell.

    Shell type | interactive|non-interactive|login|non-login
    :-:|:-:|:-:|:-:|:-:
    Example| terminal (shell read, write)| non-terminal (execute a script)| remotely (via ssh)| locally

    === "`.bash_profile`"

        **For:** {==Interactive==} {++log-in++} shell.

    === "`.bashrc`"

        **For:** {==Interactive==} {++non-login++} shell.

    ???+warning "Note!"

        The components you write in `.bash_profile` and `.bashrc` is just **appending** more works to the current default shell settings. It is **not overlapping**.

        **E.g. situations** 
            
          - If you create an empty `.bash_profile` and execute (use `source`) immediately, it will make any changes to your shell's setting. 
          - If you make any changes in `.bash_profile` and execute it immediately, it will implement the changes in your shell. However, if you delete the code in `.bash_profile` for the changes and restart shell, the shell will run as the original default.

## **Shebang (#!)**

???note "`#!`"  

    `Bash` commands can be used not only in **command lines** but also in **scripts**. The head of `Bash script` should mention using **Bash shell** with `#!`.
    
    **e.g:** With `#!/bin/bash`, generate SHA hash for `[A-Za-z0-9]`:

    ![picture 23](pictures/shabang.png){width="60%", : .center}


    ???+question "How to run a bash script?"
        
        There are **two ways** to run a bash script:
        
          1. Use [`source`](#source). Source it immediately!
          
          2. Make it executable with `chmod 7xx <script_name>`. Then run it in any way below. Let's assume the script is named `Donow`:
  
            - **Add script path** into `PATH`. Then Run it with script name. **e.g.:** `$ Donow`
            - Run **relative path**. **e.g.:** `$ ./Donow`
            - Run **absolute path**. **e.g.:** `$ <Path_from_root>/Donow`


## **sha1sum**

???note "`sha1sum`"

    `sha1sum` is a **cryptographic hash function**. The algorithm transfer data into `Checksum`, which is convenient for **confirming** if your copy is the same as the original one.

    ![picture 19](pictures/sha1.png){width="80%", : .center}  



