pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'saber69/weather-app:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Node.js and npm') {
            steps {
                script {
                    // Check if nvm is installed, and if not, install it
                    sh 'command -v nvm || curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'

                    // Load nvm
                    sh "export NVM_DIR=${NVM_DIR}"
                    sh '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"'

                    // Install Node.js and npm
                    sh 'nvm install node'
                    sh 'npm --version'
                }
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
