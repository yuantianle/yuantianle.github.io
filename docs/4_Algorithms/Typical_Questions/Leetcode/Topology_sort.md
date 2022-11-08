---
comments: true
---

# **Topology Sort**

>Keywords: 2D map, BFS

## Question
There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

* For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
  
Return `true` if you can finish all courses. Otherwise, return `false`.

## Example
Example 1:

```
{==Input:==} numCourses = 2, prerequisites = [[1,0]]
{==Output:==} true
{==Explanation:==} There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
```

Example 2:

```
{==Input:==} numCourses = 2, prerequisites = [[1,0],[0,1]]
{==Output:==} false
{==Explanation:==} There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```

## Pseudo-code
``` c++ title="Pseudo-code"
//0. Results
    <type> result
//1. Define adjecent matrix & ingoing degree
    vector<vector<int>> adj(numCourses, vector<int>())
    vector<int> degree(numCourses, 0)
//2. Initialization
    adj[][] <-> outgoing for each point
    degree[] <-> ingoing for each point
//3. Define Queue
    queue<int> q
//4. Initialize Queue
    for all points{
        //some condiction, e.g:
        q.push(point -> degree==0)
    }
//5. Queue's Size satisfy some function
    while(q.size()!=0){
        current = q.front
        q pop top
        operate result
        for (next -> adj[current])
        {
            if (--degree[next]==0/ some condition) 
                q.push(next)
        }
    }
//6. Output result
    return result
```

## Answer
``` c++ title="solution.c++"
bool canFinish(int numCourses, vector<vector<int>>&prerequisites) { "kk"
    vector<vector<int>> adj(numCourses, vector<int>()); //good place!! initialize vector into fixed store size 
    vector<int> degree(numCourses, 0);
    for (auto p: prerequisites)
    {
        //"0 <= 1"
        adj[p[1]].push_back(p[0]);//outgoing 
        degree[p[0]]++; //ingoing degree
    }
    queue<int> q;
    for (int i = 0; i < numCourses; i++)
    {
        if (degree[i] == 0)
            q.push(i);
    }
    while(q.size() != 0)
    {
        int current = q.front();
        q.pop();
        numCourses--;
        for (auto next: adj[current])
        {
            if (--degree[next]==0) q.push(next);
        }
    }
    return numCourses==0;
}
```