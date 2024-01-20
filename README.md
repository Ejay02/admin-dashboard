# Admin Dashboard with NestJS Backend and Vue.js Frontend

## Introduction

This project is an Admin Dashboard that utilizes the NestJS framework for the backend, integrating microservices, RabbitMQ for message communication, and MongoDB and PostgreSQL as databases. On the frontend, Vue.js and Bootstrap are used to create a responsive and user-friendly interface.

## Features

- **Microservices Architecture:** The backend is structured as microservices for scalability and modularity.

- **RabbitMQ Integration:** RabbitMQ is employed for efficient message communication between microservices.

- **MongoDB and PostgreSQL Databases:** MongoDB is used as a NoSQL database for flexibility, while PostgreSQL serves as a relational database for structured data.

- **Vue.js and Bootstrap Frontend:** The frontend is built with Vue.js for dynamic UI components and Bootstrap for a clean and responsive design.

## Prerequisites

- Node.js
- npm
- Vue.js
- NestJS
- RabbitMQ
- MongoDB
- PostgreSQL

## Installation

### Backend (NestJS)

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/admin-dashboard.git
    ```

2. **Navigate to the backend directory:**

    ```bash
    cd admin-dashboard/backend
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Configure RabbitMQ, MongoDB, and PostgreSQL connection in the `.env` file.**

5. **Start the backend:**

    ```bash
    npm run start
    ```

### Frontend (Vue.js)

1. **Navigate to the frontend directory:**

    ```bash
    cd admin-dashboard/frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure the backend API URL in the `.env` file.**

4. **Start the frontend:**

    ```bash
    npm run serve
    ```

## Usage

Visit [http://localhost:8080](http://localhost:8080) in your browser to access the Admin Dashboard. Log in, explore the features, and manage your data seamlessly.

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback and contributions are highly appreciated.

## License

This project is licensed under the [MIT License](LICENSE.md).
