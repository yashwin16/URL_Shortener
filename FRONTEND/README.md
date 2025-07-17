Setup Instructions:

=>Prerequisites
1.Node.js
2.MongoDB

Step 1: Setup the Backend
1.Navigate to the backend folder:
cd BACKEND
2.Install dependencies:
npm install
3.Start the server:
npm run dev

Step 2: Setup the Frontend
1.Navigate to the frontend folder:
cd FRONTEND
2.Install dependencies:
npm install
3.Start the server:
npm run dev

Step 4: Test the App
=>Visit http://localhost:3000

1.Register or login (auth is JWT-based)
2.Shorten any valid long URL
3.Copy and use the short URL (redirect will work via backend)
4.Logout securely

=>Tech Stack
->Frontend
1.React.js
2.Tailwind CSS — Utility-first styling
3.Redux Toolkit — Global state management
4.TanStack Query — Server-state handling and caching
5.Axios — For API calls

->Backend
1.Node.js + Express
2.MongoDB + Mongoose
3.nanoid — For generating unique short codes
4.dotenv — For environment variables
5.JWT — For authentication
6.Bcrypt — For password hashing


=>Features
1.User registration and login
2.Secure password hashing with bcryptjs
3.JWT-based authentication
4.Shorten long URLs with unique short codes
5.Authenticated access to user-specific links
6.Copy-to-clipboard for short links
7.Fully responsive frontend with Tailwind
8.Clean global state and data handling with Redux & TanStack

=>API Endpoints:
-> Auth-
1.Register - POST /api/auth/register
2.Login - POST /api/auth/login
3.Logout - GET /api/auth/logout
4.Get Current User - GET /api/auth/me

-> User-
1.Get All User URLs - POST /api/user/urls

-> Short URL-
1.Create Short URL - POST /api/create
2.Redirect from Short URL - GET /:id

=>AI Assistance:
->ChatGPT was used to:
1.Improve code readability and efficiency
2.Suggest better naming conventions
3.Improve commit messages
4.Help with debugging and error handling
5.Improve overall project structure and organization
6.Help with frontend design and layout
7.Help with error handling and validation