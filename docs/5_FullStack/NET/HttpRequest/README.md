---
ᴴₒᴴₒᴴₒ: ture
comments: true
---

# **:material-dot-net:{.e_dotnet} HTTP Request**


## **C#**

In **C#** (and particularly in **.NET**), you can use the `HttpClient` class to make HTTP requests. This class is part of the `System.Net.Http` namespace and provides methods to perform HTTP operations such as `GET`, `POST`, `PUT`, and `DELETE`.

???+Note "HTTP Requests in C#"

    - **`HttpClient`** is a class in the `System.Net.Http` namespace that allows you to make HTTP requests.
    ```csharp
    using System;
    using System.Net.Http;
    using System.Threading.Tasks;

    public class Program
    {
        public static async Task Main(string[] args)
        {
            using HttpClient client = new HttpClient();
            try
            {
                // [GET, POST, PUT, DELETE] is showing below bullet points
                // Like HttpResponseMessage response = await client.[GET, POST, PUT, DELETE]Async("https://api.example.com");

                response.EnsureSuccessStatusCode(); // Throw if not 2xx

                string responseData = await response.Content.ReadAsStringAsync();
                Console.WriteLine(responseData);
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Request error: {e.Message}");
            }
        }
    }
    ```

    - **GET**:
      ```csharp
      HttpResponseMessage response = await client.GetAsync("https://api.example.com");
      ```
    - **POST**:
      ```csharp
      StringContent content = new StringContent("{\"name\":\"value\"}", Encoding.UTF8, "application/json");
      HttpResponseMessage response = await client.PostAsync("https://api.example.com", content);
      ```
    - **PUT**:
      ```csharp
      StringContent content = new StringContent("{\"name\":\"value\"}", Encoding.UTF8, "application/json");
      HttpResponseMessage response = await client.PutAsync("https://api.example.com/1", content);
      ```
    - **DELETE**:
      ```csharp
      HttpResponseMessage response = await client.DeleteAsync("https://api.example.com/1");
      ```

## **.NET**

`IHttpContextAccessor` is an **interface in ASP.NET Core** that allows you to access the <u>current HTTP context (e.g., request, response, user claims)</u> from places where dependency injection (DI) doesn't normally apply, such as static classes or services that don't have access to the `HttpContext`.

???+Note "When is `IHttpContextAccessor` used?"
    
    - In **middleware** or **services** that need access to the `HttpContext` outside the scope of a typical controller or page (in other classes where the HttpContext is not directly available).
    - Helps when you need to access **request-related information** (like headers, cookies, or user identity) from areas without built-in DI support.

???+Note "Registering and Using `IHttpContextAccessor`"

    - **Step 1**: Register in `Program.cs` (or `Startup.cs`)
    ```csharp
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddHttpContextAccessor(); // Register IHttpContextAccessor
    }
    ```

    - **Step 2**: Inject and Use in a Service
    ```csharp
    using Microsoft.AspNetCore.Http;

    public class MyService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public MyService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public void LogCurrentUser()
        {
            var userName = _httpContextAccessor.HttpContext?.User?.Identity?.Name;
            Console.WriteLine($"Current User: {userName}");
        }
    }
    ```

    **Explanation**:

      - We register `IHttpContextAccessor` so that it can be injected where needed.
      - In the service, we use it to access the current `HttpContext` and log the current user.