# Jamboard

Jamboard is a collaborative online whiteboard application built with Next.js, Convex, Liveblocks, and Clerk for seamless real-time collaboration and user authentication. This application allows teams to create, edit, and manage boards with various interactive tools and features.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-Time Collaboration**: Built with Liveblocks for seamless multi-user interactions.
- **User Authentication**: Integrated with Clerk for secure user sign-up and sign-in.
- **Dynamic Boards**: Create, edit, and manage multiple boards with various tools.
- **Responsive Design**: Tailwind CSS ensures the application is responsive and visually appealing.
- **Convex Integration**: Utilizes Convex for backend queries and mutations.
- **Custom Components**: Reusable UI components built with Radix UI and Lucide Icons.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production.
- [Convex](https://convex.dev/) - Backend as a service for managing data.
- [Liveblocks](https://liveblocks.io/) - Real-time collaboration infrastructure.
- [Clerk](https://clerk.dev/) - User authentication and management.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components.
- [Lucide Icons](https://lucide.dev/) - Icon library.
- [PostCSS](https://postcss.org/) - Tool for transforming CSS.
- [Vercel](https://vercel.com/) - Deployment platform.

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- **Node.js** (v16 or later) - [Download Node.js](https://nodejs.org/)
- **npm** (v7 or later) - Comes with Node.js

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/jamboard.git
cd jamboard
```

2. Install the dependencies:

```bash
npm install
```

## Configuration

1. Environment Variables:

Create a `.env.local` file in the root directory and add the following environment variables:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=https://your-clerk-frontend-api
NEXT_PUBLIC_CONVEX_APP_ID=your-convex-app-id
NEXT_PUBLIC_CONVEX_API_KEY=your-convex-api-key
NEXT_PUBLIC_LIVEBLOCKS_API_KEY=your-liveblocks-api-key
```

2. Convex Setup:

Initialize Convex by running the following command:

```bash
npx convex init
```

3. Clerk Setup:

Ensusre you have a Clerk account and create a new frontend application. Copy the frontend API URL and add it to the `.env.local` file.

## Running the Application

To start the development server, run the following commands:

```bash
npm run dev
```

And in a separate terminal, run the Convex development server:

```bash
npx convex dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
