# Job_Portal-WebApp

![Java](https://img.shields.io/badge/Java-24-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6.x-blueviolet)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-5.0-green)
![Docker](https://img.shields.io/badge/Docker-Multi--Stage-blue)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render&logoColor=white)
![Netlify](https://img.shields.io/badge/Frontend-Netlify-00C7B7?logo=netlify&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Frontend-007ACC?logo=typescript&logoColor=white)

A comprehensive, full-stack web application designed to connect job seekers with employers efficiently. This platform features a **scalable, production-grade Spring Boot REST API backend** for robust job management and user interaction, coupled with a **high-performance, responsive web interface** built using React for a seamless and intuitive user experience in job searching, application management, and talent acquisition.

<img width="2314" height="1589" alt="JobPortalHomeScreen" src="https://github.com/user-attachments/assets/032f8bbb-6098-4cc5-aaf4-6db4749afa94" />


## Live Demo

- **Deployed Backend API**: [https://jobhook-backend-v1-0.onrender.com](https://jobhook-backend-v1-0.onrender.com)
- **Deployed Frontend App**: [https://job-hook.netlify.app/](https://job-hook.netlify.app/)

## Key Features & Benefits

### For Job Seekers
-   **Intuitive Job Search**: Easily find relevant job postings with powerful search and filtering options.
-   **Application Management**: Track submitted applications and manage application status in a personalized dashboard.
-   **Responsive Interface**: Access the portal from any device with a fluid and adaptive design, ensuring a consistent experience across desktops, tablets, and mobile phones.

### For Recruiters
-   **Effortless Job Posting**: Quickly create, edit, and publish new job opportunities with comprehensive details.
-   **Talent Acquisition**: Streamline the process of finding, reviewing, and managing potential candidates efficiently.
-   **Secure Candidate Data**: Manage applications and candidate information securely with role-based access controls.

### Core System Features
-   **Scalable Backend API**: Built with Spring Boot and Java for high performance, maintainability, and extensibility, capable of handling a growing user base.
-   **Robust User Authentication & Authorization**: Secure user login and role-based access control powered by Spring Security and JWT.
-   **Email Notifications**: Integrated with Brevo (formerly Sendinblue) for sending transactional emails, such as application confirmations, password resets, and job alerts.
-   **Containerized Deployment**: Docker support for easy setup, deployment, and consistent environment management for the backend.

## Technologies Used

This project leverages a modern and robust technology stack to deliver a high-performance and scalable job portal.

### Languages
-   **Java**: Primary language for the backend API development.
-   **JavaScript**: Core language for frontend development.
-   **TypeScript**: Used for enhanced type safety and maintainability in the frontend.

### Backend
-   **Spring Boot**: Framework for rapidly building the RESTful API.
-   **Spring Security**: For comprehensive authentication and authorization mechanisms.
-   **MongoDB Atlas**: Cloud-hosted NoSQL database for flexible and scalable data storage.
-   **Maven**: Dependency management and build automation tool for Java projects.
-   **Brevo (formerly Sendinblue)**: Transactional API for email services.

### Frontend
-   **React**: JavaScript library for building dynamic and interactive user interfaces.
-   **Mantine UI**: A comprehensive suite of React components for a polished and responsive user interface.
-   **Redux Toolkit**: For efficient and predictable state management across the application.
-   **Node.js**: Runtime environment for running JavaScript on the server-side, primarily used for frontend build processes and dependency management.

### Development & Deployment
-   **Docker**: For containerizing the backend application, ensuring consistent environments from development to production.
-   **Node.js**: JavaScript runtime environment, essential for frontend development tooling (e.g., npm/yarn).

## Project Structure

The repository is organized into a backend (Java/Spring Boot) and a frontend (React/TypeScript) component.

```
.
├── .idea/                 # IntelliJ IDEA project files
├── .gitignore             # Git ignore file for the root
├── Job_Portal.iml         # IntelliJ IDEA module file
├── misc.xml               # IntelliJ IDEA misc settings
├── modules.xml            # IntelliJ IDEA modules settings
├── vcs.xml                # IntelliJ IDEA VCS settings
├── job-portal-backend/    # Java Spring Boot backend application
│   ├── .gitattributes
│   ├── .gitignore
│   ├── .mvn/              # Maven wrapper files
│   │   └── wrapper/
│   │       ├── maven-wrapper.properties
│   ├── Dockerfile         # Dockerfile for backend containerization
│   ├── README.md          # Backend specific README (contains badges/overview)
│   ├── mvnw               # Maven wrapper script (Linux/macOS)
│   ├── mvnw.cmd           # Maven wrapper script (Windows)
│   ├── pom.xml            # Maven project object model file
│   └── src/               # Backend source code
│       └── main/
│           └── java/      # Java source files
├── job-portal-frontend/   # React/TypeScript frontend application (Inferred from important files)
│   ├── public/            # Public assets (index.html, favicon, etc.)
│   ├── src/               # Frontend source code
│   ├── package.json       # Node.js project configuration and dependencies
│   ├── .env.example       # Example environment variables for frontend
│   └── README.md          # Frontend specific README (contains overview)
└── ...                    # Other potential configuration or utility files
```

## Prerequisites

Before you begin, ensure you have the following installed:

### Common
-   [**Git**](https://git-scm.com/): For cloning the repository.
-   [**Docker**](https://www.docker.com/get-started): For containerized deployment (optional, but highly recommended for backend).

### Backend Development
-   [**Java Development Kit (JDK) 24+**](https://www.oracle.com/java/technologies/downloads/): Required to compile and run the Java backend.
-   [**Apache Maven 3.9.9+**](https://maven.apache.org/download.cgi): Build tool for the Java project.
-   **MongoDB Atlas Account**: Or a locally running [MongoDB instance](https://www.mongodb.com/try/download/community).
-   **Brevo (Sendinblue) Account**: For obtaining an API key for transactional emails.

### Frontend Development
-   [**Node.js 18+**](https://nodejs.org/en/download/): Includes npm (Node Package Manager) for managing frontend dependencies.
-   [**Yarn**](https://yarnpkg.com/install) (optional, but commonly used with Node.js projects, alternatively use npm).

## Installation & Setup Instructions

Follow these steps to get your development environment up and running.

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/hashamtanveer-41/Job_Portal-WebApp.git
cd Job_Portal-WebApp
```

### 2. Backend Setup (`job-portal-backend`)

The backend is a Spring Boot application.

#### a. Configuration

1.  Navigate to the backend directory:
    ```bash
    cd job-portal-backend
    ```
2.  Create an `application.properties` file (if it doesn't exist) in `src/main/resources/` and configure your database, email service, and security settings.
    ```properties
    # MongoDB Configuration
    spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

    # Brevo (Sendinblue) Email Service Configuration
    brevo.api.key=<Your Brevo API Key>
    brevo.email.sender=<Your Sender Email Address>
    brevo.email.sender.name=<Your Sender Name>

    # JWT Security Configuration
    jwt.secret=<A_LONG_AND_COMPLEX_SECRET_KEY_FOR_JWT_SIGNATURE>
    jwt.expiration.ms=86400000 # JWT token expiration time in milliseconds (e.g., 24 hours)

    # CORS Configuration (for development, adjust for production)
    cors.allowed.origins=http://localhost:3000,http://localhost:5173 # Adjust based on your frontend development server port(s)
    ```
    Replace placeholder values (`<...>` ) with your actual credentials and settings.

#### b. Build and Run the Backend

You have a few options to run the backend:

**Option 1: Run with Maven (Recommended for Development)**

1.  Ensure you are in the `job-portal-backend` directory.
2.  Build the project using Maven:
    ```bash
    mvn clean install -DskipTests
    ```
3.  Run the Spring Boot application:
    ```bash
    mvn spring-boot:run
    ```
    The backend API will typically start on `http://localhost:8080` (or the port configured in `application.properties`).

**Option 2: Run with Docker**

1.  Ensure Docker Desktop is running on your machine.
2.  From the `job-portal-backend` directory, build the Docker image:
    ```bash
    docker build -t job-portal-backend .
    ```
3.  Run the Docker container, mapping the port and passing necessary environment variables for configuration (these will override properties in `application.properties`):
    ```bash
    docker run -p 8080:8080 \
      -e SPRING_DATA_MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority" \
      -e BREVO_API_KEY="<Your Brevo API Key>" \
      -e JWT_SECRET="<Your_JWT_Secret>" \
      job-portal-backend
    ```
    Adjust environment variables as per your configuration.

### 3. Frontend Setup (`job-portal-frontend`)

The frontend is a React application.

#### a. Configuration

1.  Navigate to the frontend directory:
    ```bash
    cd ../job-portal-frontend # If you are currently in job-portal-backend
    ```
2.  Create a `.env` file in the root of the `job-portal-frontend` directory. This file will store environment-specific variables, particularly the backend API URL.
    ```env
    REACT_APP_API_BASE_URL=http://localhost:8080/api # Replace with your backend API URL
    ```
    *(Note: If your project uses Vite, the variable name might be `VITE_REACT_APP_API_BASE_URL`.)*

#### b. Install Dependencies and Run

1.  Install the necessary Node.js packages:
    ```bash
    npm install
    # or
    yarn install
    ```
2.  Start the frontend development server:
    ```bash
    npm start
    # or
    yarn start
    ```
    The frontend application will typically open in your browser at `http://localhost:3000` (or `http://localhost:5173` if using Vite, or another port if configured differently).

## Usage Examples

Once both the backend and frontend services are running, you can access the Job Portal WebApp through your browser at the frontend's local URL (e.g., `http://localhost:3000` or `http://localhost:5173`).

### General User Flow
-   **Browse Jobs**: On the homepage, users can view a list of available job postings.
-   **Search & Filter**: Utilize the search bar and various filter options (location, role, company, etc.) to refine job searches.
-   **Create Account & Apply**: Job seekers can register, create a profile, and apply to jobs directly through the platform.
-   **Manage Applications**: Logged-in job seekers can track the status of their submitted job applications.
-   **Recruiter Functions**: Recruiters can log in to post new job openings, view submitted applications, and manage candidate pipelines.

### Backend API Endpoints (Implied)
The backend exposes a RESTful API. Common endpoints would typically include:
-   `POST /api/auth/register`: Register a new user (job seeker or recruiter).
-   `POST /api/auth/login`: Authenticate users and receive a JWT token.
-   `GET /api/jobs`: Retrieve all job postings.
-   `POST /api/jobs`: Create a new job posting (Recruiter role required).
-   `GET /api/jobs/{id}`: Retrieve details of a specific job posting.
-   `POST /api/applications`: Apply for a job (Job Seeker role required).
-   `GET /api/users/profile`: View or update user profile information.

For detailed API documentation, if a Swagger/OpenAPI UI is enabled in the backend, it would typically be accessible at `http://localhost:8080/swagger-ui.html` or `http://localhost:8080/v3/api-docs` once the backend is running.

## Configuration Options

This project is highly configurable through environment variables and configuration files to adapt to different deployment environments.

### Backend (`job-portal-backend`)
-   **`src/main/resources/application.properties`**: This file contains default and local development configurations. Key properties include:
    -   `spring.data.mongodb.uri`: The connection string for your MongoDB database.
    -   `brevo.api.key`, `brevo.email.sender`, `brevo.email.sender.name`: Brevo (Sendinblue) API credentials and sender details for email services.
    -   `jwt.secret`, `jwt.expiration.ms`: JWT token signing key and expiration time for security.
    -   `cors.allowed.origins`: A comma-separated list of origins allowed to make requests to the API, crucial for frontend-backend communication.
-   **Environment Variables**: For production or containerized deployments (e.g., Docker), it's best practice to use environment variables. These will typically override values set in `application.properties`. Examples: `SPRING_DATA_MONGODB_URI`, `BREVO_API_KEY`, `JWT_SECRET`.

### Frontend (`job-portal-frontend`)
-   **`.env` file**: Located in the root of the `job-portal-frontend` directory. This file specifies environment variables primarily used during the build and runtime of the frontend application.
    -   `REACT_APP_API_BASE_URL`: The base URL of your backend API (e.g., `http://localhost:8080/api`). Ensure this points to where your backend service is accessible.

## Contributing

We welcome contributions to the Job Portal WebApp! If you're interested in improving the project, please follow these guidelines:

1.  **Fork** the repository on GitHub to your personal account.
2.  **Clone** your forked repository to your local development machine.
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/Job_Portal-WebApp.git
    cd Job_Portal-WebApp
    ```
3.  Create a **new branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-awesome-feature
    # or
    git checkout -b bugfix/resolve-issue-123
    ```
4.  Make your changes, ensuring they adhere to the project's existing coding style and best practices.
5.  **Commit** your changes with a clear and descriptive commit message.
6.  **Push** your branch to your forked repository on GitHub.
7.  Open a **Pull Request** to the `main` branch of the original `Job_Portal-WebApp` repository.

Please ensure your pull request clearly describes the changes you've made, the problem it solves, or the feature it introduces. Include any relevant screenshots or usage examples if applicable.

## License

This project is currently **unlicensed**.

This means that by default, all rights are reserved by the copyright holder (`hashamtanveer-41`). You are free to view, fork, and use this project for personal learning and non-commercial purposes. For any commercial use, distribution, or modification, please contact the repository owner for explicit permission.

## Acknowledgments

-   Thanks to the vibrant open-source community behind Spring Boot, React, MongoDB, Docker, Mantine UI, and all other libraries and tools that made this project possible.
-   Special thanks to [Brevo](https://www.brevo.com/) for their reliable transactional email service.