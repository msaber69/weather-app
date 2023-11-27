pipeline {
    agent any

    tools {
        dockerTool 'docker'
        nodejs "nodejs"
    }

    environment {
        DOCKER_IMAGE = 'saber69/weather-app:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }


        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image using the provided Dockerfile
                    docker.image('node:14-alpine').inside {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }


         stage('Push Docker Image') {
            steps {
                script {
                    // Push Docker image to a container registry (e.g., Docker Hub)
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image(env.DOCKER_IMAGE).push()
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    kubernetesDeploy(
                        kubeconfigId: '5e480843-4604-4183-ae53-e2f3914c5d1c',
                        configs: '/Users/msaber/weather-app/deployment.yaml', 
                        enableConfigSubstitution: true
                    )
                }
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed! Cleanup or notify here.'
        }
    }
}
