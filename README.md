# Tasks





# Notes






# Architecture

## Core Module
- Core Services
- Interceptors

## Shared Module
- Shared Components
- Shared Modules

## Modules Folder

Contain Site Major Modules:

### Auth Module
- Auth Components
    - Login
    - Register
    - Verify
    - Request Reset
    - Reset
- Auth Service
- Auth Models
    - iForget
    - iLogin
    - iReset
    - iVerify

### Dashboard Module

Contain Dashboard Sub-Modules

#### Manager Modules
- Users Module
- Projects Module
- Tasks Module

### Employee Modules
- Project Module
- Tasks Module


#### Folders Structures

```bash
.
├── core
│   ├── services
│   └── interceptors
├── Modules
│   ├── auth
│   │   ├── models
│   │   ├── services
│   │   └── components
│   └── dashboard
│       └── subModules
│           ├── manager
│           │   ├── Users
│           │   ├── managerProjects
│           │   └── managerTasks
│           └── employee
│               ├── employeeProjects
│               └── employeeTasks
├── shared
│   └── components
└── README.md
```