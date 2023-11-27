# Weather App with React TypeScript, Node.js, MongoDB, Kubernetes, and Jenkins CI/CD

## Overview

This project demonstrates the creation of a weather application using React with TypeScript for the frontend, Node.js with Express for the backend, MongoDB as the database, and Kubernetes for container orchestration. Jenkins is set up for Continuous Integration and Continuous Deployment (CI/CD) to automate the build, test, and deployment processes.

## Project Structure

The project is structured as follows:

- **`client/`**: Contains the React TypeScript weather app.
- **`server/`**: Contains the Node.js server for fetching weather data.
- **`Jenkinsfile`**: Jenkins Pipeline script for CI/CD.
- **`k8s/`**: Contains Kubernetes deployment files.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript.
- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing weather data.
- **Kubernetes**: Container orchestration for automating deployment and scaling.
- **Jenkins**: CI/CD automation tool.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- Docker installed.
- MongoDB installed and running.
- Kubernetes cluster set up.
- Jenkins installed and configured.

### Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/msaber69/weather-app.git
   cd weather-app
   ```

2. **Client (React TypeScript):**
   ```bash
   cd client
   npm install
   npm start
   ```

3. **Server (Node.js with MongoDB):**
   ```bash
   cd server
   npm install
   node server.js
   ```

4. **Jenkins CI/CD:**
   - Set up a Jenkins pipeline with the provided Jenkinsfile.
   - Configure Jenkins to connect to your version control repository.

5. **Kubernetes Deployment:**
   - Ensure your Kubernetes cluster is running.
   - Apply the Kubernetes deployment files.
     

## MongoDB Setup

Ensure MongoDB is installed and running on your machine or server. Update the MongoDB connection details in the `server/server.js` file if needed.

## Jenkins CI/CD Pipeline

The Jenkins CI/CD pipeline is configured in the `Jenkinsfile`. It includes the following stages:

1. **Checkout:** Fetches the source code from the repository.
2. **Build Docker Image:** Builds the Docker image for the application.
3. **Push Docker Image:** Pushes the Docker image to a container registry (e.g., Docker Hub).
4. **Deploy to Kubernetes:** Deploys the application to Kubernetes.

## Additional Notes

- Ensure Docker is running and properly configured on the Jenkins server.
- Adjust Jenkins configurations, such as credentials and Kubernetes deployment, based on your setup.

