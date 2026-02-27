# Simple MERN Stack Understanding

A full-stack web application built with MongoDB, Express.js, React, and Node.js.

## Tech Stack

**Frontend:**
- React 19
- React Router
- Tailwind CSS + DaisyUI
- Vite
- Axios

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- CORS
- Upstash Redis (Rate Limiting)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
```bash
git clone https://github.com/Kousik8436/ThinkBoard.git
cd "Simple Mern Stack Understanding"
```

2. Install dependencies
```bash
npm run build
```

3. Configure environment variables

Create `.env` files in both `backend` and `frontend` directories with required variables.

## Running the Application

**Development Mode:**

Start both frontend and backend:
```bash
npm start
```

Or run separately:
```bash
npm run start:backend
npm run start:frontend
```

**Backend only:**
```bash
cd backend
npm run dev
```

**Frontend only:**
```bash
cd frontend
npm run dev
```

## Project Structure

```
├── backend/
│   ├── src/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   └── package.json
└── package.json
```

## License

ISC
