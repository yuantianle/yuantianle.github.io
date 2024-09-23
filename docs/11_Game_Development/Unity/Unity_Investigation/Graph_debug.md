---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# **Unity Graph Debug**

Here are several tools under the IDE for debugging the CPU and GPU.

## **Memory profiler**

???+Note "When to use **`Memory profiler`?**"

    - Monitors **real-time memory usage** for both **managed** and **native memory**.
    - Identifies memory **allocations** and **leaks** to optimize **RAM** usage.
    - Tracks memory allocation per **object type**, helping pinpoint areas of high **memory consumption**.
    
    ![alt text](Memory_Profiler.png){width="50%", : .center}

## **Profiler**:

???+Note "When to use **`Profiler`?**"

    - Tracks **CPU and GPU performance** in terms of time spent on different tasks.
    - Provides a breakdown of **scripts**, **rendering**, **physics**, and **other processes**.
    - Identifies **bottlenecks** by showing **frame time** and **resource usage**.

    ![alt text](Profiler.png){width="50%", : .center}

## **Frame Debugger**:

???+Note "When to use **`Frame Debugger`?**"

    - Allows you to **step through frames** to visualize each **draw call**.
    - Helps understand the **order of operations** in the rendering pipeline.
    - Useful for debugging **overdraw**, **incorrect rendering order**, and other **rendering issues**.

    ![alt text](frame-debugger-event-accumulation.gif){width="50%", : .center}

## **Rendering Debugger**:

???+Note "When to use **`Rendering Debugger`?**"

    - Focuses on specific **stages of the GPU pipeline**.
    - Helps debug **shader issues**, **pipeline state**, and **resource binding**.
    - Useful for troubleshooting **rendering artifacts** or **GPU-related bugs**.

    ![alt text](RD_Frequently_Used.png){width="50%", : .center}

    ![alt text](RD_Material.png){width="50%", : .center}

    ![alt text](RD_Lighting.png){width="30%", : .center}

    ![alt text](RD_Rendering.png){width="30%", : .center}
    
## **Rendering Graph Viewer**:

???+Note "When to use **`Rendering Graph Viewer`?**"

    - Visualizes the **rendering pipeline nodes**.
    - Shows how resources like **textures**, **buffers**, and **shaders** are used in each stage.
    - Helps optimize **resource allocation** and **GPU performance**.

    ![alt text](Rendering_Graph_Viewer.png){width="50%", : .center}

### **Reference**

- [Memory Profiler overview](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@1.1/manual/index.html)
- [Profiler overview](https://docs.unity3d.com/Manual/Profiler.html)
- [Frame Debugger overview](https://docs.unity3d.com/Manual/frame-debugger-window.html)
- [Rendering Debugger overview](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@15.0/manual/features/rendering-debugger.html)
- [Render Graph Viewer](https://docs.unity3d.com/6000.0/Documentation/Manual/urp/render-graph-view.html)