# Job Portal Frontend

This repository contains the source code for the Job Portal Frontend, a high-performance, responsive web interface designed for both job candidates and recruiters. Built with a modern and robust technology stack, it provides a seamless and intuitive user experience for job searching, application management, and talent acquisition.

## Project Overview & Features

The Job Portal Frontend is a feature-rich platform that empowers users to navigate the job market with ease. It offers a sleek, minimalist design with a native dark theme, ensuring a comfortable viewing experience in any lighting condition.

### Key Features:
- **Interactive Job Board**: A dynamic and responsive job board with advanced search and filtering capabilities to help candidates find the perfect role.
- **Multi-Step Application Wizard**: A comprehensive and user-friendly multi-step form for submitting job applications, designed to capture all necessary information efficiently.
- **Stateful Recruiter Dashboard**: An intuitive dashboard for recruiters to manage job postings, track applications, and view candidate profiles in real-time.
- **Real-Time Application Status**: Candidates can track the status of their applications in real-time, from submission to hiring decision.
- **Profile & Resume Upload**: A straightforward interface for users to build their profiles and upload resumes, powered by Cloudinary for reliable media management.

## Architecture & Tech Stack

The frontend architecture is built upon a foundation of industry-leading technologies, carefully selected to deliver a scalable, maintainable, and high-performance application.

| Frontend Layer      | Stack Component     | Core Responsibility                                                                                             |
| ------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Core Framework**  | React (with Vite)   | Powers the component-based UI, providing a fast and efficient development experience with near-instant hot-reloads. |
| **Language**        | TypeScript          | Ensures type safety and code quality, making the codebase more robust and easier to refactor.                   |
| **UI Components**   | Mantine UI (v7+)    | A comprehensive library of accessible and themeable React components used to build the core interface.          |
| **Styling**         | Tailwind CSS        | A utility-first CSS framework for creating custom designs and fine-grained styling with maximum flexibility.      |
| **Animations**      | Framer Motion       | Implements smooth micro-interactions, page transitions, and engaging animations throughout the application.       |
| **State Management**| Redux Toolkit (RTK) | Manages global application state, including user sessions, authentication, and real-time data synchronization.  |
| **API Client**      | Axios               | Handles all HTTP communication with the backend API, with centralized interceptors for request/response handling. |

## Folder Structure

The project follows a feature-based folder structure to promote scalability and maintainability. This organization keeps related logic, components, and styles co-located, making it easier to navigate and develop new features.

```
/src
├── api/                # Centralized Axios instance, interceptors, and API service definitions
├── components/         # Shared, reusable UI components (e.g., Button, Input, Modal)
├── features/           # Feature-based modules (e.g., authentication, job-search, profile)
│   ├── authentication/
│   ├── job-search/
│   └── ...
├── hooks/              # Custom React hooks for shared logic
├── pages/              # Top-level page components corresponding to application routes
├── store/              # Redux Toolkit setup (store, slices, and actions)
├── styles/             # Global styles, theme configuration, and Tailwind CSS setup
└── utils/              # Utility functions and helper scripts
```

## Environment Configurations

The project uses Vite for environment variable management. All environment variables exposed to the client-side code must be prefixed with `VITE_`.

Create a `.env` file in the root of the project with the following variables:

```
# Base URL for the backend API
VITE_API_BASE_URL=http://localhost:8080/api/v1

# Cloudinary configuration for media uploads
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

**Note**: The `VITE_` prefix is a security feature of Vite to prevent accidentally exposing sensitive environment variables to the client-side bundle.

## Getting Started (Local Development)

To get the project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/job-portal-frontend.git
    cd job-portal-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This command compiles the application into a production-ready single-page application (SPA) in the `dist` directory.

## Engineering Challenges & Lessons Learned

### Handling Indefinite Page Loading on Expired Sessions

A critical challenge encountered during development was the handling of expired user sessions. When an authentication token expired, API requests would fail with a `401 Unauthorized` status, but the UI would remain in a loading state indefinitely, creating a poor user experience.

To solve this, we implemented a global response interceptor using Axios. This interceptor checks every API response for a `401` or `403` status code. Upon detecting an unauthenticated response, it performs the following actions:

1.  **Dispatches a Redux action** to clear the user's authentication state from the global store and `localStorage`.
2.  **Redirects the user** to the `/login` page using the application's routing service.

This approach ensures that the application gracefully handles session expirations, preventing broken loading states and providing a seamless and secure user flow. It centralizes the authentication error handling logic, making the application more robust and easier to maintain.
