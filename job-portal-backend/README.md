# Job Portal Backend API

![Java](https://img.shields.io/badge/Java-24-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.0.6-brightgreen)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6.x-blueviolet)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-5.0-green)
![Docker](https://img.shields.io/badge/Docker-Multi--Stage-blue)
![Brevo](https://img.shields.io/badge/Brevo-Transactional%20API-orange)

Scalable, production-grade Spring Boot REST API for a modern job portal application. Built with a clean, layered Controller-Service-Repository pattern, it delivers secure role-based authentication, automated matching data layers, and structured multi-stage container pipelines.

## Key Features

-   **Secure Authentication:** Robust and secure user authentication and authorization using Spring Security 6, complete with role-based access control (RBAC) and JWT (JSON Web Token) management.
-   **Profile & Document Management:** Seamless profile and resume document processing, leveraging Cloudinary for scalable cloud-based storage and asset management.
-   **Stateful Job Management:** Comprehensive pipelines for job posting, application tracking, and recruitment lifecycle management.
-   **Scheduled Background Tasks:** Automated background thread schedules for cleaning expired transactional data, such as One-Time Password (OTP) verification tokens, ensuring system hygiene.
-   **Automated Email Dispatch:** Integrated with the Brevo (formerly Sendinblue) API for dispatching transactional HTML emails for OTPs, notifications, and other communications.
-   **Distributed Sequence Generation:** Custom non-blocking, auto-incrementing sequence generators for MongoDB that ensure unique ID creation across distributed environments.

## Architecture Overview

The application is built upon a classic three-layer **Controller-Service-Repository** architecture to ensure a clean separation of concerns and high maintainability.

-   **Controller Layer:** Exposes the RESTful API endpoints. It is responsible for handling incoming HTTP requests, validating payloads, and delegating business logic to the service layer.
-   **Service Layer:** Contains the core business logic. It orchestrates calls between the repository layer and other services, processes data, and handles application-specific rules.
-   **Repository Layer:** Manages data persistence and interaction with the MongoDB Atlas database using Spring Data MongoDB.

To maximize scalability and security, the application uses **ModelMapper** to segregate internal database entities from external-facing Data Transfer Objects (DTOs). This prevents direct exposure of the database schema and allows the API's public contract to evolve independently of the underlying data model.

## Prerequisites

To build and run this project locally, you will need the following installed:

-   Java 24+
-   Maven 3.9+
-   Docker Desktop
-   A MongoDB Atlas Cluster

## Environment Variables

The application configuration is managed via environment variables. Create a `.env` file or set these variables in your shell.

| Variable              | Description                                                 | Example                                                                  |
| --------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------ |
| `DATABASE_URL`        | Your MongoDB Atlas connection string.                       | `mongodb+srv://user:pass@cluster.mongodb.net/job_portal?appName=Job-Portal` |
| `BREVO_API_KEY`       | API key for the Brevo (Sendinblue) email service.           | `xkeysib-9cbf3...`                                                       |
| `JWT_SECRET`          | A strong, secret key for signing JWTs.                      | `mySecretKey123912738a...`                                               |
| `JWT_EXPIRATION_MS`   | JWT expiration time in milliseconds.                        | `300000000`                                                              |
| `JWT_COOKIE_NAME`     | The name of the cookie to store the JWT.                    | `springBootEcom`                                                         |
| `FRONTEND_URL`        | The base URL of the frontend application for CORS.          | `http://localhost:5173/`                                                 |
| `CLOUD_NAME`          | Your Cloudinary cloud name.                                 | `your-cloud-name`                                                        |
| `CLOUD_API_KEY`       | Your Cloudinary API key.                                    | `123456789012345`                                                        |
| `CLOUD_API_SECRET`    | Your Cloudinary API secret.                                 | `aBcDeFgHiJkLmNoPqRsTuVwXyZ`                                              |
| `SECURITY_USERNAME`   | Basic auth username for secured actuators (optional).       | `admin`                                                                  |
| `SECURITY_PASSWORD`   | Basic auth password for secured actuators (optional).       | `password`                                                               |

## Installation & Local Setup

Follow these steps to get the application running on your local machine using Windows PowerShell.

1.  **Clone the repository:**
    ```powershell
    git clone https://github.com/hashamtanveer-41/Job_Portal.git
    cd Job_Portal/job-portal-backend
    ```

2.  **Set Environment Variables:**
    ```powershell
    $env:DATABASE_URL="mongodb+srv://..."
    $env:BREVO_API_KEY="xkeysib-..."
    $env:JWT_SECRET="mySecretKey..."
    # Set other variables as needed
    ```

3.  **Compile and Package:**
    Use the Maven Wrapper to build the application. This command skips tests for a faster build.
    ```powershell
    .\mvnw clean package -DskipTests
    ```

4.  **Run the Application:**
    ```powershell
    java -jar target/job-portal-backend-0.0.1-SNAPSHOT.jar
    ```

## Docker Usage

The project includes a multi-stage `Dockerfile` for creating optimized and secure production images. The build stage uses `maven:3.9.9-eclipse-temurin-24-noble` to compile the application, and the final runtime stage uses the slim `eclipse-temurin:24-jre-noble` image.

1.  **Build the Docker Image:**
    ```powershell
    docker build -t hasham41/jobhook-backend:latest .
    ```

2.  **Run the Container:**
    Use the following script to run the container with the necessary environment variables. The backtick (`` ` ``) is used for multi-line commands in PowerShell.
    ```powershell
    docker run -d -p 8080:8080 `
      -e DATABASE_URL="mongodb+srv://..." `
      -e BREVO_API_KEY="xkeysib-..." `
      -e JWT_SECRET="mySecretKey..." `
      -e JWT_EXPIRATION_MS="300000000" `
      -e JWT_COOKIE_NAME="springBootEcom" `
      -e FRONTEND_URL="http://localhost:5173/" `
      -e CLOUD_NAME="your-cloud-name" `
      -e CLOUD_API_KEY="your-api-key" `
      -e CLOUD_API_SECRET="your-api-secret" `
      --name job-portal-api `
      hasham41/jobhook-backend:latest
    ```

## API Documentation (Examples)

Here are some of the core API endpoints available:

-   `POST /api/auth/register`: Register a new user.
-   `POST /api/auth/login`: Authenticate a user and receive a JWT.
-   `POST /api/mail/send-otp`: Send a One-Time Password to a user's email.
-   `POST /api/mail/verify-otp`: Verify the provided OTP.
-   `POST /api/jobs/create`: Create a new job listing (Recruiter role required).
-   `GET /api/profiles/{id}`: Retrieve a user's public profile.

## Technical Edge Cases & Lessons Learned

> **Self-Healing ID Generation in MongoDB**
>
> A critical lesson learned during development involves the sequence generator for MongoDB. When the application is deployed against a new or "cold" Atlas cluster, the `sequences` collection required for generating auto-incrementing IDs does not exist. A standard `findAndModify` operation would query for the sequence document, find nothing, and return `null`, causing a `NullPointerException`. The solution was to explicitly enable the `upsert` option (`options.upsert(true)`). This instructs MongoDB to atomically create the sequence document if it doesn't exist on the first call, making the ID generation mechanism self-healing and resilient to fresh database deployments.

> **Compiler-Level Bytecode Weaving with Lombok and JDK 24**
>
> Integrating Lombok v1.18.46 with a cutting-edge release like JDK 24 presented a significant challenge. Initial builds failed with "cannot find symbol" errors because the Java compiler could not locate getters, setters, and constructors that Lombok was supposed to generate. Lombok works by "weaving" bytecode during the compilation phase, a process that is highly sensitive to the compiler's internal APIs. The resolution required precisely syncing the `lombok` dependency version with the `lombok-maven-plugin` and configuring the `maven-compiler-plugin` to explicitly recognize Lombok's annotation processor paths. This alignment ensures that the bytecode manipulation occurs correctly, preventing symbol generation crashes under the new JDK.
