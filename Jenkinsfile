pipeline {
    agent any

    tools {
        dockerTool 'docker'
        nodejs "nodejs"
    }

    environment{
        
        registry = "saber69/weather-app"
        registryCredential = 'dockerhub-credential-name'        
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }


        stage('Building image') {
            steps{
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push Docker image to a container registry (e.g., Docker Hub)
                    sh 'docker login -u saber69 -p Math0623736244'
                    sh 'docker push saber69/weather-app:latest'
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
