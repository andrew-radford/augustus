# Augustus Monorepo

This repository contains an Angular frontend and an Express backend with a MySQL database. Follow the instructions below to set up the project locally.

## Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x.x)
- Yarn (>= 1.x.x)
- MySQL (>= 5.7)

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/augustus.git
   cd augustus
   ```

2. **Install Dependencies**

   - Backend: Navigate to the `packages/backend` directory and install dependencies:

     ```bash
     cd /packages/backend
     yarn install
     ```

   - Frontend: Navigate to the `packages/frontend` directory and install dependencies:

     ```bash
     cd /packages/frontend
     yarn install
     ```

3. **Set Up MySQL Database**

   - Make sure your MySQL server is running.
   - Run the scripts in `packages/sql`

   - Optionally, insert some test data:

     ```sql
     INSERT INTO users (name, email) VALUES
     ('John Doe', 'john@example.com'),
     ('Jane Doe', 'jane@example.com');
     ```

4. **Build and Start the Backend**

   Navigate to the `backend` directory and build/start the backend:

   ```bash
   cd /packages/backend
   yarn build
   yarn start
   ```

5. **Build and Serve the Frontend**

   Navigate to the `frontend` directory and start the Angular development server:

   ```bash
   cd /packages/frontend
   ng serve
   ```

   The Angular application will be available at `http://localhost:4200`.

6. **Test the Setup**

   - **Backend**: Test the API endpoint `http://localhost:3000/api/users` to fetch users from the MySQL database.
   - **Frontend**: Open `http://localhost:4200` in your browser to view the Angular application.

## License

This project is licensed under the MIT License.
