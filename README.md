# 🏪 Sports Store - Full-Stack E-Commerce Application

[![Angular](https://img.shields.io/badge/Angular-9-red?logo=angular)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4-blue?logo=bootstrap)](https://getbootstrap.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)](https://nodejs.org/)

Modern e-commerce platform featuring a responsive Angular 9 frontend with Progressive Web App capabilities, paired with a secure Node.js/Express backend utilizing JWT authentication.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Project Structure](#project-structure)
- [Available Commands](#available-commands)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [License](#license)

## Features

✨ Core Functionality:
- ⭐ Progressive Web Application support
- 🔒 Secure JWT authentication
- 🛒 Shopping cart management
- 📱 Responsive design with Bootstrap 4
- 🎯 Font Awesome integration
- 📊 Mock product database
- 🚀 Production-ready configuration

## Prerequisites

🔧 Development Environment Requirements:
- Node.js ≥ 12.x
- npm ≥ 6.x
- Angular CLI (`npm install -g @angular/cli`)

## Setup & Installation

### Clone Repository

```bash
git clone https://github.com/your-username/sports-store.git
cd sports-store
```

### Install Dependencies

📦 Frontend Setup:
```bash
npm install
```

🔧 Backend Setup:
```bash
cd backend
npm install
```

## Running the Application

▶️ Development Mode:

Frontend (Angular):
```bash
ng serve
```
→ Access at http://localhost:4200

Backend (API Server):
```bash
npm run json
```
→ API runs at http://localhost:3000

## Project Structure

📁 Directory Organization:
```markdown
sports-store/
├── src/                    # Angular frontend
│   ├── app/                # Components, services, modules
│   └── assets/             # Styles, images
├── backend/                # Node.js/Express backend
│   ├── data.js             # Mock database
│   ├── authMiddleware.js   # JWT authentication
│   └── server.js           # Express server setup
├── package.json            # Frontend dependencies
└── README.md
```

## Available Commands

🔄 Command Reference:

| Command | Description |
| --- | --- |
| `ng serve` | Start Angular dev server |
| `npm run json` | Start backend API (port 3500) |
| `ng build --prod` | Production build |
| `ng test` | Run unit tests |
| `ng e2e` | Run end-to-end tests |
| `ng lint` | Run linter |

## Configuration

⚙️ Environment Settings:

| Component | Port | Notes |
| --- | --- | --- |
| Frontend | 4200 | Default Angular port |
| Backend | 3000 | Configurable in package.json |
| JWT Secret | - | Configure in authMiddleware.js |

## Deployment

🚀 Production Deployment Steps:

### Frontend Deployment

```bash
ng build --configuration production
```

Deploy the resulting `dist/` folder to:
- Netlify
- Vercel
- Any static hosting service

### Backend Deployment

Deploy to:
- Render
- Railway
- Heroku
- Any Node.js compatible platform

## License

[MIT](LICENSE) © Farouk Afolabi 
####

