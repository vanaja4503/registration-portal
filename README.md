# Registration Portal

A responsive user registration portal built with React, Formik, Yup, Axios, and Tailwind CSS. The project demonstrates reusable React components, form state management, client-side validation, API integration, and responsive modern UI design.

## Project Overview

The Registration Portal allows users to enter their registration information through a clean and responsive form.

The application includes:

* First name
* Last name
* Email
* Password
* Confirm password
* Client-side form validation
* Loading state during registration
* API integration
* Success and error handling
* Responsive user interface
* Reusable React components

## Technologies Used

* React
* Vite
* JavaScript
* Formik
* Yup
* Axios
* Tailwind CSS
* ESLint

## Features

### 1. Responsive Registration Form

The registration page is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

### 2. Reusable Components

The application uses reusable components instead of placing all UI code inside one component.

Reusable components include:

* `Input`
* `Button`
* `Card`

This makes the application easier to maintain and extend.

### 3. Formik Form Management

Formik is used for:

* Managing form values
* Handling input changes
* Handling form submission
* Managing touched fields
* Managing validation errors
* Managing submitting state

### 4. Yup Validation

Yup is used for client-side validation.

Validation includes:

* Required first name
* Required last name
* Valid email format
* Minimum password length
* Password confirmation

Example validation flow:

```text
User enters data
      ↓
Formik manages values
      ↓
Yup validates values
      ↓
Valid?
   /     \
 No       Yes
 ↓         ↓
Errors    Submit
           ↓
        API Request
```

### 5. API Integration

Axios is used to communicate with the API.

The current project uses JSONPlaceholder as a temporary test API to demonstrate the frontend API integration.

The API service is separated into:

```text
src/services/api.js
```

This makes it easier to replace the test API with a real backend later.

### 6. Loading State

When the user submits the form, the button changes from:

```text
Register
```

to:

```text
Registering...
```

This prevents confusion while the API request is being processed.

### 7. Error Handling

The application handles failed API requests and displays an appropriate message to the user.

## Project Structure

```text
registration-portal/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Input.jsx
│   │
│   ├── pages/
│   │   └── Registration.jsx
│   │
│   ├── schemas/
│   │   └── registrationSchema.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Folder Responsibilities

### `components/`

Contains reusable UI components.

```text
components/
├── Button.jsx
├── Card.jsx
└── Input.jsx
```

### `pages/`

Contains complete application pages.

```text
pages/
└── Registration.jsx
```

### `schemas/`

Contains Yup validation schemas.

```text
schemas/
└── registrationSchema.js
```

### `services/`

Contains API communication logic.

```text
services/
└── api.js
```

## Application Flow

The complete registration flow is:

```text
User
  ↓
Registration Page
  ↓
Reusable Input Components
  ↓
Formik
  ↓
Yup Validation
  ↓
Validation Successful
  ↓
handleSubmit()
  ↓
Axios
  ↓
API
  ↓
Response
  ↓
Success / Error Message
```

## Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Open the project

```bash
cd registration-portal
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown by Vite, usually:

```text
http://localhost:5173/
```

## Available Commands

### Start development server

```bash
npm run dev
```

### Build the application

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

## Validation Rules

| Field            | Validation                     |
| ---------------- | ------------------------------ |
| First Name       | Required, minimum 2 characters |
| Last Name        | Required, minimum 2 characters |
| Email            | Required, valid email format   |
| Password         | Required, minimum 8 characters |
| Confirm Password | Required, must match password  |

## API

The current frontend uses JSONPlaceholder as a temporary API for testing.

Current endpoint:

```text
POST /users
```

The API logic is located in:

```text
src/services/api.js
```

### Future Backend Integration

The temporary API can later be replaced with a real backend:

```text
React
  ↓
Axios
  ↓
FastAPI
  ↓
SQLAlchemy
  ↓
PostgreSQL
```

The final application can then store real user registration information in a PostgreSQL database.

## Future Improvements

Planned improvements include:

* Connect to a FastAPI backend
* PostgreSQL database integration
* User authentication
* Password hashing
* Login functionality
* JWT authentication
* Protected routes
* Better API error messages
* Success notification component
* Environment variables for API URLs
* Deployment
* Production backend integration

## Learning Outcomes

This project demonstrates practical knowledge of:

* React functional components
* React component reusability
* Props
* Form handling
* Formik
* Yup validation
* API integration
* Axios
* Async/await
* Error handling
* Loading states
* Tailwind CSS
* Responsive UI design
* Project folder organization
* Frontend architecture

## Author

**Vanaja Reddy**

## License

This project is created for learning and portfolio purposes.
