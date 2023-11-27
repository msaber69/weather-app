pipeline {
    agent any

    tools {nodejs "nodejs"}

    environment {
        DOCKER_IMAGE = 'saber69/weather-app:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }


        stage('Build and Test Locally') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(env.DOCKER_IMAGE)
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image(env.DOCKER_IMAGE).push()
                    }
                }
            }
        }

        /*stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Add your Kubernetes deployment steps here
                    // For example, kubectl apply -f deployment.yaml
                }
            }
        }*/
    }

    post {
        failure {
            echo 'Pipeline failed! Cleanup or notify here.'
        }
    }
}
