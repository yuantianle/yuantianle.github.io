---
comment: true
ᴴₒᴴₒᴴₒ: ture
---

# **:bar_chart: Optimization Methods Classification**

| 方法类型 | 方法名称 | 特性 | 应用领域 | 公式 |
| --- | --- | --- | --- | --- |
| 常微分方程数值解法 | 龙格-库塔法 | - 高精度<br>- 稳定性好<br>- 计算量相对较大 | - 常微分方程求解<br>- 动力学系统模拟<br>- 工程和物理问题 | 4阶龙格-库塔公式（常见形式）：<br>$y_{n+1} = y_n + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$<br>$k_1 = hf(x_n, y_n) ， k_2 = hf(x_n + \frac{h}{2}, y_n + \frac{k_1}{2})$ … |
|  | 欧拉法 | - 计算简单<br>- 精度较低<br>- 时间步长敏感 | - 常微分方程求解<br>- 简单物理系统模拟 | 显式欧拉法: <br>$y_{n+1} = y_n + hf(x_n, y_n)$ |
|  | 中点法 | - 使用中间点的斜率<br>- 精度比欧拉法更高<br>- 稳定性较好 | - 常微分方程求解<br>- 中等精度要求问题 | 中点法公式：<br>$y_{n+1} = y_n + hf\left(x_n + \frac{h}{2}, y_n + \frac{h}{2} f(x_n, y_n)\right)$ |
| 偏微分方程数值解法 | 有限差分法 | - 将微分方程转化为代数方程<br>- 适用于偏微分方程<br>- 网格划分对结果影响大 | - 偏微分方程求解<br>- 数值天气预报<br>- 流体力学 | 二阶中心差分近似（用于偏导数）：<br>$f''(x) \approx \frac{f(x+h) - 2f(x) + f(x-h)}{h^2}$ |
|  | 有限元方法 | - 将问题域划分为小区域<br>- 适用于复杂几何和边界条件<br>- 精度较高 | - 偏微分方程求解<br>- 结构工程<br>- 热传导问题 | 泛化的有限元方法公式：<br>$\int_{\Omega} (\nabla u \cdot \nabla v - fv) \, d\Omega = 0$ |
| 优化问题方法 | 最速下降法 | - 使用函数的一阶导数<br>- 实现简单，适用性广<br>- 可能收敛速度慢 | - 非线性方程组求解<br>- 机器学习参数优化<br>- 最小化成本函数 | 迭代公式：<br>$x_{n+1} = x_n - \alpha_n \nabla f(x_n)$ |
|  | 牛顿法 | - 使用函数的一阶和二阶导数<br>- 收敛速度快<br>- 需要计算Hessian矩阵 | - 非线性方程组求解<br>- 优化问题 | 迭代公式：<br>$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ |
|  | 共轭梯度法 | - 不需要存储Hessian矩阵<br>- 适用于大规模问题<br>- 仅适用于二次函数 | - 非线性方程组求解<br>- 大规模优化问题<br>- 稀疏系统 | 迭代公式：<br>$x_{n+1} = x_n + \alpha_n p_n$<br>其中，$p_n$ 是共轭方向。 |
|  | 二分法 | - 简单且稳定<br>- 收敛速度相对较慢<br>- 需要函数在区间两端取不同符号 | - 线性方程 & 非线性方程<br>- 求解实数根<br>- 连续函数的区间搜索 | 迭代公式：<br>$c = \frac{a+b}{2}$<br>其中，a 和 b 是当前区间的端点。 |
|  | 高斯-塞德尔法 | - 收敛速度通常比雅可比法快<br>- 适用于大型稀疏系统 | - 线性方程组<br>- 数值线性代数 | 迭代公式：<br>$x_i^{(k+1)} = \frac{1}{a_{ii}} \left(b_i - \sum_{j=1}^{i-1} a_{ij} x_j^{(k+1)} - \sum_{j=i+1}^{n} a_{ij} x_j^{(k)} \right)$ |
|  | 雅可比法 | - 简单迭代法<br>- 对角线元素须非零<br>- 收敛速度可能较慢 | - 线性方程组<br>- 数值线性代数 | 迭代公式：<br>$x_i^{(k+1)} = \frac{1}{a_{ii}} \left(b_i - \sum_{\substack{j=1 \\ j \neq i}}^{n} a_{ij} x_j^{(k)} \right)$ |
| 数值积分方法 | 梯形法 | - 简单且稳定<br>- 适用于初等积分<br>- 精度一般 | - 数值积分<br>- 近似求解定积分 | 梯形法公式：<br> $\int_{a}^{b} f(x) \, dx \approx \frac{h}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)]$<br>其中， $h = \frac{b-a}{n}$ 。 |


| Method Type | Method Name | Features | Application Fields | Formula |
| --- | --- | --- | --- | --- |
| Numerical Methods for ODEs | Runge-Kutta Method | - High accuracy<br>- Good stability<br>- Relatively large computational cost | - Solving ordinary differential equations<br>- Dynamical system simulations<br>- Engineering and physics problems | 4th order Runge-Kutta formula (common form):<br>$y_{n+1} = y_n + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$<br>$k_1 = hf(x_n, y_n), k_2 = hf(x_n + \frac{h}{2}, y_n + \frac{k_1}{2})$ … |
|  | Euler's Method | - Simple computation<br>- Low accuracy<br>- Sensitive to time step | - Solving ordinary differential equations<br>- Simulating simple physical systems | Explicit Euler method:<br>$y_{n+1} = y_n + hf(x_n, y_n)$ |
|  | Midpoint Method | - Uses the slope at the midpoint<br>- More accurate than Euler's method<br>- Better stability | - Solving ordinary differential equations<br>- Problems requiring moderate accuracy | Midpoint method formula:<br>$y_{n+1} = y_n + hf\left(x_n + \frac{h}{2}, y_n + \frac{h}{2} f(x_n, y_n)\right)$ |
| Numerical Methods for PDEs | Finite Difference Method | - Converts differential equations to algebraic equations<br>- Suitable for partial differential equations<br>- Grid division greatly affects the result | - Solving partial differential equations<br>- Numerical weather prediction<br>- Fluid mechanics | Second-order central difference approximation (for partial derivatives):<br>$f''(x) \approx \frac{f(x+h) - 2f(x) + f(x-h)}{h^2}$ |
|  | Finite Element Method | - Divides the problem domain into small regions<br>- Suitable for complex geometries and boundary conditions<br>- High accuracy | - Solving partial differential equations<br>- Structural engineering<br>- Heat conduction problems | Generalized finite element method formula:<br>$\int_{\Omega} (\nabla u \cdot \nabla v - fv) \, d\Omega = 0$ |
| Optimization Methods | Steepest Descent Method | - Uses the first derivative of the function<br>- Simple to implement and widely applicable<br>- May converge slowly | - Solving nonlinear equations<br>- Parameter optimization in machine learning<br>- Minimizing cost functions | Iterative formula:<br>$x_{n+1} = x_n - \alpha_n \nabla f(x_n)$ |
|  | Newton's Method | - Uses the first and second derivatives of the function<br>- Fast convergence<br>- Requires the Hessian matrix | - Solving nonlinear equations<br>- Optimization problems | Iterative formula:<br>$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ |
|  | Conjugate Gradient Method | - Does not require storing the Hessian matrix<br>- Suitable for large-scale problems<br>- Only works for quadratic functions | - Solving nonlinear equations<br>- Large-scale optimization problems<br>- Sparse systems | Iterative formula:<br>$x_{n+1} = x_n + \alpha_n p_n$<br>where $p_n$ is the conjugate direction. |
|  | Bisection Method | - Simple and stable<br>- Relatively slow convergence<br>- Requires the function to have different signs at the interval ends | - Linear & nonlinear equations<br>- Solving real roots<br>- Interval search for continuous functions | Iterative formula:<br>$c = \frac{a+b}{2}$<br>where a and b are the current interval endpoints. |
|  | Gauss-Seidel Method | - Generally faster convergence than the Jacobi method<br>- Suitable for large sparse systems | - Solving linear equations<br>- Numerical linear algebra | Iterative formula:<br>$x_i^{(k+1)} = \frac{1}{a_{ii}} \left(b_i - \sum_{j=1}^{i-1} a_{ij} x_j^{(k+1)} - \sum_{j=i+1}^{n} a_{ij} x_j^{(k)} \right)$ |
|  | Jacobi Method | - Simple iterative method<br>- Diagonal elements must be non-zero<br>- May have slow convergence | - Solving linear equations<br>- Numerical linear algebra | Iterative formula:<br>$x_i^{(k+1)} = \frac{1}{a_{ii}} \left(b_i - \sum_{\substack{j=1 \\ j \neq i}}^{n} a_{ij} x_j^{(k)} \right)$ |
| Numerical Integration Methods | Trapezoidal Rule | - Simple and stable<br>- Suitable for elementary integrals<br>- Moderate accuracy | - Numerical integration<br>- Approximating definite integrals | Trapezoidal rule formula:<br> $\int_{a}^{b} f(x) \, dx \approx \frac{h}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)]$<br>where $h = \frac{b-a}{n}$ |
