---
ᴴₒᴴₒᴴₒ: ture
---

# **🎮 Math Questions**

> This material is for related questions:

## **Convex hull**

???+Note "How to compute the convex hull of a given set of points?"

    **Answer:** We can solve this problem by using [Graham Scan alrorithm](https://www.youtube.com/watch?v=B2AJoQSZf4M).

## **Dot and Cross products**

???+Note "Geometric interpretations of dot and cross products."
    
    **Answer:** 

    - `Dot product` is like light projection:

    ![picture 0](Images/dot_product.png){width="40%", : .center}   

    - `Cross product` is for getting the orthogonal vector of the provided vectors. Its symbol also shows the clockwise from one parent vector to another parent verctor:

    ![picture 2](Images/cross_product.png){width="40%", : .center} 


## **Point in Tri**

???+Note "How to determine if a point is inside a triangle?"

    **Answer:** Various methods can be used, including:
    
    - Barycentric coordinates ([Link](https://www.geeksforgeeks.org/check-whether-a-given-point-lies-inside-a-triangle-or-not/))

    ![picture 3](Images/barycentric_coordinate.png){width="40%", : .center}  

    - Angle summation ([Link](https://www.researchgate.net/publication/321421519_OPTIMUM_TOOLS_FOR_FINISHING_SCULPTURED_SURFACES_DEFINED_BY_3D_IRREGULAR_CLOUD_OF_POINTS#pf2))

    ![Alt text](Images/interial_angle.png){width="40%", : .center}

    - Ray intersection ([Link](https://www.baeldung.com/cs/check-if-point-is-in-2d-triangle#1-mathematical-idea-1))

    ![Alt text](Images/interial_ray.png){width="40%", : .center}

    - Area comparison. ([Link](https://www.geeksforgeeks.org/check-whether-a-given-point-lies-inside-a-triangle-or-not/))

    ![Alt text](Images/interial_area.jpg){width="40%", : .center}

## **Convex polygon**

???+Note "How to determine if a polygon is convex?"

    **Answer:** A polygon is convex if all its interior angles are less than 180 degrees. ([Link](https://www.learnalberta.ca/content/memg/division03/Polygon%20%28Convex%29/index.html))
    ![Alt text](Images/Polygon_convex.png){width="60%", : .center}


## **Reflection vector**

???+Note "Given a normal vector and an incident vector, how to compute the reflection vector?"

    **Answer:** Here below is the formula ([Link](https://www.contemporarycalculus.com/dh/Calculus_all/CC11_7_VectorReflections.pdf)):

    $$ \vec{R} = \vec{I} - 2 \vec{I}\cdot\vec{N}$$

    ![Alt text](Images/reflection.png){width="20%", : .center}


## **Polygon area**

???+Note "Use cross product to calculate the area of a polygon."

    **Answer:** Refer the [Link](https://www.baeldung.com/cs/2d-polygon-area) Imagine we have three points A, B, and C. The area of the single triangle can be calculated as:

    $$S_{tri}=1/2\cdot\|\vec{AB}\times\vec{AC}|$$

    The area of any polygon can be claculated by:

    $$S_{pol}=1/2\cdot\sum_{i=0}^{n-1}(x_i\cdot y_{i+1}-y_i\cdot x_{i+1})$$

    ![Alt text](Images/polygon_area.jpg){width="30%", : .center}

## **3D two lines' distance**

???+Note "Finding the distance between two lines in 3D space."

    **Answer:** The distance between two lines can be calculated using vector projection and vector subtraction. ([Link](https://www.youtube.com/watch?app=desktop&v=HC5YikQxwZA))

    ![Alt text](Images/twoline_distance.png){width="60%", : .center}

## **Zero determinant**

???+Note "Significance of a determinant being equal to zero?"

    **Answer:** A determinant of zero indicates linear dependence of the matrix columns or rows.
    
    - **Linear Dependence:** If the determinant of a square matrix is zero, it means that the rows (or columns) of the matrix are linearly dependent. In simpler terms, one of the rows (or columns) can be expressed as a linear combination of the other rows (or columns).

    - **Singular Matrix:** A matrix with a determinant of zero is called a singular matrix. Singular matrices do not have an inverse, meaning they are non-invertible. Non-singular matrices, on the other hand, have a non-zero determinant and possess an inverse.

    - **Volume Interpretation:** For a 3x3 matrix, the determinant gives the volume of the parallelepiped spanned by its row or column vectors. A determinant of zero implies that the volume is zero, which means that the three vectors lie in the same plane.

    - **No Unique Solution:** If you're trying to solve a system of linear equations using the matrix form $AX=B$, and matrix $A$ has a determinant of zero, it means that the system either has infinitely many solutions or no solutions (depending on the system). In the context of linear systems, the determinant can help determine the nature of the solutions.

    - **Eigenvalues:** For a square matrix, the determinant of the matrix minus a scalar multiple of the identity matrix gives the characteristic polynomial. The roots of this polynomial are the eigenvalues of the matrix. If the determinant of the matrix itself is zero, then one of the eigenvalues is zero.

    - **Stability in Differential Equations:** In the study of differential equations, particularly systems of linear differential equations, the determinant of the coefficient matrix can play a role in determining the stability and behavior of solutions.

    - **Geometric Interpretation:** For a 2x2 matrix, the determinant gives the area of the parallelogram spanned by its row or column vectors. If the determinant is zero, it means that the area is zero, implying that the vectors are collinear.

    - **Change of Variables in Multivariable Calculus:** The determinant of the Jacobian matrix in a change of variables for multiple integrals gives a scaling factor for integration. A zero determinant can indicate problems in the transformation.


## **Homogeneous coordinates**

???+Note "What are homogeneous coordinates?"

    **Answer:** Homogeneous coordinates represent points in higher-dimensional space and allow for convenient transformations.

    Here are some matrix for two-dimensional transformation in homogeneous coordinate:
    
    ![Alt text](Images/homogeneous-coordinates.png){width="60%", : .center}

## **Posit homo v.s. Direct homo**

???+Note "How to differentiate between a position and a direction using homogeneous coordinates?"

    **Answer:** In homogeneous coordinates, the distinction between a position (or point) and a direction (or vector) can be made using the additional coordinate, often referred to as the "w-coordinate."

    - **Position (or Point):** Represented as $(x',y',w)$ in 2D or $(x',y',z',w)$ in 3D. The w-coordinate for a position is usually 1 (or non-zero in a more general sense). When you convert from homogeneous to Cartesian coordinates, you'd divide by w to get the actual point: $x=x'/w,y=y'/w$and in 3D, $z=z'/w$.

    - **Direction (or Vector):** Represented similarly as $(x',y',w)$ in 2D or $(x',y',z',w)$ in 3D. The w-coordinate for a direction vector is 0. This denotes that vectors, being directions, do not have a specific position in space and aren't affected by translations. If you were to convert a direction from homogeneous to Cartesian coordinates (though you typically wouldn't need to), the division by w would lead to a division by zero, which further underscores that the concept of a specific "position" doesn't apply to directions.

    Here's a practical interpretation. Imagine you're working in 3D graphics:

    - If you have the homogeneous coordinate $(2,3,4,1)$, it represents the point $(2,3,4)$ in Cartesian coordinates.

    - If you have the homogeneous coordinate $(2,3,4,0)$, it represents a direction, not a specific point. It might describe, for instance, the direction of a light ray or a vector in space.

## **Benifits of homo**

???+Note "Why use homogeneous coordinates? What are the advantages?"

    **Answer:**

    - **Unified Transformation Matrices:** Homogeneous coordinates allow for a unified matrix representation for multiple transformations (translation, rotation, scaling, and shearing). This makes it possible to concatenate various transformations into a single matrix.

    - **Easier Translations:** In standard Cartesian coordinates, translations are not representable as linear transformations. With homogeneous coordinates, translations become linear, and hence, can be expressed as matrix multiplications.

    - **Perspective Projections:** Homogeneous coordinates make it easy to handle projective transformations, like perspective projection in graphics, which would be more complex in Cartesian coordinates.

    - **Representation of Points at Infinity:** They can represent points at infinity, allowing for the modeling of parallel lines meeting at a "vanishing point" in projective geometry.

    - **Interpolation and Clipping:** In computer graphics, tasks like interpolation and clipping can be performed more efficiently and robustly using homogeneous coordinates.

    - **Compactness:** Using homogeneous coordinates, a sequence of transformations can be represented compactly with a single matrix, simplifying the computation.

    - **Flexibility:** They can seamlessly toggle between representing positions and directions using the same coordinate system.

    - **Robustness in Computer Vision:** Homogeneous coordinates provide a robust framework for dealing with points and transformations in computer vision tasks, such as camera calibration and 3D reconstruction.

## **Ray-sphere intersection**

???+Note "How to determine ray-sphere intersection? Optimization strategies?"

    **Answer:** Intersection can be found by solving a quadratic equation. Optimization includes early rejection using bounding spheres.

    ![Alt text](Images/line-sphere-intersection.jpg){width="40%", : .center}

## **Normal matrix**

???+Note "What is a normal matrix?"

    **Answer:** 

    - Definition: 
        - A complex square matrix $A$ is normal if it commutes with its adjoint (conjugate transpose). 
        - For real matrices, the adjoint is the same as the transpose. So for a real matrix, a square matrix $A$ is normal if it commutes with its transpose.

    ![Alt text](Images/Normal_Matrix.png){width="50%", : .center}

    - Application:
        - A matrix is normal if and only if it can be diagonalized by a unitary (or orthogonal, in the real case) matrix.
        - If $\overline{A}$ is normal, then its eigenvalues lie in the complex plane and its eigenvectors can be chosen to be orthonormal.
        - All Hermitian, skew-Hermitian, and unitary matrices are normal.

## **Clipping space transformation**

???+Note "What does the clipping space transformation do?"

    **Answer:** Clipping space transformation maps the view frustum to a normalized cube for further perspective projection. 
    
    In CG, The calculations involved in transforming our vertex positioned in model space into clip space happen in the vertex shader. In fact, the position we set as output, is the position in clip space ([Link](https://carmencincotti.com/2022-05-02/homogeneous-coordinates-clip-space-ndc/)):

    $$out_{position} = projectionMatrix \times viewMatrix \times modelMatrix \times input_{ModelSpacePosition}$$

    ![Alt text](Images/ClipMatrix.png){width="30%", : .center}

## **Viewing frustum**

???+Note "How is a viewing frustum defined?"

    **Answer:** The viewing frustum is defined as the volume in world space that is visible through the camera lens.
    
    ![Alt text](Images/Graphics3D_CameraPerspective.png){width="40%", : .center}
    
    ![Alt text](Images/Projection_matrix.png){width="50%", : .center}

## **Dimensions of vectors/matrices**

???+Note "How many dimensions are typical vectors? And matrices? Why is it 3D for vectors and 4D for matrices?"

    **Answer:** Vectors are typically 3D for spatial representations, while matrices are 4D for transformations due to homogenous coordinates.

## **M matrix**

???+Note "How is the M matrix derived?"

    Answer: The M matrix combines translation, rotation, and scaling transformations into a single matrix.

    Given a 4x4 transformation matrix $M$ in 3D graphics, the matrix can be represented as:

    $$
    M=\begin{bmatrix}
    RS & T\\
    0 & 1
    \end{bmatrix}
    $$

    Where:

    - $R$ is a 3x3 matrix representing rotation and possibly scaling.
    - $T$ is a 3x1 matrix (or column vector) representing translation.

## **M matrix decomposation**

???+Note "Given an M matrix, can it be decomposed into various transformation matrices?"

    **Answer:** Yes, an M matrix can be decomposed into translation, rotation, and scaling matrices. The hard point is the Scaling and Rotation Decomposition:

    First, compute the scale factors along each axis as the magnitude of the rows of the 3x3 matrix:

    $$S_x = ||M_{1,:3}||, S_y = ||M_{2,:3}||,S_z = ||M_{3,:3}||,$$

    The scaling matrix $S$ is then:

    $$
    S=\begin{bmatrix}
    S_x & 0 & 0\\
    0 & S_y & 0\\
    0 & 0 & S_z
    \end{bmatrix}
    $$

    To get the pure rotation matrix $R$, you would normalize the rows of the 3x3 matrix in $M$ using the scaling factors:

    $$
    R=\begin{bmatrix}
    \frac{M_{1,:3}}{S_x} \\
    \frac{M_{2,:3}}{S_y}\\
    \frac{M_{3,:3}}{S_z}
    \end{bmatrix}
    $$

    ![Alt text](Images/M_matrix_decompose.png){width="40%", : .center}

    ![Alt text](Images/3D_rotation.png){width="40%", : .center}

## **Order of matrix concatenation**

???+Note "How to determine the order of matrix concatenation?"

    **Answer:** Matrix multiplication is non-commutative, so the order of matrix multiplication matters. 

    Let's use some notation:

    - Let $( M_o )$ be the object's matrix.
    - Let $( M_r )$ be the rotation matrix.
    - Let $( M_t )$ be the translation matrix.

    For the above scenario, the result $M_{result}$ after rotating and then translating is:

    $$ M_{result} = M_t \times (M_r \times M_o) $$

    If you instead wanted to first translate and then rotate the object, you would do:

    $$ M_{result} = M_r \times (M_t \times M_o) $$

## **Orthogonal matrices**

???+Note "Definition and characteristics of orthogonal matrices."

    **Answer:** 
    
    - **Definition:** A square matrix $A$ is said to be orthogonal if its transpose is equal to its inverse. That is, 

    $$ A^T = A^{-1} $$

    or equivalently, 

    $$ A^T A = AA^T = I $$

    where $I$ is the identity matrix of appropriate size.

    - **Characteristics of Orthogonal Matrices:**

        - Preservation of Dot Product: For an orthogonal matrix $A$ and any vectors $x$ and $y$ in $\mathbb{R}^n$, the dot product of the transformed vectors remains unchanged. This means that orthogonal matrices preserve angles between vectors. i.e., 

        $$ (Ax) \cdot (Ay) = x \cdot y $$

        - Preservation of Norm: For an orthogonal matrix $A$ and any vector $x$ in $\mathbb{R}^n$, the length (or norm) of the transformed vector remains unchanged. That is, 
   
        $$ ||Ax|| = ||x|| $$
        
        - Determinant: The determinant of an orthogonal matrix is either 1 or -1.

        - Eigenvalues: The eigenvalues of an orthogonal matrix have an absolute value of 1.

        - Inverse: As per the definition, the inverse of an orthogonal matrix is its transpose.

        - Rotation and Reflection: Orthogonal matrices in $\mathbb{R}^2$ and $\mathbb{R}^3$ can represent rotations (if the determinant is 1) or  reflections (if the determinant is -1).

## ****

???+Note ""

Understanding eigenvalues and eigenvectors, along with related equations.
Answer: Eigenvalues and eigenvectors describe the behavior of a linear transformation.

## ****

???+Note ""

What are the eigenvalues of a rotation matrix?
Answer: The eigenvalues of a rotation matrix are complex numbers with magnitude 1.

## ****

???+Note ""

How to understand eigenvectors for a 2x2 matrix A?
Answer: Eigenvectors of a 2x2 matrix A are vectors that do not change direction when multiplied by A.

## ****

???+Note ""

Are you familiar with the least squares method?
Answer: The least squares method minimizes the sum of squared differences between data points and a fitted model.

## ****

???+Note ""

Do you know about Euler angles? What are they used for? What are their pros and cons?
Answer: Euler angles represent rotations in 3D space and have issues like gimbal lock.

## ****

???+Note ""

Have you encountered gimbal lock? Why does it occur? How to solve it?
Answer: Gimbal lock occurs when a three-axis rotation representation loses a degree of freedom. It can be solved using other representations.

## ****

???+Note ""

Are you familiar with quaternions? What are their roles? How can interpolation be performed?
Answer: Quaternions are used to represent rotations. Spherical linear interpolation (slerp) can be used for interpolation.

## ****

???+Note ""

What is Monte Carlo integration?
Answer: Monte Carlo integration is a numerical method to estimate complex integrals using random sampling.

How can a nonlinear problem be represented as a linear problem?
Answer: Nonlinear problems can be linearized using tangent planes or linear approximations.

Partial differentiation of multivariable functions.
Answer: Partial differentiation computes the rate of change of a function with respect to one variable, holding others constant.

How to find extreme values of a function? Necessary and sufficient conditions?
Answer: Extreme values can be found by analyzing critical points and endpoints. First and second derivative tests provide conditions.

### **Reference**

- [Picture resource 1](https://cdn.kastatic.org/ka-perseus-images/62a0493b8bb7f29f2655190b718be3d029e6750e.png)
- [Picture resource 2](https://mathinsight.org/media/image/image/dot_product_projection.png)
- [Picture resource 3](https://media.cheggcdn.com/media/0fd/0fd5663e-13c8-4c34-accf-ba8b4787ca90/php94XjUH)
- [Picture resource 4](https://cs184.eecs.berkeley.edu/public/sp19/lectures/lec-9-raytracing/slides/slide-23.jpg)
- [Picture resource 5](https://www.math.ucdavis.edu/~daddel/MATH22AL/MATH_22AL_New_Website/image/lab10/section_10_14.png)
- [Picture resource 6](https://www3.ntu.edu.sg/home/ehchua/programming/opengl/images/Graphics3D_CameraPerspective.png)
- [Picture resource 7](http://15462.courses.cs.cmu.edu/fall2015/lecture/texture/slide_011)