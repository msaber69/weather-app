# Weather App with React TypeScript, Node.js, MySQL, Kubernetes, and Jenkins CI/CD

## Authors 

- Mohammed Saber Bellaaziri
- Bouthayna Atik

## Overview

This project demonstrates the creation of a weather application using React with TypeScript for the frontend, Node.js with Express for the backend, Mysql as the database, and Kubernetes for container orchestration. Jenkins is set up for Continuous Integration and Continuous Deployment (CI/CD) to automate the build, test, and deployment processes.

## Project Structure

The project is structured as follows:

- **`frontend/`**: Contains the React TypeScript weather app.
- **`backend/`**: Contains the Node.js server for fetching weather data.
- **`kubernetes/`**: Contains Kubernetes deployment and services for backend and frontend applications & ingress file.
- **`Jenkinsfile`**: Jenkins Pipeline script for CI/CD.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript.
- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **MySQL**: Relational database for storing weather data.
- **Kubernetes**: Container orchestration for automating deployment and scaling.
- **Jenkins**: CI/CD automation tool.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- Docker installed.
- MySQL installed and running.
- Kubernetes cluster set up.
- Jenkins installed and configured.

### Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/msaber69/weather-app.git
   cd weather-app
   ```

2. **Jenkins CI/CD:**
   - Set up a Jenkins pipeline with the provided Jenkinsfile.
   - Configure Jenkins to connect to your version control repository.

3. **Kubernetes Deployment:**
   - Ensure your Kubernetes cluster is running.
   - Apply the Kubernetes deployment files.
     

## MySQL Setup

Ensure MySQL is installed and running on your machine or server. Update the MySQL connection details in the `backend/config/db.js` file if needed.

## Jenkins CI/CD Pipeline

The Jenkins CI/CD pipeline is configured in the `Jenkinsfile`. It includes the following stages:

1. **Checkout:** Fetches the source code from the repository.
2. **Build Docker Image:** Builds the Docker image for the application.
3. **Push Docker Image:** Pushes the Docker image to a container registry (e.g., Docker Hub).
4. **Deploy to Kubernetes:** Deploys the application to Kubernetes.

## Additional Notes

- Ensure Docker is running and properly configured on the Jenkins server.
- Adjust Jenkins configurations, such as credentials and Kubernetes deployment, based on your setup.

